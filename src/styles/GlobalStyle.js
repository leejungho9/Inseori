import styled, { createGlobalStyle, css } from 'styled-components';
import PretendardVariable from '../assets/fonts/PretendardVariable.woff2';
// *  변수
export const Variables = css`
  :root {
  }
`;

// *  css reset, 공통스타일
const GlobalStyle = createGlobalStyle`
// *  font 적용
${Variables}
@font-face {
	font-family: "PretendardMedium";
	font-weight: 500;
	src: url(${PretendardVariable}) format("woff2")
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html, body {
	font-family: "PretendardMedium" ;
}
`;

export default GlobalStyle;

// *  Flex 관련 스타일
export const LineFlex = css`
  display: flex;
  align-items: center;
`;

export const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RowFlex = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ColFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 1480px;
  margin: auto;
  /* display: flex; */
`;
