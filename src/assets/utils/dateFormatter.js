const monthsEN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default function dateFormatter(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear(),
    month = monthsEN[date.getMonth()],
    day = date.getDate();
  return `${month} ${day}, ${year}`;
}
