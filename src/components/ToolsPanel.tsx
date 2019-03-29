import * as React from 'react';
import { css } from 'emotion';

import { TextAnalysis } from 'components/tools/TextAnalysis';
import { KeywordTargeting } from 'components/tools/KeywordTargeting';

const toolsPanelContainerStyles = css`
	display: block;
	flex-basis: 512px;
	overflow-y: scroll;
	background-color: #efefef;
	padding: 32px;
`;

interface OwnProps {
	//
}

export function ToolsPanel(props: OwnProps) {
	return (
		<aside className={toolsPanelContainerStyles}>
			<TextAnalysis />
			<KeywordTargeting />
		</aside>
	);
}
