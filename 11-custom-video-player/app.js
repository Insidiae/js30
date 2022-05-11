//* Get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const allSkipButtons = player.querySelectorAll("[data-skip]");
const allRanges = player.querySelectorAll(".player__slider");

//* Build our functions
function togglePlay() {
  video[video.paused ? "play" : "pause"]();
}

function updateButton() {
  toggle.textContent = video.paused ? "►" : "❚❚";
}

function skip(event, idx) {
  video.currentTime += parseFloat(allSkipButtons[idx].dataset.skip);
}

let willRangeUpdate = false;
function handleRangeUpdate(event, idx) {
  if (willRangeUpdate) {
    video[allRanges[idx].name] = allRanges[idx].value;
  }
}

function handleProgress() {
  const percentProgress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentProgress}%`;
}

let willScrub = false;
function scrub(event) {
  if (willScrub) {
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }
}

//* Hook up the event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

allSkipButtons.forEach((skipButton, idx) => {
  skipButton.addEventListener("click", (event) => {
    skip(event, idx);
  });
});

allRanges.forEach((range, idx) => {
  range.addEventListener("change", (event) => {
    handleRangeUpdate(event, idx);
  });
  range.addEventListener("mousemove", (event) => {
    handleRangeUpdate(event, idx);
  });
  range.addEventListener("mousedown", () => {
    willRangeUpdate = true;
  });
  range.addEventListener("mouseup", () => {
    willRangeUpdate = false;
  });
  range.addEventListener("mouseout", () => {
    willRangeUpdate = false;
  });
});

progress.addEventListener("click", (event) => {
  willScrub = true;
  scrub(event);
  willScrub = false;
});
progress.addEventListener("mousemove", scrub);
progress.addEventListener("mousedown", () => {
  willScrub = true;
});
progress.addEventListener("mouseup", () => {
  willScrub = false;
});
progress.addEventListener("mouseout", () => {
  willScrub = false;
});
