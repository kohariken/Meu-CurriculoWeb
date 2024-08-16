import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url('/wavey-fingerprint.svg');
    background-repeat: repeat;
    background-size: 100vw;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle; 
