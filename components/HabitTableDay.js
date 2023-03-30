export default function HabitTableDay({ day }) {
  return (
    <div
      className={`flex flex-col text-sm ${
        !day.today ? "text-gray-500" : "font-bold"
      }`}
    >
      {day.number}
      <br />
      {day.name}
    </div>
  );
}
