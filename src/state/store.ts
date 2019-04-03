import { combineReducers, createStore, compose } from "redux";

import { TextState, textReducer } from "state/text/reducer";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface ReduxState {
	text: TextState,
}

const reducers = combineReducers<ReduxState>({
	text: textReducer
});

export const store = createStore(reducers, undefined, composeEnhancers());
