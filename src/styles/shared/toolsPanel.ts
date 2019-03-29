import { css } from 'emotion';

export const toolPanelContainerStyles = css`
	display: block;
	background-color: #f9f9f9;
	border-radius: 3px;
	box-shadow: 1px 1px 2px rgba(125, 125, 125, 0.15);
	margin-bottom: 32px;

	& header {
		background-color: #FFF;
		border-bottom: 1px solid #d9d9d9;
		padding: 16px;
		border: 1px solid #d9d9d9;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}

	& main {
		padding: 16px;
		border: 1px solid #d9d9d9;
		border-bottom-left-radius: 3px;
		border-bottom-right-radius: 3px;
		border-top: none;
	}
`;

export const statsListStyles = css`
	display: flex;
	flex-direction: column;

	& li {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
		color: #555;
	}

	& li:last-child {
		margin-bottom: 0;
	}

	& li em {
		color: #333;
		margin-left: auto;
		display: block;
		line-height: 24px;
		padding-left: 16px;
		padding-right: 16px;
		background-color: #FFF;
		border-radius: 8px;
		border: 1px solid #EFEFEF;
	}
`;
