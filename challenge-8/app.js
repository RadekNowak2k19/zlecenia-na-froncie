const root = document.getElementById("root");

const clockContainer = document.createElement("div");
clockContainer.classList.add("clock-container");
const clockElement = document.createElement("div");
clockElement.classList.add("clock");

const headingElement = document.createElement("h1");
headingElement.classList.add("heading");
headingElement.innerHTML = "o’clock";

// Clock Elements
// Center
const center = document.createElement("div");
center.classList.add("center");
// SvgElement
const svgElement = document.createElement("div");
svgElement.classList.add("svg-element");
svgElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<circle cx="10" cy="10.75" r="9.5" fill="#EB5453" stroke="#EB5453"/>
</svg>`;
// Hours
const hours = document.createElement("div");
hours.classList.add("hours");
// Minutes
const minutes = document.createElement("div");
minutes.classList.add("minutes");
// Seconds
const seconds = document.createElement("div");
seconds.classList.add("seconds");
// Dot
const dot = document.createElement("div");
dot.classList.add("dot");
dot.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<circle cx="10" cy="10.75" r="9.5" fill="#EB5453" stroke="#EB5453"/>
</svg>`;

root.appendChild(clockContainer);
clockContainer.appendChild(headingElement);
clockContainer.appendChild(clockElement);
clockElement.appendChild(center);
clockElement.appendChild(seconds);
center.appendChild(svgElement);
svgElement.appendChild(minutes);
svgElement.appendChild(hours);
seconds.appendChild(dot);

let sec = 0; // time = time + 6;  1Minute
let hr = 0; // time = time + 0.1; 1Hour
let hrs = 0; // time = time + 0.0083; 12Hours
const runClock = (element, deg, unit) => {
	const runClockElement = document.querySelector(`.${element}`);
	unit = unit + deg;
	runClockElement.style.transform = `rotate(${unit}deg)`;
	return unit;
};
setInterval(function () {
	// sec = runClock("seconds", -6, sec);
	hr = runClock("minutes", 0.1, hr);
	hrs = runClock("hours", 0.0083, hrs);
}, 1000);
