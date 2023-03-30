import axios from "axios";

export default async function addHabitLog(habitId, date) {
  try {
    const { data } = await axios.post("/api/habit-completion-date", {
      habitId,
      date: new Date(date).toISOString(),
    });
    return data;
  } catch (e) {
    console.error(e);
  }
}
