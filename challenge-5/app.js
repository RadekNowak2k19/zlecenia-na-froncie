const root = document.getElementById("root");
const navElement = document.createElement("div");
const imgElement = document.createElement("img");
const buttonElement = document.createElement("button");

navElement.classList.add("navigation");
buttonElement.classList.add("btn");
imgElement.src = "./images/menu.png";

const createLines = (className, index) => {
	const line = document.createElement("div");
	line.classList.add(`${className}`, `line-${index}`);
	return line;
};

root.appendChild(navElement);
navElement.appendChild(imgElement);
root.appendChild(buttonElement);
buttonElement.appendChild(createLines("line", "1"));
buttonElement.appendChild(createLines("line", "2"));
buttonElement.appendChild(createLines("line", "3"));

buttonElement.addEventListener("click", () => {
	navElement.classList.toggle("active");
	document.querySelector(".line-1").classList.toggle("open");
	document.querySelector(".line-2").classList.toggle("open");
	document.querySelector(".line-3").classList.toggle("open");
});
