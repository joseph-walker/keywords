import { Action } from "redux";

export enum AddKeywordActionTypes {
	AddKeyword = "@@keywords/ADD_KEYWORD"
}

interface AddKeyword extends Action<AddKeywordActionTypes.AddKeyword> {
	newKeyword: string
}

export type AddKeywordAction
	= AddKeyword;

export function addKeyword(newKeyword: string): AddKeyword {
	if (!newKeyword.length) {
		return;
	}

	return {
		type: AddKeywordActionTypes.AddKeyword,
		newKeyword: newKeyword
			.replace(/[^a-z ]/ig, "") // strip non-letters
			.replace(/\s+/, " ") // compress multi-spaces
			.toLowerCase() // no caps
	};
}
