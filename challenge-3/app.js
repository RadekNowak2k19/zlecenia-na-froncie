const root = document.getElementById("root");
const createAnyElement = (type, classList, content = null) => {
	const createElement = document.createElement(type);
	createElement.classList.add(classList);
	createElement.innerText = content;
	return createElement;
};
// ---
root.appendChild(createAnyElement("div", "open-container"));
document
	.querySelector(".open-container")
	.appendChild(
		createAnyElement("p", "text", "Pop me up like one of your bubble wraps.")
	);
document
	.querySelector(".open-container")
	.appendChild(createAnyElement("button", "btn", "POP IT!"));
// ---
root.appendChild(createAnyElement("div", "close-container"));
document
	.querySelector(".close-container")
	.appendChild(
		createAnyElement(
			"p",
			"text",
			"Wow, bouncy! Now, let’s wrap it up and close me back."
		)
	);
document
	.querySelector(".close-container")
	.appendChild(createAnyElement("button", "close-btn", "LET’S close"));

const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const openContainer = document.querySelector(".open-container");
const closeContainer = document.querySelector(".close-container");

const removeAnimation = () => {
	root.classList.remove("bg");
	closeContainer.classList.add("close-container-back");
	setTimeout(() => {
		openContainer.classList.remove("close");
		closeContainer.classList.remove("active");
		closeContainer.classList.remove("close-container-back");
	}, 400);
};

openBtn.addEventListener("click", () => {
	openContainer.classList.add("close");
	closeContainer.classList.add("active");
	root.classList.add("bg");
});
closeBtn.addEventListener("click", () => {
	removeAnimation();
});
document.querySelector("body").addEventListener("click", e => {
	const closestDiv = e.target.closest("div");
	if (!closestDiv) {
		removeAnimation();
	}
});
