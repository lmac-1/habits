import dbConnect from "@/lib/db";
import Habit from "@/models/Habit";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "POST":
      // Code for adding a new habit completion date
      addHabitCompletionDate(req, res);
      break;
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function addHabitCompletionDate(req, res) {
  try {
    const { habitId, date } = req.body;
    // Finds habit by ID
    const habit = await Habit.findById(habitId);

    if (!habit) {
      return res.status(404).json({ success: false });
    }

    const parsedDate = new Date(date);

    // Check if a completion date for the given habit already exists
    const existingCompletionDate = habit.completion_dates.find(
      (completionDate) =>
        completionDate.date.toDateString() === parsedDate.toDateString()
    );

    if (existingCompletionDate) {
      return res
        .status(400)
        .json({ message: "Completion date for the given date already exists" });
    }

    // Add the completion date to the habit and save the habit
    habit.completion_dates.push({ date });
    await habit.save();

    return res.status(200).json({ success: true, data: { habit } });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false });
  }
}
