import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: [true, "please add a password"],
      minlength: [6,"password should contain min 6 digits"]
    },
    phone: {
      type: String,
      maxLength: [10, "phone number can't be longer than 10 characters"],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    answer:{
      type:String,
      required:true,
    },
    role: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);
export default mongoose.model("users", userSchema);
