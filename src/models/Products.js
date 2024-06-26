import mongoose from "mongoose";

const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  desc: {
      type: String,
      required: true,
    },
   img: {
      type: String,
      required: true,
    },
   content: {
      type: String,
      required: true,
    },
   
  
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.Products || mongoose.model("Products", productsSchema);