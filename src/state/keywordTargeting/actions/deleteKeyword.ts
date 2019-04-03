import { Action } from "redux";

export enum DeleteKeywordActionTypes {
	DeleteKeyword = "@@keywords/DELETE_KEYWORD"
}

interface DeleteKeyword extends Action<DeleteKeywordActionTypes.DeleteKeyword> {
	index: number
}

export type DeleteKeywordAction
	= DeleteKeyword;

export function deleteKeyword(index: number): DeleteKeyword {
	return {
		type: DeleteKeywordActionTypes.DeleteKeyword,
		index
	};
}
