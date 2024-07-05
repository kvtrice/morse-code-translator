import { morseChars } from "./data.js";

export const translateEnglishToMorse = englishInput => {
	const toCapitals = englishInput.toUpperCase();
	const textArray = toCapitals.split("");
	return textArray
		.reduce((acc, char) => {
			if (char === " ") {
				acc.push(" / ");
			} else if (morseChars[char]) {
				acc.push(morseChars[char]);
			}
			return acc;
		}, [])
		.join(" ");
};

export const translateMorseToEnglish = morseInput => {
	const words = morseInput.split(" / ");
	console.log(words);
	const characters = words.map(word =>
		word
			.split(" ")
			.map(morseChar =>
				Object.keys(morseChars).find(
					key => morseChars[key] === morseChar
				)
			)
			.join("")
	);
	return characters.join(" ");
};

export const morseToEnglishLowerCase = capitalString => {
	const wordsArr = capitalString.split(" ");
	return wordsArr
		.map((word, i) => {
			if (i === 0 || wordsArr[i - 1].endsWith(".")) {
				return word.charAt(0) + word.slice(1).toLowerCase();
			} else {
				return word.toLowerCase();
			}
		})
		.join(" ");
};
