const allTriggers = document.querySelectorAll(".cool > li");
const dropdownBackground = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter(event, idx) {
  const trigger = allTriggers[idx];

  trigger.classList.add("trigger-enter");
  setTimeout(function () {
    if (trigger.classList.contains("trigger-enter")) {
      trigger.classList.add("trigger-enter-active");
    }
  }, 150);

  dropdownBackground.classList.add("open");

  const dropdown = trigger.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  dropdownBackground.style.setProperty("width", `${coords.width}px`);
  dropdownBackground.style.setProperty("height", `${coords.height}px`);
  dropdownBackground.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave(event, idx) {
  allTriggers[idx].classList.remove("trigger-enter-active");
  allTriggers[idx].classList.remove("trigger-enter");
  dropdownBackground.classList.remove("open");
}

allTriggers.forEach((trigger, idx) => {
  trigger.addEventListener("mouseenter", (event) => handleEnter(event, idx));
  trigger.addEventListener("mouseleave", (event) => handleLeave(event, idx));
});
