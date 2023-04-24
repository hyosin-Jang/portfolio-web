import styled, {DefaultTheme, css} from "styled-components"

export const theme = {
	colors: {
		white: "#ffffff",
		yellow: "#ebff82",
		grey: "#e9e9eb",
		lightGrey: "rgb(250, 251, 251)",
		drakGrey: "rgb(117, 117, 117)",
		black: "#000000",
		lightBlack: "rgb(25, 31, 40)",
		borderGrey: "#878e95",
		mint: "#4dd6d3",
		lightPurple: "rgb(194, 142, 236)",
		darkPurple: "rgba(189, 66, 238, 0.21)",
	},
}

export const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const submitButton = css`
	min-width: 64px;
	padding: 6px 16px;
	border-radius: 8px;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	color: rgb(255, 255, 255);
	background-color: rgb(115, 83, 234);
	width: 100%;
	box-shadow: none;
	height: 33px;
	font-weight: 700;
	font-size: 0.875rem;

	&:hover {
		background-color: ${theme.colors.lightPurple};
		transition: background-color 0.5s ease-out;
	}
`

export const formInput = css`
	font: inherit;
	letter-spacing: inherit;
	color: currentcolor;
	border: 0px;
	box-sizing: content-box;
	background: none;
	height: 1.4375em;
	border-radius: 8px
	margin: 0px;
	-webkit-tap-highlight-color: transparent;
	display: block;
	min-width: 0px;
	width: 100%;
	animation-name: mui-auto-fill-cancel;
	animation-duration: 10ms;
	padding: 8.5px 14px;


	background-color: ${theme.colors.lightGrey};
	color: ${theme.colors.lightBlack};
	border: 1px solid ${theme.colors.borderGrey};
	border-radius: 8px;

	&:hover {
		border: 1.3px solid ${theme.colors.lightBlack};
	}

	&:focus {
		border: 1.5px solid ${theme.colors.lightPurple};
	}

	&:active {
		border: 1.5px solid ${theme.colors.lightPurple};
	}
`
