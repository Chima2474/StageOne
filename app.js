const day = document.getElementsByClassName("day");
const UTC = document.getElementsByClassName("time");
// Select the HTML element by its data-testid attribute
const dayTestId = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const UTCtestId = document.querySelector('[data-testid="currentUTCTime"]');

const currentDate = new Date();

// Get the current UTC time in seconds
const currentUTCTimeInSeconds = Math.floor(currentDate.getTime() / 1000);

// Get the day of the week as an integer (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const dayOfWeek = currentDate.getDay();

// Define an array of day names for human-readable output
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the name of the day of the week
const currentDayOfWeek = dayNames[dayOfWeek];
day[0].textContent = currentDayOfWeek;
UTC[0].textContent = currentUTCTimeInSeconds;
dayTestId.setAttribute("data-testid", `${currentDayOfWeek}`);
UTCtestId.setAttribute("data-testid", currentUTCTimeInSeconds);
console.log(dayTestId, UTCtestId);
