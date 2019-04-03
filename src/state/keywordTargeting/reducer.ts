import { KeywordList } from "data/text";
import { AddKeywordAction, AddKeywordActionTypes } from "state/keywordTargeting/actions/addKeyword";
import { DeleteKeywordAction, DeleteKeywordActionTypes } from "state/keywordTargeting/actions/deleteKeyword";

export type KeywordAction
	= AddKeywordAction
	| DeleteKeywordAction

export interface KeywordState {
	keywords: KeywordList
}

const initialState = {
	keywords: [] as KeywordList
};

export function keywordReducer(state: KeywordState = initialState, action: KeywordAction): KeywordState {
	switch (action.type) {
		case AddKeywordActionTypes.AddKeyword: {
			return {
				...state,
				keywords: [...state.keywords, action.newKeyword]
			};
		}
		case DeleteKeywordActionTypes.DeleteKeyword: {
			return state;
		}
		default: {
			return state;
		}
	}
}
