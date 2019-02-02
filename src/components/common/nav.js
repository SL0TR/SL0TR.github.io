import React from 'react';
import { NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <React.Fragment>
      <div className="nav">
        <ul className="nav-menu">
          <NavLink  to="/">
          Home
          </NavLink>
          <NavLink  to="/portfolio">
          Portfolio
          </NavLink>
        </ul>
      </div>
    </React.Fragment>
   );
}
 
export default Nav;