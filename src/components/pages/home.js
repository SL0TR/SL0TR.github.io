import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { Container, ThemeButton } from '../../theme/globalStyle';
import CoderIllustrat from '../svg/coderIllust';


const CustomFlex = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
`

const CenteredBox = styled(Box)`
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 0 3rem;
`

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  transition: all .3s ease-in-out;
  background: ${props => props.theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;

  h1, h2, h3, h5, p {
    text-align : ${props => props.center && props.theme.center}
  }

`

const Home = () => {
  return (
    <HomeContainer center>
      <Container>
      <CustomFlex>
        <CenteredBox width={[ 1, 1/2 ]}  mt={4} px={5} >
          <h1>Hello, I'm Mohaimin;<br/> a Full-Stack JS Developer</h1 >
          <ThemeButton>About Me</ThemeButton>
        </CenteredBox>
        <CenteredBox width={[ 1, 1/2 ]} mt={4} px={5}>
          <CoderIllustrat fill="#3498db" />
        </CenteredBox>
      </CustomFlex>
      </Container>
    </HomeContainer>
   );
}
 
export default Home;