import React from 'react'
import styled from 'styled-components'
import Illust from '../../assets/images/illust-3-dark-v2.svg'

const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

const Home = () => {
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <Button>Normal</Button>

      <img className="illust" src={Illust} alt="lalal"/>

    </React.Fragment>
   );
}
 
export default Home;