import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a Category Name"],
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
    trim: true,
  },
  icons: {
    data: Buffer,
    contentType: String,
  },
  images: {
    data: Buffer,
    contentType: String,
  },
});
export default mongoose.model("Category", categorySchema);
