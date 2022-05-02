const allHands = document.querySelectorAll(".hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursDegrees = 90 + (hours / 12) * 360;
  const minsDegrees = 90 + (mins / 60) * 360;
  const secondsDegrees = 90 + (seconds / 60) * 360;

  if (seconds === 0) {
    allHands.forEach((hand) => (hand.style.transition = "none"));
  } else {
    allHands.forEach(
      (hand) =>
        (hand.style.transition =
          "transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)")
    );
  }

  hourHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  secondHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
