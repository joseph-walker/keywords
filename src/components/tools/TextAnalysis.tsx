import * as React from 'react';

import { toolPanelContainerStyles, statsListStyles } from 'styles/shared/toolsPanel';

export function TextAnalysis() {
	return (
		<section className={toolPanelContainerStyles}>
			<header>
				<h2>Text Analysis</h2>
			</header>
			<main>
				<ul className={statsListStyles}>
					<li>
						<span>Word Count</span>
						<em>1327</em>
					</li>
					<li>
						<span>Character Count</span>
						<em>3</em>
					</li>
				</ul>
			</main>
		</section>
	);
}
