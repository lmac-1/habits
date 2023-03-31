import dbConnect from "@/lib/db";
import Habit from "@/models/Habit";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a habit by its ID */:
      try {
        const habit = await Habit.findById(id);
        if (!habit) {
          return res.status(404).json({ success: false });
        }
        return res.status(200).json({ success: true, data: habit });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    case "PATCH" /* Edit a habit by its ID */:
      const updates = Object.keys(req.body);
      const allowedUpdates = ["name", "priority", "frequency"];
      const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
      );

      if (!isValidOperation) {
        return res
          .status(400)
          .json({ success: false, error: "Invalid updates" });
      }
      try {
        const habit = await Habit.findById(id);
        if (!habit) {
          return res.status(404).json({ success: false });
        }
        updates.forEach((update) => (habit[update] = req.body[update]));

        await habit.save();

        return res.status(200).json({ success: true, data: habit });
      } catch (e) {
        return res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a habit by its ID */:
      try {
        const deletedHabit = await Habit.findByIdAndDelete(id);
        if (!deletedHabit) {
          return res.status(404).json({ success: false });
        }
        return res.status(200).json({ success: true, data: deletedHabit });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
