import { Dispatch } from "react";
import { connect } from "react-redux";

import { ReduxState } from "state/store";
import { KeywordAction } from "state/keywordTargeting/reducer";
import { addKeyword } from "state/keywordTargeting/actions/addKeyword";
import { deleteKeyword } from "state/keywordTargeting/actions/deleteKeyword";
import { buildTextStatistics, evaluateKeyword } from "data/text";
import { ToolsPanel } from "components/columns/ToolsPanel";


function mapStateToProps(state: ReduxState) {
	return {
		textStatistics: buildTextStatistics(state.text.value),
		keywords: state
			.keywordTargeting
			.keywords
			.map(evaluateKeyword(state.text.value))
	};
}

function mapDispatchToProps(dispatch: Dispatch<KeywordAction>) {
	return {
		onAddKeyword: (newKeyword: string) => dispatch(addKeyword(newKeyword)),
		onDeleteKeyword: (index: number) => dispatch(deleteKeyword(index))
	};
}

export const ToolsPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ToolsPanel);
