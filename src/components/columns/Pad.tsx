import * as React from "react";
import { css } from "emotion";
import { Keyword, highlightKeywordsInText } from "data/text";

const padContainerStyles = css`
	display: block;
	position: relative;
	flex: 1;
`;

const canvasStyles = css`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 32px;
	font-family: "Crimson Text", serif;
	font-size: 24px;
`;

const writingPadStyles = css`
	${canvasStyles}

	display: block;
	overflow-y: scroll;
`;

const highlightOverlayStyles = css`
	${canvasStyles}

	color: transparent;

	& em {
		display: inline;
		background-color: rgba(0, 0, 255, 0.1);
	}
`;

interface OwnProps {
	value: string,
	keywords: Keyword[],
	onChange: (newValue: string) => void
}

export function Pad(props: OwnProps) {
	function createHighlightedDOM() {
		return {
			__html: highlightKeywordsInText(props.keywords, props.value)
		};
	}

	return (
		<section className={padContainerStyles}>
			<div className={highlightOverlayStyles} dangerouslySetInnerHTML={createHighlightedDOM()}></div>
			<textarea
				className={writingPadStyles}
				placeholder="Start writing..."
				autoFocus={true}
				value={props.value}
				onChange={e => props.onChange(e.currentTarget.value)} />
		</section>
	);
}
