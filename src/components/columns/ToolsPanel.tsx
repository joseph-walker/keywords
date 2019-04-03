import * as React from "react";
import { css } from "emotion";

import { TextStatistics, EvaluatedKeywordList } from "data/text";
import { TextAnalysis } from "components/tools/TextAnalysis";
import { KeywordTargeting } from "components/tools/KeywordTargeting";

const toolsPanelContainerStyles = css`
	display: block;
	flex-basis: 512px;
	overflow-y: scroll;
	background-color: #efefef;
	padding: 32px;
`;

interface Props {
	textStatistics: TextStatistics,
	keywords: EvaluatedKeywordList,
	onAddKeyword: (newKeyword: string) => void,
	onDeleteKeyword: (index: number) => void
}

export function ToolsPanel(props: Props) {
	return (
		<aside className={toolsPanelContainerStyles}>
			<TextAnalysis
				wordCount={props.textStatistics.wordCount}
				characterCount={props.textStatistics.characterCount}
				readabilityIndex={props.textStatistics.readabilityIndex} />
			<KeywordTargeting
				keywords={props.keywords}
				onAddKeyword={props.onAddKeyword}
				onDeleteKeyword={props.onDeleteKeyword} />
		</aside>
	);
}
