import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import './App.css'
import { GlobalStyle } from './theme/globalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { Theme, invertTheme } from './theme/globalStyle'
import Nav from './components/common/nav';

// Page Component Imports
import Home from './components/pages/home'
import Portfolio from './components/pages/portfolio'
import ContactMe from './components/pages/contactMe'
import Skills from './components/pages/skills'
import AboutMe from './components/pages/aboutMe'
import NotFound from './components/pages/notFound'


const NavToggleBtn = styled.div`
  height: 2rem;
  width: 4rem;
  position: fixed;
  left: 5rem;
  top: 5rem;
  z-index: 15;
  cursor: pointer;

  /* span {
    height: 5px;
    background-color: ${ props => props.navToggle === false ? props.theme.fg : props.theme.bg };
    transition: all .3s;
    width: 100%;
    position: absolute;
    left: 20%;
    top: 50%;
    border-radius: 5px;
    opacity: ${props => props.navToggle === false ? '1' : '0' };
    transform: translateY(-50%);
  } */

  &::after,
  &::before {
    content: "";
    transition: all .3s;
    position: absolute;
    background-color: ${ props => props.navToggle === false ? props.theme.fg : props.theme.bg };
    border-radius: 5px;
    width: 100%;
    height: 5px;
  }

  &::after {
    left: 0;
    top: ${props => props.navToggle === false ? '0' : '50%' } ;
    transform: translateY(${props => props.navToggle === false ? '0' : '-50%' } ) rotate(${props => props.navToggle === false ? '0deg' : '45deg' } );
  }

  &::before {
    right: 0;
    bottom: ${props => props.navToggle === false ? '0' : '50%' } ;
    transform: translateY(${props => props.navToggle === false ? '0' : '-50%' } ) rotate(${props => props.navToggle === false ? '0deg' : '-45deg' } );
  }

`


class App extends Component {
  state = {
    inverted: false,
    navToggle: false,
  }

  handleNavToggle = () => {
    const { navToggle } = this.state;
    this.setState({ navToggle: !navToggle })
  }
  render() {
    const { navToggle} = this.state;
    return (
      <ThemeProvider theme={ Theme  }>
        <ThemeProvider theme={ this.state.inverted ? invertTheme  : Theme }>
          <React.Fragment>
            <GlobalStyle />
            <NavToggleBtn navToggle={navToggle} onClick={ this.handleNavToggle } ><span></span></NavToggleBtn>
            <Nav navToggle={navToggle} onNavToggle={this.handleNavToggle} />
            <div className="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/about-me" component={AboutMe} />
                <Route path="/skills" component={Skills} />
                <Route path="/contact-me" component={ContactMe} />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
              </Switch>
            </div>
          </React.Fragment>
        </ThemeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
