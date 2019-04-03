import "mocha";
import { expect } from "chai";

import { countSentences, countWords, countCharacters, countLetters } from "data/text";

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
});
