const allCheckboxes = document.querySelectorAll(
  `.inbox input[type="checkbox"]`
);

let lastCheckedIdx;

function handleCheck(event, idx) {
  if (event.shiftKey && allCheckboxes[idx].checked) {
    const startIdx = Math.min(idx, lastCheckedIdx);
    const endIdx = Math.max(idx, lastCheckedIdx);

    for (let i = startIdx; i <= endIdx; i++) {
      allCheckboxes[i].checked = true;
    }
  }

  lastCheckedIdx = idx;
}

allCheckboxes.forEach((checkbox, idx) => {
  checkbox.addEventListener("click", (event) => handleCheck(event, idx));
});
