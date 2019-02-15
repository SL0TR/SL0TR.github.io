import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { Container, AnimatedThemeButton } from '../../theme/globalStyle';
import CoderIllustrat from '../svg/coderIllust';
import { NavLink } from "react-router-dom";



const CustomFlex = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
`;


const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;

  h1, h2, h3, h5, p, button, a {
    text-align : ${props => props.center && props.theme.center};
    margin: 1rem 0;
  }

`;

const Home = () => {
  return (
    <HomeContainer>
      <Container>
      <CustomFlex>
        <Box width={[ 1, 1/2 ]}  mt={4} px={5} >
          <h1>Hello, <br/> I'm Mohaimin,<br/> A Full-Stack JS Developer.</h1 >
          <p>React / Vue / Node / WordPress </p>
            <NavLink to="/contact-me">
              <AnimatedThemeButton >Contact Me</AnimatedThemeButton>
            </NavLink>
        </Box>
        <Box width={[ 1, 1/2 ]} mt={4} px={5}>
          <CoderIllustrat fill="#3498db" />
        </Box>
      </CustomFlex>
      </Container>
    </HomeContainer>
   );
}
 
export default Home;