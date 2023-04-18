import dbConnect from "@/lib/db";
import Habit from "@/models/Habit";
import HabitTableContainer from "@/components/HabitTableContainer";
import HabitTableDay from "@/components/HabitTableDay";
import HabitTableRow from "@/components/HabitTableRow";
import Link from "@/components/Link";
import { getLastFiveDayCalendarValues } from "@/utils/getLastFiveDayCalendarValues";
import { getDateDaysAgo } from "@/utils/getDateDaysAgo";

export default function Home({ habits, pastFiveDays }) {
  // refactor function to work for any days
  const calendar = getLastFiveDayCalendarValues();
  console.log(habits);
  return (
    <>
      <div className="w-[450px] mx-auto mt-10">
        <div className="flex justify-between mb-4 place-items-center">
          <h1 className="text-5xl">Habits</h1>
          <Link href="/add" className="mr-5">
            Add habit
          </Link>
        </div>
        <HabitTableContainer>
          {calendar.map((day) => (
            <HabitTableDay day={day} key={day.number} />
          ))}
          {habits.map((habit) => (
            <HabitTableRow
              habit={habit}
              key={habit._id}
              pastFiveDays={pastFiveDays}
            />
          ))}
        </HabitTableContainer>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  // Get the date 5 days ago
  const startDate = getDateDaysAgo(5);

  // Fetch habits with habitLogs for the past 5 days
  const habits = await Habit.aggregate([
    {
      $addFields: {
        completion_dates: {
          $filter: {
            input: "$completion_dates",
            as: "completion",
            cond: { $gte: ["$$completion.date", startDate] },
          },
        },
      },
    },
  ]);

  // Create an array of date objects for the past five days, including today
  const pastFiveDays = Array.from({ length: 5 }, (_, i) =>
    getDateDaysAgo(i)
  ).reverse();

  return {
    props: {
      habits: JSON.parse(JSON.stringify(habits)),
      pastFiveDays: JSON.parse(JSON.stringify(pastFiveDays)),
    },
  };
}
