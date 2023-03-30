import axios from "axios";

export default async function deleteHabitLog(habitLogId, habitId) {
  try {
    const response = await axios.patch(
      `/api/habit-completion-date/${habitLogId}`,
      {
        habitId,
      }
    );
    return response;
  } catch (e) {
    console.error(e);
  }
}
