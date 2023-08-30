const root = document.getElementById("root");
const textElement = document.createElement("h2");
textElement.classList.add("heading");
textElement.innerText = "The universe is you.";

const displayRandomDot = () => {
	const dotsArr = [
		"./images/dotOn.svg",
		"./images/dotOff.svg",
		"./images/blueDot.svg",
		"./images/darkBlueDot.svg",
	];
	return dotsArr[Math.floor(Math.random() * dotsArr.length)];
};

const generateArrayLength = size => {
	return Array(size)
		.fill(null)
		.map((_, index) => index + 1);
};
const columns = generateArrayLength(20);
const dots = generateArrayLength(7);

const renderDots = (_, index) => {
	const dot = document.createElement("div");
	const dotImg = document.createElement("img");
	dot.classList.add("dot");
	dotImg.src = displayRandomDot();

	dot.appendChild(dotImg);
	return dot;
};

const renderColumn = (_, index) => {
	const column = document.createElement("div");
	column.classList.add(`column-${index + 1}`, "column");

	dots.forEach((_, index) => {
		column.appendChild(renderDots(_, index));
	});

	return column;
};

const renderColumns = () => {
	const dotsContainer = document.createElement("div");
	dotsContainer.classList.add("container");

	columns.forEach((_, index) =>
		dotsContainer.appendChild(renderColumn(_, index))
	);
	return dotsContainer;
};

root.appendChild(renderColumns());
root.appendChild(textElement);

setInterval(() => {
	document.querySelectorAll(".dot img").forEach(img => {
		img.src = displayRandomDot();
	});
}, 800);

document.querySelector(".container").addEventListener("mouseenter", () => {
	document.querySelectorAll(".dot img").forEach(img => {
		img.src = "./images/dotOff.svg";
	});
	const dotsArr = Array.from(document.querySelectorAll(".dot img"));
	const displayHI = (startSlice, stopSlice) => {
		const fragment = dotsArr.slice(startSlice, stopSlice).forEach(img => {
			img.src = "./images/dotOn.svg";
		});
	};
	displayHI(28, 35);
	displayHI(38, 39);
	displayHI(42, 49);
	displayHI(56, 63);
	clearInterval();
});
