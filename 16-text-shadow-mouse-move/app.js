const hero = document.querySelector(".hero");
const text = document.querySelector("h1");

const walk = 100;

function shadow(event) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = event;

  if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  // text.style.textShadow = `
  //   ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
  //   ${-xWalk}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
  //   ${yWalk}px ${-xWalk}px 0 rgba(0, 255, 0, 0.7),
  //   ${-yWalk}px ${-xWalk}px 0 rgba(0, 0, 255, 0.7)
  // `;
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 hsla(300, 100%, 50%, 0.7),
    ${-xWalk}px ${yWalk}px 0 hsla(180, 100%, 50%, 0.7),
    ${xWalk}px ${-yWalk}px 0 hsla(120, 100%, 50%, 0.7),
    ${-xWalk}px ${-yWalk}px 0 hsla(240, 100%, 50%, 0.7)
  `;
}

hero.addEventListener("mousemove", shadow);
