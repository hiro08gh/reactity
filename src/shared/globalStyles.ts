import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  html,
  body {
    background-color: #FFF;
    color: #333;
    font-size:62.5%;
    font-kerning: normal
    font-family: Verdana, Roboto, 'Droid Sans', '游ゴシック', YuGothic, 'メイリオ', Meiryo,
		'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'ＭＳ Ｐゴシック', sans-serif;
    line-height: 1.5;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;
