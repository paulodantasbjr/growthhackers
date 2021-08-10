import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'nunito',sans-serif;
    color: ${({ theme }) => theme.colors.white};
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`
