let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const allTimerButtons = document.querySelectorAll("[data-time]");

function startTimer(event, idx) {
  timer(parseInt(allTimerButtons[idx].dataset.time));
}

function timer(secs) {
  if (countdown) {
    clearInterval(countdown);
  }

  const now = Date.now();
  const then = now + secs * 1000;

  displayTimeLeft(secs);
  displayEndTime(then);

  countdown = setInterval(() => {
    const diff = Math.round((then - Date.now()) / 1000);
    if (diff < 0) {
      clearInterval(countdown);
      document.title = "Countdown Timer";
      timerDisplay.textContent = "Time's up!";
      endTimeDisplay.textContent = "";
      return;
    }
    displayTimeLeft(diff);
  }, 1000);
}

function displayTimeLeft(secs) {
  const mins = Math.floor(secs / 60);
  const remainderSecs = secs % 60;
  const displayStr = `${mins}:${remainderSecs.toString().padStart(2, 0)}`;

  document.title = displayStr;
  timerDisplay.textContent = displayStr;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hrs = end.getHours();
  const mins = end.getMinutes();

  endTimeDisplay.textContent = `Be back at ${hrs > 12 ? hrs - 12 : hrs}:${mins
    .toString()
    .padStart(2, 0)} ${hrs > 12 ? "PM" : "AM"}`;
}

allTimerButtons.forEach((timerButton, idx) =>
  timerButton.addEventListener("click", (event) => startTimer(event, idx))
);

document.customForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const mins = parseInt(document.customForm.minutes.value);
  timer(mins * 60);

  document.customForm.reset();
});
