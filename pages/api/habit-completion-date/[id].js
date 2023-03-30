import dbConnect from "@/lib/db";
import Habit from "@/models/Habit";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  await dbConnect();

  switch (method) {
    case "PATCH":
      // Code for deleting a habit log
      try {
        const habit = await Habit.findByIdAndUpdate(
          req.body.habitId,
          { $pull: { completion_dates: { _id: id } } },
          { new: true }
        );

        if (!habit) {
          return res.status(404).json({ success: false });
        }
        await habit.save();
        return res.status(200).json({ success: true, data: { habit } });
      } catch (e) {
        return res.status(400).json({ success: false });
      }
      break;
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
