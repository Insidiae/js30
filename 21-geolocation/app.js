const arrow = document.querySelector(".arrow");
const speedValue = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    speedValue.textContent = (data.coords.speed ?? 0).toFixed(2);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (error) => {
    console.error(error);
    alert("Please enable geolocation!");
  }
);
