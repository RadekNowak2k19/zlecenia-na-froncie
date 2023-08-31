import { faqData } from "./faqData.js";
{
	/* <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
  <path d="M8.3736 13.6264L7.09519 12.3622L11.5341 7.92331H0.383545V6.07672H11.5341L7.09519 1.6449L8.3736 0.373596L15 7.00002L8.3736 13.6264Z" fill="black"/>
</svg> */
}
const root = document.getElementById("root");

const greeting = document.createElement("span");
greeting.classList.add("greeting");
greeting.innerText = "Hello.";

const faqElement = document.createElement("section");
faqElement.classList.add("faq-container");

const faqHeading = document.createElement("h2");
faqHeading.classList.add("heading");
faqHeading.innerText = "FAQ";
const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.innerText = "Do you have any more questions?";

const renderQuestion = faq => {
	const questionElement = document.createElement("div");
	const quesiton = document.createElement("h3");
	const arrowElement = document.createElement("button");
	questionElement.classList.add("faq-question");
	quesiton.classList.add("question");
	arrowElement.classList.add("arrow");
	quesiton.innerText = faq.question;
	arrowElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
    <path d="M8.3736 13.6264L7.09519 12.3622L11.5341 7.92331H0.383545V6.07672H11.5341L7.09519 1.6449L8.3736 0.373596L15 7.00002L8.3736 13.6264Z" fill="black"/>
  </svg>`;

	questionElement.appendChild(quesiton);
	questionElement.appendChild(arrowElement);
	return questionElement;
};
const renderAnswer = faq => {
	const answerElement = document.createElement("div");
	const answer = document.createElement("p");
	answerElement.classList.add("faq-answer");
	answer.classList.add("answer");
	answer.innerText = faq.answer;

	answerElement.appendChild(answer);
	return answerElement;
};
const renderFaqItem = faq => {
	const faqQuestion = document.createElement("div");
	faqQuestion.classList.add("faq", `faq-${faq.id}`);

	faqQuestion.appendChild(renderQuestion(faq));
	faqQuestion.appendChild(renderAnswer(faq));

	return faqQuestion;
};
const renderFaqList = () => {
	const allFaq = document.createElement("div");
	allFaq.classList.add("all-faq");
	faqData.map(faq => {
		allFaq.appendChild(renderFaqItem(faq));
	});
	return allFaq;
};

root.appendChild(greeting);
root.appendChild(faqElement);
faqElement.appendChild(faqHeading);
faqElement.appendChild(paragraph);
faqElement.appendChild(renderFaqList());

const faq = document.querySelectorAll(".faq");
faq.forEach(faq => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("active");
	});
});
