import React from 'react';
import { NavLink} from "react-router-dom";
import styled from 'styled-components'


const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  /* display: none; */

  .nav-menu,
  .social-menu {
    width: 50%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-menu {
    background-color: ${ props => props.theme.fg};
    left: 0;
    transition: all .3s;
    top: ${ props => props.navToggle === false ? '-100vh' : '0' };
  }

  .social-menu {
    background-color: ${ props => props.theme.bg};
    right: 0;
    transition: all .3s;
    bottom: ${ props => props.navToggle === false ? '-100vh' : '0' };
  }

`


const Nav = ( { navToggle } ) => {
  return (
    <NavContainer navToggle={navToggle}>
      <div className="nav-menu">
        <ul>
          <NavLink  to="/">
          Home
          </NavLink>
          <NavLink  to="/portfolio">
          Portfolio
          </NavLink>
        </ul>
      </div>
      <div className="social-menu">
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>
    </NavContainer>
   );
}
 
export default Nav;