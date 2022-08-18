import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'fonts/pretendard.css';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Pretendard NS-R' !important;
  }
  body{
    font-size: 15px;
    background: #232323;

  }
  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    display: block;
  }
  button {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'NS-B';
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  *>::-webkit-scrollbar {
    width: 8px;  /* 스크롤바의 너비 */
  }

  *>::-webkit-scrollbar-thumb {
    height: 15%; /* 스크롤바의 길이 */
    background: ${(props) =>
      props.theme.color_font__tertiary}; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  *>::-webkit-scrollbar-track {
    background:  ${(props) =>
      props.theme.color_background__primary};  /*스크롤바 뒷 배경 색상*/
  }
`;

export default GlobalStyles;
