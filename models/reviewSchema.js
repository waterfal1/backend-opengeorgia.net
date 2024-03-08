import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  _id: {
    type: String,
  },
  alt: {
    type: String,
  },
  date: {
    type: String,
  },
  face: {
    type: String,
  },
  name: {
    type: String,
  },
  quotes: {
    type: String,
  },
  text1: {
    type: String,
  },
  rating: {
    type: String,
  }
});

export default mongoose.model('reviews', reviewSchema)