import * as React from "react";
import { css } from "emotion";

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
`;

interface OwnProps {
	value: string,
	onChange: (newValue: string) => void
}

export function Pad(props: OwnProps) {
	return (
		<section className={padContainerStyles}>
			<div className={highlightOverlayStyles}>
				This is just <span>a test</span>.
			</div>
			<textarea
				className={writingPadStyles}
				placeholder="Start writing..."
				autoFocus={true}
				value={props.value}
				onChange={e => props.onChange(e.currentTarget.value)} />
		</section>
	);
}
