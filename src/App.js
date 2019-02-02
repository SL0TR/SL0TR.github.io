import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import './App.css'

import Home from './components/pages/home'
import Portfolio from './components/pages/portfolio'
import { GlobalStyle } from './theme/globalStyle'
import { ThemeProvider } from 'styled-components'
import { Theme, invertTheme } from './theme/globalStyle'
import Nav from './components/common/nav';
import styled from 'styled-components'


const NavToggleBtn = styled.div`
  height: 4rem;
  width: 4rem;
  position: fixed;
  left: 5rem;
  top: 5rem;
  z-index: 15;
  cursor: pointer;

  span {
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
  }

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
    top: ${props => props.navToggle === false ? '0' : '48%' } ;
    transform: translateY(${props => props.navToggle === false ? '0' : '-50%' } ) rotate(${props => props.navToggle === false ? '0deg' : '45deg' } );
  }

  &::before {
    right: 0;
    bottom: ${props => props.navToggle === false ? '0' : '40%' } ;
    transform: translateY(${props => props.navToggle === false ? '0' : '-50%' } ) rotate(${props => props.navToggle === false ? '0deg' : '-45deg' } );
  }

`


class App extends Component {
  state = {
    inverted: false,
    navToggle: false,
  }

  onNavToggle = () => {
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
            <NavToggleBtn navToggle={navToggle} onClick={ this.onNavToggle } ><span></span></NavToggleBtn>
            <Nav navToggle={navToggle} />
            <div className="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
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
