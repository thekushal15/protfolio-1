import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ParticleComponent from '../subComponents/ParticleComponent'; //Extra


import img1 from '../assets/Nfts/bighead-1.svg';
import img2 from '../assets/Nfts/bighead-2.svg';
import img3 from '../assets/Nfts/bighead-3.svg';
import img4 from '../assets/Nfts/bighead-4.svg';
import img5 from '../assets/Nfts/bighead-5.svg';
import img6 from '../assets/Nfts/bighead-6.svg';
import img7 from '../assets/Nfts/bighead-7.svg';
import img8 from '../assets/Nfts/bighead-8.svg';
import img9 from '../assets/Nfts/bighead-9.svg';
import { DarkTheme } from '../components/Themes';
// import img10 from '../../assets/Nfts/bighead.svg';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${propos=> propos.theme.body};
position: relative;
`


const Title =styled.h1`
font-size: ${props=> props.theme.fontxxl};
text-transform: capitalize;
color:${props=> props.theme.text};
display:flex;
justify-content:center;
align-items:center;
margin: 1rem auto;
padding-top: 1rem;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;

`

const Container =styled.div`
width:75%;
margin:2rem auto;
margin-bottom: 0;


display:flex;
justify-content: space-between;
align-items:center;
flex-wrap: wrap;
/* z-index: 100; */

div{
  color:${(props) => props.theme.text};
}
`

const Item =styled.div`
width:calc(20rem-4vw);
padding: 1rem 0;
color: ${props=>props.theme.body};
margin : 2rem 1rem;
position:relative;

border: 2px solid ${props=> props.theme.text};
border-radius: 20px;
z-index:100;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}
`

const ImageContainer = styled.div`
width:15rem;
margin: 0 0.91rem;
background-color: ${props=> props.theme.text}; // corousel color
padding: 1rem;

border-radius: 20px;
cursor:pointer;

img{
  width:100%;
  height:auto;
  transition: all 0.3s ease;

}
`

const Name= styled.h2`
font-size:${props=>props.theme.fontlg};
display:flex;
align-items:center;
justify-content:center;
text-transform: uppercase;
color: ${props=>props.theme.text};
margin-top: 1rem;
`

const Position= styled.h2`
font-size:${props=>props.theme.fontmd};
display:flex;
align-items:center;
justify-content:center;
text-transform: capitalize;
color: ${props=> `rgba(${props.theme.textRgba},0.6)`};
font-weight: 400;
`

const MemberComponent =({img, name = " ",position=" "})=>{

  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

const Team = () => {
  return (
    <Section>
      <ThemeProvider theme={DarkTheme}>
      <ParticleComponent theme='dark' />
      <Title>
          Our Team 
      </Title>
      <Container>
        <MemberComponent name="Swg peepz" position="Head"  img={img2}/>
        <MemberComponent name="Swg peepz" position="Assosiate Member"  img={img1}/>
        <MemberComponent name="Swg peepz" position="Head"  img={img3}/>
        <MemberComponent name="Swg peepz" position="Assosiate Member"  img={img4}/>
        <MemberComponent name="Kushal" position="Assosiate Member"  img={img5}/>
        <MemberComponent name="Swg peepz" position="Assosiate Member"  img={img6}/>
        <MemberComponent name="Swg peepz" position="Head"  img={img7}/>
        <MemberComponent name="Swg peepz" position="Assosiate Member"  img={img8}/>
        <MemberComponent name="Swg peepz" position="Head"  img={img9}/>
        {/* <MemberComponent name="Swg peepz" position="AMs"  img={img10}/> */}

      </Container>
      </ThemeProvider>
    </Section>
  )
}

export default Team