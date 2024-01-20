// Function to update the timer
function updateTimer() {
  // Set the target date of 23rd January 2023 at 10:00 PM
  const targetDate = new Date("2023-01-23T22:00:00");

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = targetDate - currentDate;

  // Calculate years, days, hours, minutes, and seconds
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // accounting for leap years
  const years = Math.floor(difference / millisecondsPerYear) + 1;
  const days =
    Math.floor((difference % millisecondsPerYear) / (1000 * 60 * 60 * 24)) + 1;
  const hours =
    Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 1;
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)) + 1;
  const seconds = Math.floor((difference % (1000 * 60)) / 1000) + 1;

  // Display the timer on the webpage
  document.getElementById(
    "timer"
  ).innerHTML = `${years} Y ${days} D ${hours} H ${minutes} M ${seconds} S`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer on page load
updateTimer();
