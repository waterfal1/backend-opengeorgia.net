import Transfer from "../models/transferSchema.js"
import Review from "../models/reviewSchema.js";
import Tour from "../models/tourSchema.js";
import User from "../models/user.js";
import logger from '../logger/index.js';

const Query = {
  getAllTrans: () => {
    logger.info('getAllTransfers request');
    return Transfer.find()
  },

  getAllReviews: () => {
    logger.info('getAllreviews request');
    return Review.find();
  },

  getAllDirections: () => {
    logger.info('getAlldirections request');
    return Tour.find()
  },
  getUserData: () => {
    logger.info('getAllUsers request');
    return User.find();
  }
}

export default Query
