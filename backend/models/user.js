import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide an username"],
      unique: true,
      select: false,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,

      select: false,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],

      select: false,
    },
    // token: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
