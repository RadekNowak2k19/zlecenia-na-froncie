const rootElement = document.getElementById("root");
// Section element
const sectionElement = document.createElement("section");
sectionElement.classList.add("navigation");

const sectionTop = document.createElement("div");
sectionTop.classList.add("top");
const sectionBottom = document.createElement("div");
sectionBottom.classList.add("bottom");

rootElement.appendChild(sectionElement);
sectionElement.appendChild(sectionTop);
sectionElement.appendChild(sectionBottom);

// Section top/bottom
const renderOlElement = className => {
	const olElement = document.createElement("ol");
	olElement.classList.add(className);
	return olElement;
};
sectionTop.append(renderOlElement("list-top"));
sectionBottom.append(renderOlElement("list-bottom"));

const t = document.querySelector(".list-top");
const b = document.querySelector(".list-bottom");

const renderItem = (name, index, image, positionX, positionY) => {
	const itemElement = document.createElement("li");
	const spanElement = document.createElement("span");

	itemElement.classList.add("list-item");
	itemElement.dataset.image = image;
	itemElement.dataset.x = positionX;
	itemElement.dataset.y = positionY;

	spanElement.innerText = `0${index}`;
	itemElement.innerText = name;

	itemElement.appendChild(spanElement);

	return itemElement;
};

t.appendChild(renderItem("interiors", 1, "hover-rectangle-1.png", 310, -200));
t.appendChild(
	renderItem("brand identity", 2, "hover-rectangle-2.png", 450, -50)
);
t.appendChild(renderItem("visual", 3, "hover-rectangle-3.png", -512, -200));

b.appendChild(renderItem("animation", 4, "hover-rectangle-4.png", 349, -150));
b.appendChild(renderItem("bunch", 5, "hover-rectangle-5.png", 278, -300));
b.appendChild(renderItem("rumors", 6, "hover-rectangle-6.png", -387, -120));

// Images
const items = document.querySelectorAll(".list-item");
const imageContainer = document.createElement("div");
const image = document.createElement("img");
imageContainer.classList.add("image-container");

items.forEach(item => {
	item.addEventListener("mouseenter", () => {
		image.src = `./images/${item.dataset.image}`;

		imageContainer.style.top = Number(item.dataset.y) + "px";
		imageContainer.style.left = Number(item.dataset.x) + "px";

		item.appendChild(imageContainer);
		imageContainer.appendChild(image);
	});
});
items.forEach(item => {
	item.addEventListener("mouseleave", () => {
		document.querySelector(".image-container").remove();
	});
});
