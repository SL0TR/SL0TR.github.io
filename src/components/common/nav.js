import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components'


const NavContainer = styled.div`
  .nav-menu,
  .social-menu {
    width: 50vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .nav-menu {
    background-color: ${ props => props.theme.fg};
    left: 0;
    transition: all .3s;
    top: ${ props => props.navToggle === false ? '-100vh' : '0' };
    justify-content: center;
    flex-direction: column;
    align-items: center;

    a.active {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -.75rem;
        width: 100%;
        height: 5px;
        border-radius: 2px;
        background-color: ${props => props.theme.yellow};
      }
    }

  }

  .social-menu {
    background-color: ${ props => props.theme.bg};
    right: ${ props => props.navToggle === false ? '-50vw' : '0' };
    transition: all .3s;
    bottom: 0;
    display: flex;
  }

`

const NavItem = styled(NavLink)`
  color: ${props => props.theme.bg};
  font-size: 3rem;
  text-decoration: none;
  margin-bottom: 1.5rem;

  &:hover {
    text-decoration: none;
  }

`


const Nav = ( { navToggle, onNavToggle } ) => {

  return (
    <NavContainer navToggle={navToggle}>
      <div className="nav-menu">
        <NavItem exact to="/" onClick={ onNavToggle } >
          Home
        </NavItem>
        <NavItem  to="/portfolio" onClick={ onNavToggle } >
          Portfolio
        </NavItem>
        <NavItem  to="/about-me" onClick={ onNavToggle } >
          About Me
        </NavItem>
        <NavItem  to="/skills" onClick={ onNavToggle } >
          My Skills
        </NavItem>
        <NavItem  to="/contact-me" onClick={ onNavToggle } >
          Contact Me
        </NavItem>
      </div>
      <div className="social-menu">
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </div>
    </NavContainer>
   );
}
 
export default Nav;