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
    overflow-x: hidden;
    box-sizing: border-box;

  }

  h1, h2 , h3, h4, li, a {
    transition: all .3s ease-in-out;
    color: ${props => props.theme.fg};
    font-family: ${props => props.theme.headerFont};
    ${props => props.theme.defaultTransition};
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
    color: ${props => props.theme.fg};
    font-family: ${props => props.theme.paraFont};
    transition: ${props => props.theme.defaultTransition};
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
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

export const Theme = {
  fg: '#1D2731',
  bg: '#F7F7F7',
  darkBlue: '#0B3C5D',
  lightBlue: '#328CC1',
  yellow: '#D9B310',
  headerFont: 'Poppins',
  paraFont: 'Lato',
  center: 'center',
  defaultTransition: 'all .3s'
};

export const invertTheme = ({ fg, bg, darkBlue, yellow }) => ({
  fg: bg,
  bg: fg,
  darkBlue: yellow,
  yellow: darkBlue,
  lightBlue: '#328CC1',
  headerFont: 'Poppins',
  paraFont: 'Lato',
  center: 'center',
  defaultTransition: 'all .3s'
});


// Custom Components
export const Button = styled.button`
  border: none;
  color: ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  transition: all .3s ease-in-out;
  font-size: 1.6rem;
  padding: 1rem 3.6rem;
  font-family: ${props => props.theme.paraFont};
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: pointer;

`;

export const AnimatedButton = styled.button`
  padding: 1rem 3.6rem;
  border: none;
  background: none;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  font-size: 1.6rem;
  font-family: ${props => props.theme.paraFont};
  border-radius: 0.3em;
  transition: ${props => props.theme.defaultTransition};
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;

  &:before {
    content: "";
    background-color: ${props => props.theme.bg};
    opacity: .5;
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: ${props => props.theme.defaultTransition};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${props => props.theme.fg};
    color:  ${props => props.theme.bg};
    border-bottom: 4px solid darken(${props => props.theme.fg}, 10%);
    &:before {
      transform: skewX(-45deg) translateX(35.5rem);
     transition: all 0.5s ease-in-out;
    }
  }
`;

export const FlatButton = styled(Button)`
  border: 2px solid ${props => props.theme.fg};
`;

export const ThemeButton = styled(Button)`
  color: ${props => props.theme.bg};
  border: 2px solid ${props => props.theme.darkBlue};
  background: ${props => props.theme.darkBlue};

  &:hover {
    background: ${props => props.theme.bg};
    color: ${props => props.theme.darkBlue};
    border: 2px solid ${props => props.theme.darkBlue};
  }

`;

export const AnimatedThemeButton = styled(AnimatedButton)`
  color: ${props => props.theme.darkBlue};
  border: 2px solid ${props => props.theme.darkBlue};

  &:hover {
    background-color: ${props => props.theme.darkBlue};
    color:  ${props => props.theme.bg};
    border-bottom: 4px solid darken(${props => props.theme.darkBlue}, 10%);
  }

`;

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

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