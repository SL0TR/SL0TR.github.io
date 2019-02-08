import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import './App.css'
import { GlobalStyle } from './theme/globalStyle'
import { ThemeProvider } from 'styled-components'
import { Theme, invertTheme } from './theme/globalStyle'
import Nav from './components/common/nav';

// Page Component Imports
import Home from './components/pages/home'
import Portfolio from './components/pages/portfolio'
import ContactMe from './components/pages/contactMe'
import Skills from './components/pages/skills'
import AboutMe from './components/pages/aboutMe'
import NotFound from './components/pages/notFound'
import NavToggleBtn from './components/common/navToggleBtn';
import ThemeSwitchBtn from './components/common/themeSwithBtn';

class App extends Component {
  state = {
    inverted: false,
    navToggle: false,
  }

  handleNavToggle = () => {
    const { navToggle } = this.state;
    this.setState({ navToggle: !navToggle })
  }

  handleThemeToggle = () => {
    const { inverted } = this.state;
    this.setState({ inverted: !inverted })
  }

  render() {
    const { navToggle, inverted } = this.state;
    return (
      <ThemeProvider theme={ Theme  }>
        <ThemeProvider theme={ this.state.inverted ? invertTheme  : Theme }>
          <React.Fragment>
            <GlobalStyle />
            <NavToggleBtn navToggle={navToggle} onNavToggle={ this.handleNavToggle } />
            <ThemeSwitchBtn invertToggle={inverted} onThemeToggle={ this.handleThemeToggle } />
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
