const allHoles = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const allMoles = document.querySelectorAll(".mole");

let timeUp = false;
let score = 0;
let lastHole;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  let hole;
  do {
    const idx = Math.floor(Math.random() * holes.length);
    hole = holes[idx];
  } while (hole === lastHole);

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(allHoles);

  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");

    if (!timeUp) {
      peep();
    }
  }, time);
}

function startGame(duration = 10000) {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();

  setTimeout(() => {
    timeUp = true;
  }, duration);
}

function bonk(event, idx) {
  if (event.isTrusted) {
    score++;
    allHoles[idx].classList.remove("up");
    scoreBoard.textContent = score;
  }
}

allMoles.forEach((mole, idx) => {
  mole.addEventListener("click", (event) => bonk(event, idx));
});
