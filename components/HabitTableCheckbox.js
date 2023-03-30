import { useState } from "react";
import addHabitLog from "@/utils/addHabitLog";
import deleteHabitLog from "@/utils/deleteHabitLog";

export default function HabitTableCheckbox({ day, habit }) {
  const [habitLog, setHabitLog] = useState(
    habit.completion_dates.find(
      (log) =>
        new Date(log.date).toDateString() === new Date(day).toDateString()
    )
  );
  const [isChecked, setIsChecked] = useState(Boolean(habitLog));

  const handleCheckboxChange = async (checked, habitId, date, habitLog) => {
    if (checked) {
      const { data } = await addHabitLog(habitId, date);

      setHabitLog(data.newCompletionDate);
    } else {
      await deleteHabitLog(habitLog._id, habitId);
    }
    setIsChecked(checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        key={day}
        checked={isChecked}
        onChange={(e) =>
          handleCheckboxChange(e.target.checked, habit._id, day, habitLog)
        }
      />
    </div>
  );
}
