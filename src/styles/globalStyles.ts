import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    grey10: '#f9f9f9',
    white: '#ffffff',
    grafiti: '#333333',
    black: '#000000',
    primary: '#f55c05'
  }
};

const GlobalStyle = createGlobalStyle`
    @import url('href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"');

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Roboto', sans-serif;
        background-color: ${theme.colors.grey10};
        max-width: 1360px;
        margin: 0 auto;
    }
    
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;

export default GlobalStyle;
