import { Dispatch } from "react";
import { connect } from "react-redux";

import { ReduxState } from "state/store";
import { ToolsPanel } from "components/columns/ToolsPanel";
import { buildTextStatistics } from "data/text";

function mapStateToProps(state: ReduxState) {
	return {
		textStatistics: buildTextStatistics(state.text.value),
		keywords: [{
			phrase: "test keyword",
			count: 3
		}]
	};
}

export const ToolsPanelContainer = connect(mapStateToProps)(ToolsPanel);
