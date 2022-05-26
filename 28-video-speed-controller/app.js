const speed = document.querySelector(".speed");
const speedBar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

const minPlaybackRate = 0.4;
const maxPlaybackRate = 4;

let isDown = false;
function handleMove(event) {
  if (isDown) {
    const y = event.pageY - speed.offsetTop;
    const percentY = y / speed.offsetHeight;

    const height = `${Math.round(percentY * 100)}%`;
    speedBar.style.height = height;

    const playbackRate =
      percentY * (maxPlaybackRate - minPlaybackRate) + minPlaybackRate;

    speedBar.textContent = `${playbackRate.toFixed(2)}×`;
    video.playbackRate = playbackRate;
  }
}

speed.addEventListener("mousedown", () => {
  isDown = true;
});

speed.addEventListener("mouseup", () => {
  isDown = false;
});

speed.addEventListener("mouseleave", () => {
  isDown = false;
});

speed.addEventListener("mousemove", handleMove);
