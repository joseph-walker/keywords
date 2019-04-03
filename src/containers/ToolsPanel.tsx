import { connect } from "react-redux";

import { ReduxState } from "state/store";
import { ToolsPanel } from "components/columns/ToolsPanel";
import { buildTextStatistics, Keyword, EvaluatedKeywordList } from "data/text";
import { Dispatch } from "react";
import { KeywordAction } from "state/keywordTargeting/reducer";
import { addKeyword } from "state/keywordTargeting/actions/addKeyword";
import { deleteKeyword } from "state/keywordTargeting/actions/deleteKeyword";

function mapStateToProps(state: ReduxState) {
	return {
		textStatistics: buildTextStatistics(state.text.value),
		keywords: state.keywordTargeting.keywords.map((k: Keyword) => ({ keyword: k, count: 0 })) as EvaluatedKeywordList, // TODO: Temp
	};
}

function mapDispatchToProps(dispatch: Dispatch<KeywordAction>) {
	return {
		onAddKeyword: (newKeyword: string) => dispatch(addKeyword(newKeyword)),
		onDeleteKeyword: (index: number) => dispatch(deleteKeyword(index))
	};
}

export const ToolsPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ToolsPanel);
