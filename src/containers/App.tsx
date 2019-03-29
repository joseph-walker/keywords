import * as React from 'react';
import { css } from 'emotion';

import { Pad } from 'components/Pad';
import { ToolsPanel } from 'components/ToolsPanel';

const appStyles = css`
	display: flex;
	height: 100%;
`;

export function App() {
	const [text, setText] = React.useState('');

	return (
		<section className={appStyles}>
			<Pad value={text} onChange={setText} />
			<ToolsPanel />
		</section>
	)
}
