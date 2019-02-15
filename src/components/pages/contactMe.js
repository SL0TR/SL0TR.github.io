import React from 'react'
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const Page = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

const ContactMePageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInRight} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.2s forwards;
  }
`;

const ContactMe = () => {
  return (
    <ContactMePageElm>
      <h2>ContactMe Page</h2>
      <p>Demo page. Click below to go back to previous page.</p>
      <NavLink to="/">← Back to Page One</NavLink>
    </ContactMePageElm>
   );
}

export default ContactMe;