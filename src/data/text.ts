import { split } from "sentence-splitter";

export interface TextStatistics {
	wordCount: number,
	characterCount: number,
	readabilityIndex: number
}

export type Keyword = string;

export interface EvaluatedKeyword {
	keyword: Keyword,
	count: number
}

export type KeywordList = Keyword[];
export type EvaluatedKeywordList = EvaluatedKeyword[];

export function buildTextStatistics(str: string): TextStatistics {
	return {
		wordCount: countWords(str),
		characterCount: countCharacters(str),
		readabilityIndex: readabilityIndex(str)
	};
}

export function countSentences(str: string) {
	return split(str)
		.filter(n => n.type === "Sentence")
		.length;
}

export function countWords(str: string) {
	return str
		.replace(/(^\s*)|(\s*$)/gi, "")
		.replace(/[ ]{2,}/gi, " ")
		.replace(/\n /, "\n")
		.split(" ")
		.filter(s => s !== "")
		.length;
}

export function countCharacters(str: string) {
	return str.length;
}

export function countLetters(str: string) {
	return str
		.replace(/[^a-z]/gi, "")
		.length;
}

export function readabilityIndex(str: string) {
	const Lbar = 0.0588;
	const Sbar = 0.296;
	const C = 15.8;

	const W = countWords(str) || 1;
	const L = countLetters(str) / W * 100;
	const S = countSentences(str) / W * 100;

	return Lbar * L - Sbar * S - C;
}

export function makeKeywordRegex(keyword: Keyword) {
	const r = keyword.replace(/\s/g, "\\s+");

	return new RegExp(`${r}`, "gi");
}

export function highlightKeywordsInText(keywords: Keyword[], text: string) {
	const rs = keywords
		.map(makeKeywordRegex)
		.map(r => r.source)
		.join("|");

	const highlighter = new RegExp(`(${rs})`, "gi");

	return text.replace(highlighter, "<em>\$1</em>");
}
