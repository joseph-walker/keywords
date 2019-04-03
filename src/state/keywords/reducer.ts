import { KeywordList } from "data/text";
import { AddKeywordAction, AddKeywordActionTypes } from "state/keywords/actions/addKeyword";
import { DeleteKeywordAction, DeleteKeywordActionTypes } from "state/keywords/actions/deleteKeyword";

export type KeywordAction
	= AddKeywordAction
	| DeleteKeywordAction

export interface KeywordState {
	keywords: KeywordList
}

const initialState = {
	keywords: [] as KeywordList
};

export function textReducer(state: KeywordState = initialState, action: KeywordAction): KeywordState {
	switch (action.type) {
		case AddKeywordActionTypes.AddKeyword: {
			return state;
		}
		case DeleteKeywordActionTypes.DeleteKeyword: {
			return state;
		}
		default: {
			return state;
		}
	}
}
