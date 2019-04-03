import { injectGlobal } from "emotion";

injectGlobal`
	* {
		all: unset;
		display: block;
		box-sizing: border-box;
	}
	base,
	basefont,
	datalist,
	head,
	meta,
	script,
	style,
	title,
	noembed,
	param,
	template {
		display: none !important;
	}
	body, html {
		width: 100%;
		height: 100%;
	}
	body {
		display: block;
		font-family: "Roboto", sans-serif;
		color: #333;
		font-size: 14px;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "Roboto", sans-serif;
		font-weight: bold;
		display: block;
	}
`;
