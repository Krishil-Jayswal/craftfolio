import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  isTemplate: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  codeurl: {
    type: String,
    required: true,
    trim: true,
  },
  imageurl: {
    type: String,
    required: true,
    trim: true,
  },
}, 
{
    timestamps: true 
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
