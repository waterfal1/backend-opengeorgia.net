import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tourSchema = new Schema({
  cost: {
    type: String,
  },
  excursions: [{
    cost: {
      type: String,
    },
    full_text: {
      type: String,
    },
    images: [{
      img: {
        type: String,
      }
    }],
    name: {
      type: String,
    },
    plan: [{
      text: {
        type: String,
      }
    }],
    text: {
      type: String,
    },
    directionName: {
      type: String
    }
  }],
  id: {
    type: Number,
  },
  img: {
    type: String,
  },
  main_img: {
    type: String,
  },
  name: {
    type: String,
  },
  text: {
    type: String,
  }
});

export default mongoose.model('tours', tourSchema)
