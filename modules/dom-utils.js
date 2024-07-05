import { morseChars } from "./data.js";

export const createIndex = () => {
	const indexDiv = document.getElementById("index");

	Object.entries(morseChars).map(([key, value]) => {
		const charDiv = document.createElement("div");
		charDiv.classList.add("index__item");
		charDiv.innerHTML += `<div class="index__item__key">${key}</div> <div class="index__item__value">${value}</div>`;
		indexDiv.appendChild(charDiv);
	});
};
