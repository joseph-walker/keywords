import * as React from "react";

import { toolPanelContainerStyles, statsListStyles } from "styles/shared/toolsPanel";
import { TextStatistics } from "data/text";

interface Props extends TextStatistics {}

export function TextAnalysis(props: Props) {
	const ri = Math.round(props.readabilityIndex);

	return (
		<section className={toolPanelContainerStyles}>
			<header>
				<h2>Text Analysis</h2>
			</header>
			<main>
				<ul className={statsListStyles}>
					<li>
						<span>Word Count</span>
						<em>{props.wordCount}</em>
					</li>
					<li>
						<span>Character Count</span>
						<em>{props.characterCount}</em>
					</li>
					<li>
						<span>CLI Readability Index</span>
						<em>{ri < 0 ? "-" : ri}</em>
					</li>
				</ul>
			</main>
		</section>
	);
}
