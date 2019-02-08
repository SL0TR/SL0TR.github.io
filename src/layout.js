import React, { Component } from 'react';
import styled from 'styled-components';


import NavToggleBtn from './components/common/navToggleBtn';
import ThemeSwitchBtn from './components/common/themeSwitchBtn';
import Nav from './components/common/nav';

const LayoutContainer = styled.div`
`;

const ChildrenWrapper = styled.div`
`;


class Layout extends Component {

  render() {
    const { children, navToggle, inverted, onNavToggle, onThemeToggle } = this.props;

    return ( 
      <LayoutContainer>
        <NavToggleBtn navToggle={navToggle} onNavToggle={ onNavToggle } />
        <ThemeSwitchBtn invertToggle={inverted} onThemeToggle={ onThemeToggle } />
        <Nav navToggle={navToggle} onNavToggle={onNavToggle} />
        <ChildrenWrapper>
          { children }
        </ChildrenWrapper>
      </LayoutContainer>
     );
  }
}


export default Layout;