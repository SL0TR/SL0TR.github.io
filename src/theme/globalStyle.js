import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export const Theme = {
  main: "mediumseagreen",
  fg: "palevioletred",
  bg: "white"
};

export const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});
