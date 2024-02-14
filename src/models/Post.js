import mongoose from "mongoose";

const { Schema } = mongoose;

const postsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// If the Post collection does not exist, create a new one.
module.exports = mongoose.models.Post || mongoose.model('Post', postsSchema);
