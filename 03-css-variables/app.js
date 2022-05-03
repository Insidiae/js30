const allInputs = document.querySelectorAll(".controls input");

function handleUpdate(event) {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

allInputs.forEach((input) => input.addEventListener("change", handleUpdate));
allInputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
