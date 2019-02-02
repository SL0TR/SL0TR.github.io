import React from 'react';
import { NavLink} from "react-router-dom";
import styled from 'styled-components'


const NavContainer = styled.div`
  position: fixed;
  left: 20px;
  top: 10px;
`


const Nav = () => {
  return (
    <NavContainer>
      <ul className="nav-menu">
        <NavLink  to="/">
        Home
        </NavLink>
        <NavLink  to="/portfolio">
        Portfolio
        </NavLink>
      </ul>
    </NavContainer>
   );
}
 
export default Nav;