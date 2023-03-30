const mongoose = require("mongoose");
const { Schema } = mongoose;

const completionDateSchema = new Schema({
  date: { type: Date, required: true },
});

const habitSchema = new Schema(
  {
    name: { type: String, required: true },
    /* target_days: { type: Number, required: true }, */
    priority: {
      type: String,
      enum: ["high", "medium", "low"],
      required: true,
    },
    frequency: {
      type: Number,
      required: true,
    },
    completion_dates: { type: [completionDateSchema], default: [] },
  },
  { timestamps: true, collection: "habits" }
);
export default mongoose.models.Habit || mongoose.model("Habit", habitSchema);
