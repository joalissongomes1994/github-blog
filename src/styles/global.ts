import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.blue};
  }
  
  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 1.6;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 97.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
`
