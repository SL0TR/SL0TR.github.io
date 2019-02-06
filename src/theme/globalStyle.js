import { createGlobalStyle, css } from 'styled-components'
import styled from 'styled-components'


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins:500,700');
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');


  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1, h2 , h3, h4 {
    transition: all .3s ease-in-out;
    color: ${props => props.theme.fg};
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
  }

`
// MEDIA QUERY WITH JS ;)
const sizes = {
  bigDesktop: 1600,
  desktop: 1200,
  tabLand: 992,
  tabPort: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media ( ${sizes[label] === 'phone' ? 'max-width' : 'min-width' } : ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export const Container = styled.div`

  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  ${media.tabPort`width: 750px;`}
  ${media.tabLand`width: 970px;`}
  ${media.desktop`width: 1170px;`}
  ${media.bigDesktop`width: 1600px;`}
`

export const Theme = {
  fg: "#1D2731",
  bg: "#F7F7F7",
  darkBlue: "#0B3C5D",
  center: 'center'
};

export const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
  center: 'center'
});
