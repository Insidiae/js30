const allVideos = Array.from(document.querySelectorAll(".videos li"));

const totalTime = allVideos.reduce(function (totalSecs, item) {
  const [mins, secs] = item.dataset.time.split(":").map(parseFloat);
  return totalSecs + secs + mins * 60;
}, 0);

function secondsToTimeString(totalSecs) {
  const hours = Math.floor(totalSecs / 3600);
  const mins = Math.floor((totalSecs % 3600) / 60);
  const secs = (totalSecs % 3600) % 60;
  return `${hours ? `${hours}:` : ""}${mins}:${secs}`;
}

console.log(secondsToTimeString(totalTime));
