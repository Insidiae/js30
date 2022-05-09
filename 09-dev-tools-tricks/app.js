const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.group("Regular console log");
console.log("Hello!");
console.groupEnd();

// Interpolated
console.group("Interpolated console log");
console.log("Hello I am a %s string!", "💩");
console.groupEnd();

// Styled
console.groupCollapsed("Styled console log");
console.log(
  "%c I am some great text",
  "font-size: 32px; background: red; text-shadow: 10px 10px 0 blue"
);
console.groupEnd();

// warning!
console.group("Warning!");
console.warn("OH NOOO");
console.groupEnd();

// Error :|
console.group("Error :|");
console.error("Shit!");
console.groupEnd();

// Info
console.group("Info");
console.info("Crocodiles eat 3-4 people per year");
console.groupEnd();

// Testing
console.group("Testing");
console.assert(1 === 1, "That is wrong!");

const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");
console.groupEnd();

// clearing
// console.clear();

// Viewing DOM Elements
console.group("Viewing DOM Elements");
console.log(p);
console.dir(p);
console.groupEnd();

// Grouping together
console.group("Grouping together");
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd();
});
console.groupEnd();

// counting
console.group("Counting");
console.count("Wes");
console.count("Wes");
console.count("Scott");
console.count("Wes");
console.count("Scott");
console.count("Wes");
console.count("Wes");
console.count("Scott");
console.count("Scott");
console.count("Wes");
console.count("Wes");
console.count("Scott");
console.groupEnd();

// timing
console.group("Timing");
console.time("Fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching data");
    console.log(data);
    console.groupEnd();

    // table
    console.group("Table");
    console.table(dogs);
    console.groupEnd();
  });
