import React from 'react';
import styled from 'styled-components';


import NavToggleBtn from './components/common/navToggleBtn';
import ThemeSwitchBtn from './components/common/themeSwitchBtn';
import Nav from './components/common/nav';

const LayoutContainer = styled.div`
`;

const ChildrenWrapper = styled.div`
`;


const Layout = ( { children, navToggle, invertToggle, onNavToggle, onThemeToggle } ) => 
  <LayoutContainer>
    <NavToggleBtn navToggle={navToggle} onNavToggle={ onNavToggle } />
    <ThemeSwitchBtn invertToggle={invertToggle} onThemeToggle={ onThemeToggle } />
    <Nav navToggle={navToggle} onNavToggle={onNavToggle} />
    <ChildrenWrapper>
      { children }
    </ChildrenWrapper>
  </LayoutContainer>


export default Layout;