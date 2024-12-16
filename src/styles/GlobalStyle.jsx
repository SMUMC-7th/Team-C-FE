import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    /* color */
    --color-gray-900: #090909;
    --color-gray-800: #53565D;
    --color-gray-700: #61646B;
    --color-gray-600: #83858C;
    --color-gray-500: #B2B2B2;
    --color-gray-400: #C5C5C5;
    --color-gray-300: #D9D9D9;
    --color-gray-200: #E4E4E4;
    --color-gray-100: #E7E7E7;
    --color-gray-50:  #F3F3F3;

    --color-blue-900: #5058EE;
    --color-blue-800: #426ACC;
    --color-blue-700: #588BE2;
    --color-blue-600: #729DEE;

    --color-red-900: #DF4747;
    --color-red-800: #F05353;
    --color-red-700: #FF0000;

    --color-kakao-yellow: #FEE500;

    /* size */
    --size-max-width: 640px;
    --size-inner-max-width: 590px;
    --size-min-width: 345px;
    --size-header: 80px;
    --size-navbar: 89px;
    --size-side-gap: 24px;
    --size-logo: 97px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: min(100%, var(--size-max-width));
    margin: 0 auto;
    background-color: #ffffff;
    font-family: 'Pretendard-Regular';
    overflow: hidden;

    #portal {
      height: 100vh;
      position: absolute;
      overflow: hidden;
    }

    #root {
      height: 100vh;
      padding: calc(var(--size-header) + 0.5rem) var(--size-side-gap) calc(var(--size-navbar) + 0.5rem);
      position: absolute;
      overflow: hidden;
      max-width: var(--size-max-width);
      width: 100%;
    }

    h1, h2, span, div {
      user-select: none;
    }

    button {
      cursor: pointer;
      font: inherit;
      color: inherit;
      border: 0;
    }
  }
`;

export default GlobalStyle;
