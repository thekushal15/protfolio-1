import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import NavBar from "./NavBar";
import { Facebook } from "./AllSvgs";
import { NavLink } from "react-router-dom";

const MegaBox = styled.section`
display: flex;
flex-direction: column;
min-height: 200vh;
;
`

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  /* color: orange; */
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;


const Footer = styled.footer`
display: flex;
justify-content: space-between;
`;



const Link = styled(NavLink)`
background-color: ${props =>props.theme.text};
color: ${props =>props.theme.body};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);

${Main}:hover &{
    background-color: ${props =>props.theme.body};
    color: ${props =>props.theme.text};

}
`


const Git = styled(NavLink)`
color: inherit;
fill:${props =>props.theme.text};
text-decoration: none;
${Main}:hover &{
    &>*{
        fill:${props =>props.theme.body};
    }
}

`

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
        <MegaBox>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <NavBar theme="light" />
      <Box>
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} /> Placements
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
              <li>Promo Videos</li>
            </ul>
          </Description>
          <Description>
          <Footer>
                <Link to="" target="_blank">
                    Read Blogs
                </Link>
                <Git to="" target="_blank">
                    <Facebook width={40} height={40} />
                </Git>
            </Footer>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Internships
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Js, React, etc.</p>
          </Description>
          <Description>
          <Footer>
                <Link to="" target="_blank">
                    Read Blogs
                </Link>
                <Git to="" target="_blank">
                    <Facebook width={40} height={40} />
                </Git>
            </Footer>
          </Description>
        </Main>
        {/* <BigTitle text="Career" top="80%" right="30%" /> */}
      </Box>
      <Box>
        {/* <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <NavBar theme="light" />
        <ParticleComponent theme="light" /> */}
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} /> Research
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
              <li>Promo Videos</li>
            </ul>
          </Description>
          <Description>
          <Footer>
                <Link to="" target="_blank">
                    Read Blogs
                </Link>
                <Git to="" target="_blank">
                    <Facebook width={40} height={40} />
                </Git>
            </Footer>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Enterprenuership
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Js, React, etc.</p>
          </Description>
          <Description>
          <Footer>
                <Link to="" target="_blank">
                    Read Blogs
                </Link>
                <Git to="" target="_blank">
                    <Facebook width={40} height={40} />
                </Git>
            </Footer>
          </Description>
        </Main>
        
      </Box>   
        <BigTitle text="Career" top="80%" right="30%" />
        </MegaBox>
    </ThemeProvider>
  );
};

export default MySkillsPage;
