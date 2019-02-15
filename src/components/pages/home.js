import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { Container, ThemeButton, AnimatedThemeButton } from '../../theme/globalStyle';
import CoderIllustrat from '../svg/coderIllust';


const CustomFlex = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
`


const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;

  h1, h2, h3, h5, p {
    text-align : ${props => props.center && props.theme.center}
  }

`

const Home = () => {
  return (
    <HomeContainer>
      <Container>
      <CustomFlex>
        <Box width={[ 1, 1/2 ]}  mt={4} px={5} >
          <h1>Hello, I'm Mohaimin.<br/> A Full-Stack JS Developer.</h1 >
          <AnimatedThemeButton >About Me</AnimatedThemeButton>
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