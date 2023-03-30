import moment from "moment";

// refactor to work for any days
export const getLastFiveDayCalendarValues = () => {
  return [4, 3, 2, 1, 0].map((day) => getDay(day));
};

const getDay = (dayFromToday) => {
  let day = moment();
  if (dayFromToday !== 0) {
    day = day.subtract(dayFromToday, "day");
  }

  return {
    name: day.format("dddd").slice(0, 2),
    number: day.date(),
    today: dayFromToday === 0 ? true : false,
  };
};
