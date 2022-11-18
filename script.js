const bulb = document.getElementById("bulb");
const btn = document.getElementById("btn");

btn.addEventListener("click", turn_on_off);

function turn_on_off() {
  if (btn.textContent.includes("On")) {
    bulb.src = "./images/light-bulb-on.png";
    btn.textContent = "Turn Off";
  } else {
    bulb.src = "./images/light-bulb-off.png";
    btn.textContent = "Turn On";
  }
}
