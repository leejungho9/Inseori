import styled, { createGlobalStyle, css } from 'styled-components';
import PretendardMedium from '../assets/fonts/Pretendard-Medium.woff2';
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff2';
import PretendardBold from '../assets/fonts/Pretendard-Bold.woff2';
import PretendardSemiBold from '../assets/fonts/Pretendard-SemiBold.woff2';
// *  변수
export const Variables = css`
  :root {
    --black: #000;
    --white: #fff;
    --dark: #2d2d2d;
    --gray: #515151;
    --light-gray: #fbfbfb;
    --text-point-color: #e40177;
    --text-size-10: 1rem;
    --text-size-12: 1.2rem;
    --text-size-13: 1.3rem;
    --text-size-14: 1.4rem;
    --text-size-15: 1.5rem;
    --text-size-16: 1.6rem;
    --text-size-18: 1.8rem;
    --text-size-20: 2rem;
    --text-size-24: 2.4rem;
    --text-size-25: 2.5rem;
    --text-size-30: 3rem;
    // ! mobile : 0 ~ 479
    // ! tablet : 480 ~ 991
    // ! labtop : 992 ~ 1199
    // ! desktop : 1200 ~  1440
    // ! big desgtop : 1440 ~
    --breakpoint-mobile: 480;
    --breakpoint-tablet: 992;
    --breakpoint-laptop: 1200;
    --breakpoint-desktop: 1440;
  }
`;

// *  css reset, 공통스타일
const GlobalStyle = createGlobalStyle`
// *  font 적용

${Variables}
@font-face {
	font-family: "PretendardRegular";
	font-weight: 400;
	src: url(${PretendardRegular}) format("woff2")
}
@font-face {
	font-family: "PretendardMedium";
	font-weight: 500;
	src: url(${PretendardMedium}) format("woff2")
}
@font-face {
	font-family: "PretendardBold";
	font-weight: 600;
	src: url(${PretendardBold}) format("woff2")
}
@font-face {
	font-family: "PretendardSemiBold";
	font-weight: 700;
	src: url(${PretendardSemiBold}) format("woff2")
}

*{
  box-sizing: border-box;
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
html {
  font-size: 62.5%
}

html, body {
	font-family: "PretendardMedium" ;
  letter-spacing: -0.07em;
}

a {
	text-decoration: none;
	color: inherit;
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
