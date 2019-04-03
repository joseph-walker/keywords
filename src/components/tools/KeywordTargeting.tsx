import * as React from "react";
import { css } from "emotion";

import { toolPanelContainerStyles, statsListStyles } from "styles/shared/toolsPanel";
import { EvaluatedKeyword, EvaluatedKeywordList } from "data/text";

const inputStyles = css`
	display: flex;
	margin-top: 8px;

	& input {
		border: 1px solid #d4d5d5;
		border-radius: 3px;
		line-height: 32px;
		padding: 0 8px;
		flex: 1;
	}

	& button {
		margin-left: 8px;
		background-color: #05c46b;
		line-height: 34px;
		padding: 0 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 3px;
		color: #FFF;
		cursor: pointer;
		transition: background-color 0.25s ease-in-out;

		&:hover {
			background-color: #05e27b;
		}
	}
`;

const keywordStyles = css`
	position: relative;

	& .delete {
		background-color: rgba(249, 249, 249, 0);
		color: #333;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: background-color 0.1s ease-in-out;
	}

	& .delete button {
		transition: opacity 0.1s ease-in-out, background-color 0.25s ease-in-out;
		opacity: 0;
		cursor: pointer;
		background-color: #ff3f34;
		color: #FFF;
		padding: 0 12px;
		line-height: 24px;
		border-radius: 3px;
	}

	&:hover .delete {
		background-color: rgba(249, 249, 249, 0.5);
	}

	&:hover .delete button {
		opacity: 1;
	}

	&:hover .delete button:hover {
		background-color: #f3574e;
	}
`;

const emptyStyle = css`
	text-align: center;
	color: #999;
	line-height: 26px;
`;

interface Props {
	keywords: EvaluatedKeywordList,
	onAddKeyword: (newKeyword: string) => void,
	onDeleteKeyword: (index: number) => void
}


export function KeywordTargeting(props: Props) {
	const [newKeyword, setNewKeyword] = React.useState("");

	function onClickAddKeyword() {
		props.onAddKeyword(newKeyword);
		setNewKeyword("");
	}

	function keywordItem(k: EvaluatedKeyword, i: number) {
		return (
			<li className={keywordStyles} key={i}>
				<div className="delete"><button onClick={() => props.onDeleteKeyword(i)}>Delete</button></div>
				<span>{k.keyword}</span>
				<em>{k.count}</em>
			</li>
		);
	}

	const keywordList = props.keywords.length
		? (
			<ul className={statsListStyles}>{props.keywords.map(keywordItem)}</ul>
		)
		: (
			<div className={emptyStyle}>There's nothing here</div>
		);

	return (
		<section className={toolPanelContainerStyles}>
			<header>
				<h2>Keyword Targeting</h2>
				<div className={inputStyles}>
					<input
						type="text"
						placeholder="Create a Keyword Phrase..."
						value={newKeyword}
						onChange={e => setNewKeyword(e.currentTarget.value) }/>
					<button onClick={onClickAddKeyword}>Add Keyword</button>
				</div>
			</header>
			<main>{keywordList}</main>
		</section>
	);
}
