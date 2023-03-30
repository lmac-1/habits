export default function HabitTableContainer({ children }) {
  return (
    <div className="grid grid-cols-8 gap-4">
      <div className="col-start-1 col-end-4"></div>
      {children}
    </div>
  );
}
