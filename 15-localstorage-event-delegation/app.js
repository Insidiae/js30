const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) ?? [];

function addItem(event) {
  event.preventDefault();

  const text = this.querySelector("[name=item]").value;

  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, idx) => {
      return `
      <li>
        <input type="checkbox" id="item-${idx}" data-index="${idx}" ${
        plate.done ? "checked" : ""
      } />
        <label for="item-${idx}">${plate.text}</label>
      </li>
    `;
    })
    .join("");
}

function toggleDone(event) {
  if (event.target.matches("input")) {
    const idx = event.target.dataset.index;
    items[idx].done = !items[idx].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
  }
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);
