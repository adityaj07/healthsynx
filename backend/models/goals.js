import mongoose, { Schema } from "mongoose";

const goalSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    targetValue: {
      type: Number,
    },
    currentValue: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Upcoming", "Completed"],
      default: "Upcoming",
    },
  },
  { timestamps: true }
);

const Goal = mongoose.models.Goal || mongoose.model("Goal", goalSchema);

export default Goal;