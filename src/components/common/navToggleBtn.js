import React from 'react';
import styled from 'styled-components';


const NavTogglerBtn = styled.div`
  height: 4rem;
  width: 4rem;
  position: fixed;
  left: 5rem;
  top: 5rem;
  z-index: 15;
  cursor: pointer;

  /* span {
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
  } */

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
    top: ${props => props.navToggle === false ? '1rem' : '38%' } ;
    transform: translateY(${props => props.navToggle === false ? '0' : '-50%' } ) rotate(${props => props.navToggle === false ? '0deg' : '45deg' } );
  }

  &::before {
    right: 0;
    bottom: ${props => props.navToggle === false ? '1rem' : '50%' } ;
    transform: translateY(${props => props.navToggle === false ? '0' : '-50%' } ) rotate(${props => props.navToggle === false ? '0deg' : '-45deg' } );
  }

`

const NavToggleBtn = ( { onNavToggle,  navToggle } ) => {
  return (
    <NavTogglerBtn onClick={ onNavToggle }  navToggle={ navToggle} />
   );
}
 
export default NavToggleBtn;