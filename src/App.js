import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

import Home from './components/pages/home';
import Portfolio from './components/pages/portfolio';
import { GlobalStyle } from './theme/globalStyle';
import { ThemeProvider } from 'styled-components';
import { Theme, invertTheme } from './theme/globalStyle';
import Nav from './components/common/nav';

class App extends Component {
  state = {
    inverted: false,
  }
  render() {
    return (
      <ThemeProvider theme={ Theme  }>
        <ThemeProvider theme={ this.state.inverted ? invertTheme  : Theme }>
          <React.Fragment>
            <GlobalStyle />
            <Nav />
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
