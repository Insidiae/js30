function playSound(event) {
  const audio = document.querySelector(`audio[data-key-code="${event.code}"]`);
  if (!audio) {
    return;
  }

  const key = document.querySelector(`.key[data-key-code="${event.code}"]`);
  key.classList.add("playing");

  audio.currentTime = 0;
  audio.play();
}

function removeTransition(event) {
  console.log(event);
  if (event.propertyName === "transform") {
    // event.target.classList.remove("playing");
    //? We're only calling this function on one of the keys, so we can also do:
    this.classList.remove("playing");
  }
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
