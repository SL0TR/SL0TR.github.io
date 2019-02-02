import React from 'react'
import styled from 'styled-components'
import Illust from '../../assets/images/illust-3-dark-v2.svg'
import { Flex, Box } from '@rebass/grid'
import { Container, media } from '../../theme/globalStyle';

const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1.6rem;
  margin: 1.6rem auto;
  padding: 0.25em 1.6rem;
  border-radius: 3px;
`;

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

const CustomFlex = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
`

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
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
        <Box width={[ 1, 1/2 ]}  mt={4} px={5} >
          <h1>Hello, I'm Mohaimin Islam,<br/> a Full-Stack JS Developer</h1 >
          <Button>Normal</Button>
        </Box>
        <Box width={[ 1, 1/2 ]} mt={4} px={5}>
          <img className="illust" src={Illust} alt="lalal"/>
        </Box>
      </CustomFlex>
      </Container>
    </HomeContainer>
   );
}
 
export default Home;