import { combineReducers, createStore, compose } from "redux";

import { TextState, textReducer } from "state/text/reducer";
import { KeywordState, keywordReducer } from "state/keywordTargeting/reducer";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface ReduxState {
	text: TextState,
	keywordTargeting: KeywordState
}

const reducers = combineReducers<ReduxState>({
	text: textReducer,
	keywordTargeting: keywordReducer
});

export const store = createStore(reducers, undefined, composeEnhancers());
