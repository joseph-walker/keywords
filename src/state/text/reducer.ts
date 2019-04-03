import { SetTextAction, SetTextActionTypes } from "state/text/actions/setText";

export type TextAction
	= SetTextAction

export interface TextState {
	value: string
}

const initialState = {
	value: ""
};

export function textReducer(state: TextState = initialState, action: TextAction): TextState {
	switch (action.type) {
		case SetTextActionTypes.SetText: {
			return {
				...state,
				value: action.newText
			};
		}
		default: {
			return state;
		}
	}
}
