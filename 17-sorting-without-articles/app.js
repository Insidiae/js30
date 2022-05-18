const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

const sortedBands = bands.sort((current, next) =>
  strip(current) > strip(next) ? 1 : -1
);

const bandsList = document.getElementById("bands");
sortedBands.forEach(function (band) {
  const bandItem = document.createElement("li");
  bandItem.innerText = band;
  bandsList.appendChild(bandItem);
});
