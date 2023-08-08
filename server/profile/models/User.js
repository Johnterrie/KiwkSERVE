import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      min: 2,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    phoneNumber: {
      type: Number,
      required: true,
      min: 11,
      unique: true,
    },
    picturePath: {
      type: Number,
      default: "",
    },
    connections: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
    review: Number,
  },
  {timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;