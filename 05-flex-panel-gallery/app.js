const allPanels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(event) {
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

allPanels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleActive);
});
