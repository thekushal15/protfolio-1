import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'
import NavBar from './NavBar';
import Team from '../subComponents/Team';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
min-height:100vh;
position: relative;
overflow: hidden;
/* Z-index:1; */
`

const MegaBox = styled.section`
display: flex;
flex-direction: column;
min-height: 200vh;
;
`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<NavBar theme='dark'/>
<MegaBox>

<Box>
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        The Student Welfare Group (SWG) is a student body under the office of the Dean of Students` Affairs, IIT Kharagpur.
<br /> <br/>
The aim of SWG is to ensure that every student's life in KGP is hassle free so that they can achieve their potential zenith while their stay in KGP as well as in their professional career. SWG aims to instil a belief in every student that they can achieve all their goals in life.
<br/> <br/>
Student Welfare Group was initially an idea that evolved out of a feeling to perpetuate and nurture a campus life which is hassle-free.
        </Main>

        {/* <BigTitle text="ABOUT" top="10%" left="5%" /> */}
        {/* <Team/> */}

        </Box>
        <Box>
<ParticleComponent theme='dark' />

        {/* <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
<br /> <br/>
I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
<br/> <br/>
I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Main>*/}

        {/* <Team/> */}
        <Team/>

        </Box>
        <BigTitle text="ABOUT" top="10%" left="5%" /> 
</MegaBox>

        </ThemeProvider>
        
    )
}

export default AboutPage
