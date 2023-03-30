import dbConnect from "@/lib/db";
import Habit from "@/models/Habit";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      // Code for fetching habits
      try {
        const habits = await Habit.find({});
        res.status(200).json({ success: true, data: habits });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      // Code for creating a new habit
      try {
        const habit = await Habit.create(req.body);
        res.status(201).json({ success: true, data: habit });
      } catch (e) {
        res.status(400).json({ success: false, error: e });
      }
      break;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
