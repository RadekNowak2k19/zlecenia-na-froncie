const root = document.getElementById("root");
const headerElement = document.createElement("header");
headerElement.classList.add("header");

const logoElement = document.createElement("div");
const logoVectorImg = document.createElement("div");
const logoEllipseImg = document.createElement("div");
logoElement.classList.add("logo");
logoVectorImg.classList.add("vector-img");
logoEllipseImg.classList.add("ellipse-small");
logoVectorImg.innerHTML = `<svg width="23" height="47" viewBox="0 0 23 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector 1" d="M22.5 43V2L1 36L16.5 45.5L22.5 43Z" stroke="black"/>
</svg>
`;
logoEllipseImg.innerHTML = `<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle id="Ellipse 1" cx="5.5" cy="5" r="5" fill="black"/>
</svg>
`;

const changeThemeBtnElement = document.createElement("button");
const changeThemeImg = document.createElement("div");
changeThemeBtnElement.classList.add("change-theme");
changeThemeImg.classList.add("ellipse-big");
changeThemeImg.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle id="Ellipse 2" cx="8" cy="8" r="8" fill="black"/>
</svg>
`;

const navElement = document.createElement("nav");
navElement.classList.add("navigation");
const navElements = ["Projects", "Services", "About", "Contact"];
const renderItem = item => {
	const liElement = document.createElement("li");
	const anchorElement = document.createElement("a");
	liElement.classList.add("item");
	anchorElement.classList.add("anchor");
	anchorElement.href = "#";
	anchorElement.innerText = item;
	liElement.append(anchorElement);
	return liElement;
};
const renderList = () => {
	const ulElement = document.createElement("ul");
	ulElement.classList.add("list");
	navElements.forEach(item => {
		ulElement.appendChild(renderItem(item));
	});
	return ulElement;
};

const headingElement = document.createElement("h1");
headingElement.classList.add("heading");
headingElement.innerText = "Here goes the sun here comes a warmth.";

root.appendChild(headerElement);
headerElement.appendChild(logoElement);
logoElement.appendChild(logoVectorImg);
logoElement.appendChild(logoEllipseImg);
headerElement.appendChild(changeThemeBtnElement);
changeThemeBtnElement.appendChild(changeThemeImg);
headerElement.appendChild(navElement);
navElement.appendChild(renderList());
root.appendChild(headingElement);

const changeThemeColor = () => {
	root.classList.toggle("active");
	headingElement.classList.toggle("active");
	document.querySelectorAll(".anchor").forEach(anchor => {
		anchor.classList.toggle("active");
	});
	document.querySelector(".ellipse-big").classList.toggle("active");
	document.querySelector(".ellipse-small").classList.toggle("active");
	document.querySelector(".vector-img").classList.toggle("active");
};
changeThemeBtnElement.addEventListener("click", changeThemeColor);
