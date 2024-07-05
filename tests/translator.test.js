import {
	translateEnglishToMorse,
	translateMorseToEnglish,
	morseToEnglishLowerCase,
} from "../modules/translator";

describe("Converts capital letters to lowercase", () => {
	test("Should keep the first letter in the sentence as a capital", () => {
		expect(morseToEnglishLowerCase("HELLO THERE KAT")).toBe(
			"Hello there kat"
		);
	});
	test("Should keep the first letter after a fullstop as a capital", () => {
		expect(morseToEnglishLowerCase("HI. MY NAME IS KAT. I AM 28.")).toBe(
			"Hi. My name is kat. I am 28."
		);
	});
	test("Should handle mixed case strings", () => {
		expect(morseToEnglishLowerCase("ThE qUIcK BROWn FoX")).toBe(
			"The quick brown fox"
		);
	});
	test("Punctuation should not be impacted", () => {
		expect(morseToEnglishLowerCase("HELLO, I'M KAT!")).toBe(
			"Hello, i'm kat!"
		);
	});
	test("Numbers should not be impacted", () => {
		expect(morseToEnglishLowerCase("121 WallABY Way Sydney")).toBe(
			"121 wallaby way sydney"
		);
	});
});

describe("Converts english letters into the correct morse characters", () => {
	test("Spaces should be represented by a '/' surrounded by a space either side", () => {
		expect(translateEnglishToMorse(" ")).toBe(" / ");
	});
	test("Letters should be represented accurately", () => {
		expect(translateEnglishToMorse("Hi there")).toBe(
			".... ..  /  - .... . .-. ."
		);
	});
	test("Morse characters should be separated by a space", () => {
		expect(translateEnglishToMorse("ab")).toBe(".- -...");
	});
	test("Allowed special characters should be represented accurately", () => {
		expect(translateEnglishToMorse(`!:-"(.;/'_)@&$`)).toBe(
			"-.-.-- ---... -....- .-..-. -.--. .-.-.- -.-.-. -..-. .----. ..--.- -.--.- .--.-. .-... ...-..-"
		);
	});
	test("Unkown characters should be ignored in the return string", () => {
		expect(translateEnglishToMorse("Hello~")).toBe(".... . .-.. .-.. ---");
	});
	test("Numbers should be accurately converted", () => {
		expect(translateEnglishToMorse("123")).toBe(".---- ..--- ...--");
	});
});

describe("Converts morse characters into the correct english letters", () => {
	test("English words should be represented accurately", () => {
		expect(
			translateMorseToEnglish(
				"- .... .  /  --.- ..- .. -.-. -.-  /  -... .-. --- .-- -.  /  ..-. --- -..-"
			)
		).toBe("THE QUICK BROWN FOX");
	});
	test("A '/' with a space either side should translate to a single space between words", () => {
		expect(translateMorseToEnglish(" / ")).toBe(" ");
	});
	test("Allowed special characters should be translated correctly", () => {
		expect(
			translateMorseToEnglish(
				"-.-.-- ---... -....- .-..-. -.--. .-.-.- -.-.-. -..-. .----. ..--.- -.--.- .--.-. .-... ...-..-"
			)
		).toBe(`!:-"(.;/'_)@&$`);
	});
	test("Any unknown characters should be ignored", () => {
		expect(translateMorseToEnglish(".-.-.")).toBe("");
	});
	test("Numbers should be accurately converted", () => {
		expect(translateMorseToEnglish("----- .---- ..---")).toBe("012");
	});
});
