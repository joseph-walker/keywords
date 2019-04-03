import * as React from "react";
import { css } from "emotion";

import { PadContainer } from "containers/Pad";
import { ToolsPanelContainer } from "containers/ToolsPanel";

const appStyles = css`
	display: flex;
	height: 100%;
`;

export function App() {
	return (
		<section className={appStyles}>
			<PadContainer />
			<ToolsPanelContainer />
		</section>
	)
}
