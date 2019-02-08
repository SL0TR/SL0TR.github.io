import React, { Component } from 'react'
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import { GlobalStyle } from './theme/globalStyle'
import { ThemeProvider } from 'styled-components'
import { Theme, invertTheme } from './theme/globalStyle'

// Page Component Imports
import Home from './components/pages/home'
import Portfolio from './components/pages/portfolio'
import ContactMe from './components/pages/contactMe'
import Skills from './components/pages/skills'
import AboutMe from './components/pages/aboutMe'
import NotFound from './components/pages/notFound'

import Layout from './layout';


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
              <BrowserRouter>
                <Layout navToggle={navToggle} onNavToggle={ this.handleNavToggle } onThemeToggle={ this.handleThemeToggle } invertToggle={inverted}  >
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about-me" component={AboutMe} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/contact-me" component={ContactMe} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" />
                  </Switch>
                </Layout>
              </BrowserRouter>
          </React.Fragment>
        </ThemeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
