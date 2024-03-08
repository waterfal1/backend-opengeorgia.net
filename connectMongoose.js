import logger from './logger/index.js';

async function connectMongoose(client, express){
  try{
    await client.connect(process.env.DB_URL)
    await express.listen(process.env.PORT, () => logger.info(`server started on port ${process.env.PORT}`))
  } catch(err) {
    logger.error(err)
    console.log(err);
  }
}

export { connectMongoose };
