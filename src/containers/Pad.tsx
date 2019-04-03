import { Dispatch } from "react";
import { connect } from "react-redux";

import { ReduxState } from "state/store";
import { TextAction } from "state/text/reducer";
import { setText } from "state/text/actions/setText";
import { Pad } from "components/columns/Pad";

function mapStateToProps(state: ReduxState) {
	return {
		value: state.text.value
	};
}

function mapDispatchToProps(dispatch: Dispatch<TextAction>) {
	return {
		onChange: (newText: string) => dispatch(setText(newText))
	};
}

export const PadContainer = connect(mapStateToProps, mapDispatchToProps)(Pad);
