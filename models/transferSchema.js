import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const transferSchema = new Schema({
  _id: {
    type: String
  },
  id: {
    type: Number,
  },
  cost: {
		type: String,
  },
  placeName: {
    type: String,
  }
});

export default mongoose.model('transfers', transferSchema)