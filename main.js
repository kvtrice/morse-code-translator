import { createIndex } from "./modules/dom-utils.js";
import {
	morseToEnglishLowerCase,
	translateEnglishToMorse,
	translateMorseToEnglish,
} from "./modules/translator.js";

const englishTextBox = document.getElementById("english");
const morseTextBox = document.getElementById("morse");

englishTextBox.addEventListener("input", e => {
	const englishText = e.target.value;
	const morseText = translateEnglishToMorse(englishText);
	morseTextBox.value = morseText;
});

morseTextBox.addEventListener("input", e => {
	const morseText = e.target.value;
	const capitalisedEnglishText = translateMorseToEnglish(morseText);
	const cleanedEnglishText = morseToEnglishLowerCase(capitalisedEnglishText);
	englishTextBox.value = cleanedEnglishText;
});

createIndex();
