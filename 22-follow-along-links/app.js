// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
const allTriggers = document.querySelectorAll("a");

const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink(event, idx) {
  const linkCoords = allTriggers[idx].getBoundingClientRect();
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.transform = `translate(${
    window.scrollX + linkCoords.left
  }px, ${window.scrollY + linkCoords.top}px)`;
}

allTriggers.forEach((trigger, idx) => {
  trigger.addEventListener("mouseenter", (event) => highlightLink(event, idx));
});
