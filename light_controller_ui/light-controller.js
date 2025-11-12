// Smart Light Controller - UI Only
// Matches the Tkinter Python version functionality

// Light control variables
let lightOn = false;
let brightness = 50;
let currentColor = "warm";
let currentTheme = "light";

// Get DOM elements
const body = document.body;
const lightStatus = document.getElementById("lightStatus");
const powerButton = document.getElementById("powerButton");
const brightnessSlider = document.getElementById("brightnessSlider");
const brightnessLabel = document.getElementById("brightnessLabel");
const colorLabel = document.getElementById("colorLabel");
const colorButtons = document.querySelectorAll(".color-button");
const themeButton = document.getElementById("themeButton");
const autoButton = document.getElementById("autoButton");

// Toggle light on/off
function toggleLight() {
  lightOn = !lightOn;
  const status = lightOn ? "ON" : "OFF";
  lightStatus.textContent = `Light: ${status}`;
  powerButton.textContent = `Turn ${lightOn ? "OFF" : "ON"}`;
  console.log(`Light turned ${status}`);
}

// Set brightness
function setBrightness(value) {
  brightness = parseInt(value);
  brightnessLabel.textContent = `Brightness: ${brightness}%`;
  console.log(`Brightness set to ${brightness}%`);
}

// Change color
function changeColor(color) {
  currentColor = color;
  colorLabel.textContent = `Color: ${
    color.charAt(0).toUpperCase() + color.slice(1)
  }`;
  console.log(`Color changed to ${color}`);
}

// Change theme (Light/Dark mode)
function changeTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";

  // Toggle theme class on body
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(`${currentTheme}-theme`);

  // Update theme button text
  themeButton.textContent =
    currentTheme === "light" ? "Night Mode" : "Day Mode";

  console.log(`Theme changed to ${currentTheme}`);
}

// Auto mode (placeholder for future implementation)
function autoMode() {
  console.log("Auto mode activated (to be implemented)");
  alert("Auto Mode feature coming soon!");
}

// Event Listeners
powerButton.addEventListener("click", toggleLight);

brightnessSlider.addEventListener("input", (e) => {
  setBrightness(e.target.value);
});

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("data-color");
    changeColor(color);
  });
});

themeButton.addEventListener("click", changeTheme);

autoButton.addEventListener("click", autoMode);

// Keyboard shortcuts (bonus feature)
document.addEventListener("keydown", (e) => {
  // Space to toggle power
  if (e.code === "Space") {
    e.preventDefault();
    toggleLight();
  }
  // Arrow keys to adjust brightness
  else if (e.code === "ArrowUp") {
    e.preventDefault();
    const newValue = Math.min(100, brightness + 5);
    brightnessSlider.value = newValue;
    setBrightness(newValue);
  } else if (e.code === "ArrowDown") {
    e.preventDefault();
    const newValue = Math.max(0, brightness - 5);
    brightnessSlider.value = newValue;
    setBrightness(newValue);
  }
  // Number keys 1-3 for color
  else if (e.code === "Digit1") {
    changeColor("warm");
  } else if (e.code === "Digit2") {
    changeColor("natural");
  } else if (e.code === "Digit3") {
    changeColor("cool");
  }
  // T for theme toggle
  else if (e.code === "KeyT") {
    changeTheme();
  }
});

// Initialize
console.log("Smart Light Controller loaded!");
console.log("Keyboard shortcuts:");
console.log("  Space - Toggle Power");
console.log("  Arrow Up/Down - Adjust Brightness");
console.log("  1/2/3 - Change Color (Warm/Natural/Cool)");
console.log("  T - Toggle Theme");
