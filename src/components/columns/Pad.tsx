import * as React from 'react';
import { css } from 'emotion';

const writingPadStyles = css`
	display: block;
	font-family: 'Crimson Text', serif;
	font-size: 24px;
	flex: 1;
	height: 100%;
	overflow-y: scroll;
	padding: 32px;
`;

interface OwnProps {
	value: string,
	onChange: (newValue: string) => void
}

export function Pad(props: OwnProps) {
	return (
		<textarea
			className={writingPadStyles}
			placeholder="Start writing..."
			autoFocus={true}
			value={props.value}
			onChange={e => props.onChange(e.currentTarget.value)} />
	);
}
