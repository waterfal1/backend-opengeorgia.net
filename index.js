import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import { database, config } from 'migrate-mongo';
import { transvers } from './migrations/transvers.js';
import { review } from './migrations/reviews.js';
import { tours } from './migrations/tours.js';
import {users } from './migrations/users.js';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import logger from './logger/index.js';
import schema from './schemaGraphQl.js';
import resolvers from './resolvers/index.js';
import isAuth from './middleware/is-auth.js';
import dotenv from 'dotenv';
import { connectMongoose } from "./connectMongoose.js";
dotenv.config()

const router = express.Router({});

router.get("/myendpoint", async (_req, res, _next) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    res.header("Access-Control-Allow-Origin", "https://www.opengeorgia.net");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type,token");
    res.send(healthcheck);
    logger.log("HealthCheck succesfull");
  } catch (e) {
    healthcheck.message = e;
    res.status(503).send({ error: "Service Unavailable" });
    logger.error("Health check failed", e);
  }
});

const myConfig = {
  mongodb: {
    url: process.env.DB_URL_MIGRATION,
    databaseName: "georgia-excursion",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
};
config.set(myConfig);

const app = express();
app.use(cors());

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://www.opengeorgia.net");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,token");
  next();
};

app.use(allowCrossDomain);
app.use(isAuth);

app.use('/myendpoint', bodyParser.json({limit: '50mb'}), graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

async function startServer(){
  if (process.env.DEV_MODE === "true") {
    const { db } = await database.connect();
    await transvers(db);
    await review(db);
    await tours(db);
    await users(db);
    await connectMongoose(mongoose, app);
    logger.info("Connection in to the databse in DevMode was established");
    logger.info("Migrations were completed");
  } else {
    await connectMongoose(mongoose, app);
    logger.info("Connection in Production mode established");
  }
}

startServer()
