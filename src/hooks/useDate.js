export const useDate = () => {
  // Let's Get Yesterdays Date
  const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  const getYesterdaysDate = yesterday.getDate();

  // Let's Get Today's Date
  const todaysDate = new Date().getDate();

  // Let's Get Tomorrows Date
  const getTomorrowTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const tomorrowsDate = getTomorrowTime.getDate();

  // Lets Get tomorrows Day

  const prevDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  let prevActiveDay = prevDay.getDay();
  let dPrevDay;

  switch (prevActiveDay) {
    case 0:
      dPrevDay = "Sun";
      break;
    case 1:
      dPrevDay = "Mon";
      break;

    case 2:
      dPrevDay = "Tues";
      break;

    case 3:
      dPrevDay = "Wed";
      break;

    case 4:
      dPrevDay = "Thur";
      break;

    case 5:
      dPrevDay = "Fri";
      break;

    case 6:
      dPrevDay = "Sat";
      break;
    default:
      dPrevDay = "";
  }

  // Lets Get tomorrows Day

  const dDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  let nextActiveDay = dDay.getDay();
  let dNextDay;

  switch (nextActiveDay) {
    case 0:
      dNextDay = "Sun";
      break;
    case 1:
      dNextDay = "Mon";
      break;

    case 2:
      dNextDay = "Tues";
      break;

    case 3:
      dNextDay = "Wed";
      break;

    case 4:
      dNextDay = "Thur";
      break;

    case 5:
      dNextDay = "Fri";
      break;

    case 6:
      dNextDay = "Sat";
      break;
    default:
      dNextDay = "";
  }

  // Let's Get Next Tomorrows Date
  const nextTomorrow = new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000
  );

  const nextTomorrowsDate = nextTomorrow.getDate();

  // Let's Get Next Next Tomorrows Day
  let nextNextDay = new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000
  );

  const nextNextActiveDay = nextNextDay.getDay();
  let dNextNextDay;

  switch (nextNextActiveDay) {
    case 0:
      dNextNextDay = "Sun";
      break;
    case 1:
      dNextNextDay = "Mon";
      break;

    case 2:
      dNextNextDay = "Tues";
      break;

    case 3:
      dNextNextDay = "Wed";
      break;

    case 4:
      dNextNextDay = "Thur";
      break;

    case 5:
      dNextNextDay = "Fri";
      break;

    case 6:
      dNextNextDay = "Sat";
      break;
    default:
      dNextDay = "";
  }

  // Let's Get Current Month
  const month = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date();
  let activeMonth = month[d.getMonth()];

  return {
    activeMonth,
    yesterday,
    dPrevDay,
    getYesterdaysDate,
    todaysDate,
    getTomorrowTime,
    dNextDay,
    tomorrowsDate,
    nextTomorrow,
    dNextNextDay,
    nextTomorrowsDate,
  };
};
