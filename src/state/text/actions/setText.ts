import { Action } from "redux";

export enum SetTextActionTypes {
	SetText = '@@text/SET_TEXT'
}

interface SetText extends Action<SetTextActionTypes.SetText> {
	newText: string
}

export type SetTextAction
	= SetText;

export function setText(newText: string): SetText {
	return {
		type: SetTextActionTypes.SetText,
		newText
	};
}
