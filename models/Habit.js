import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for the habit"],
      maxlength: [60, "Title cannot be more than 60 characters"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Habit || mongoose.model("Habit", habitSchema);
