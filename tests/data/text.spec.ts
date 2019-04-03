import "mocha";
import { expect } from "chai";

import { countSentences, countWords, countCharacters, countLetters, makeKeywordRegex, highlightKeywordsInText } from "data/text";

describe("Text Utilities", function () {
	const testString = "I like turtles. Especially leatherbacks.";
	const weirdTest = "The U.S. treasury is a neat place. I like visiting.";

	describe("countSentences()", function () {
		it("should count sentences appropriately", function () {
			expect(countSentences(testString)).to.be.equal(2);
		});

		it("should handle weird punctuation", function () {
			expect(countSentences(weirdTest)).to.be.equal(2);
		});
	});

	describe("countWords()", function () {
		it("should count words appropriately", function () {
			expect(countWords(testString)).to.be.equal(5);
		});

		it("should handle weird punctuation", function () {
			expect(countWords(weirdTest)).to.be.equal(10);
		});
	});

	describe("countCharacters()", function () {
		it("should count characters appopriately", function () {
			expect(countCharacters(testString)).to.be.equal(40);
		});
	})

	describe("countLetters()", function () {
		it("should count letters appropriately", function () {
			expect(countLetters(testString)).to.be.equal(34);
		});

		it("should handle weird punctuation", function () {
			expect(countLetters(weirdTest)).to.be.equal(38);
		});
	});

	describe("makeKeywordRegex()", function () {
		const keyword = "sell my car";

		it("should create a regular expression from a string", function () {
			expect(makeKeywordRegex(keyword)).to.be.deep.equal(/sell\s+my\s+car/gi)
		});
	})

	describe("highlightKeywordsInText()", function () {
		const keyword1 = "sell my car";
		const keyword2 = "in seattle";

		it("should wrap text in <em>s based on keywords passed in", function () {
			const result = highlightKeywordsInText([keyword1, keyword2], "Learn how to sell my car in Seattle");

			expect(result).to.be.equal("Learn how to <em>sell my car</em> <em>in Seattle</em>");
		});
	});
});
