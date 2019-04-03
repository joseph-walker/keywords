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
	return {
		type: AddKeywordActionTypes.AddKeyword,
		newKeyword
	};
}
