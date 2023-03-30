import HabitTableCheckbox from "./HabitTableCheckbox";

export default function HabitTableRow({ habit, pastFiveDays }) {
  return (
    <>
      <div className="col-start-1 col-end-4">{habit.name}</div>
      {pastFiveDays.map((day, index) => (
        <HabitTableCheckbox day={day} habit={habit} key={index} />
      ))}
    </>
  );
}
