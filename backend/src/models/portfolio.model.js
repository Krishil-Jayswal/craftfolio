import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
    prompt: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["template", "prebuilt", "generated"],
    },
    codeurl: {
      type: String,
      required: true,
      trim: true,
    },
    imageurl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
