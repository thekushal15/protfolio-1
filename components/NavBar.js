import React from 'react'
import styled from 'styled-components'
// import { Keyframes } from 'styled-components'
import { useState } from 'react'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { DarkTheme } from '../components/Themes'


const NavHolder = styled.nav`
position: fixed;
top:0;
width: 100%;
color: orange;
z-index: 4;
`

const NavContainer = styled(motion.div)`
position:absolute;
top:0;   
width:100vw;
z-index:6;
display: flex;
top: ${props => props.click ? "0" : `-${props.theme.navHeight}`};

justify-content:center;
align-items:center;

transition : all ease 0.3s;
`

const MenuItems = styled(motion.ul)`
position:relative;
height:${props=>props.theme.navHeight};

/* background-color: ${(props)=> props.theme.body}; */
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
color: ${props => props.color === 'dark' ? DarkTheme.body : DarkTheme.text};
list-style:none;

display:flex;
justify-content:space-around;
align-items:center;

width:100%;
padding: 0 10rem;
`


const BLOG = styled(NavLink)`
text-decoration: none;
/* color: ${props => props.color === 'Dark' ? DarkTheme.body : DarkTheme.text}; */
color: ${props => props.theme.body};
`
const Home = styled(NavLink)`
text-decoration: none;
/* color: ${props => props.color === 'dark' ? DarkTheme.body : DarkTheme.text}; */
color:${props => props.theme.body};
`
const About = styled(NavLink)`
/* color: ${props => props.color === 'dark' ? DarkTheme.body : DarkTheme.text}; */
color:${props => props.theme.body};
text-decoration: none;
`
const Skills = styled(NavLink)`
/* color: ${props => props.color === 'dark' ? DarkTheme.body : DarkTheme.text}; */
color:${props => props.theme.body};
text-decoration: none;
`


const MenuBtn = styled.div`
/* background-color: ${props=> `rgba(${props.theme.textRgba},0.7)`}; */
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
list-style-type: style none;
/* color:${props=>props.theme.body}; */
color: ${props => props.color === 'dark' ? DarkTheme.body : DarkTheme.text};

width:15rem;
height:2.5rem;

clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

position:absolute;
top:100%;
left:50%;
transform:translateX(-50%);


display:flex;
justify-content:center;
align-items :center; 

font-size: ${props=>props.theme.fontmd};
font-weight: 600;
text-transform: uppercase;

/* border: 1px solid ${props => props.color === 'dark' ? DarkTheme.body : DarkTheme.text}; */
cursor:pointer;
`
const MenuItem = styled(motion.li)`
text-transform: uppercase;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
text-decoration: none;
font-size: ${props=>props.theme.fontmd};

//

/* padding-bottom: 0.75rem; */
`

// const itemVariants = {

//     hidden:{
    
//     }
// }



const NavBar = (props) => {

    const [click, setClick] = useState(false);
  return (
    <NavHolder>
            <NavContainer click={click}
    initial={{
        y: '-100%'
    }}
    animate={{
        y:0
    }}
    transition={{
        duration:2, delay:0, ease: "easeInOut",
    }}
    >
        <MenuItems
        drag='y'
        dragConstraints={{
            top:0,
            bottom:0,

        }}
        dragElastic={0.05}
        dragSnapToOrigin
        color={props.theme}
        >
        <MenuBtn onClick={()=> setClick(!click)} color={props.theme}>
            Menu
        </MenuBtn>
        <MenuItem 
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9,y:0}}
        >
            <Home to="/explore">Home</Home>
        </MenuItem>
        <MenuItem 
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9,y:0}}
        >
            <Home to="/work">Events</Home>
        </MenuItem>
        <MenuItem 
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9,y:0}}
        >
            <BLOG to="/blog">Acads</BLOG>
        </MenuItem>
        <MenuItem 
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9,y:0}}
        >
            <About to="/about">About</About>
        </MenuItem>
        <MenuItem 
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9,y:0}}
        >
            <Skills to="/skills">Career</Skills>
        </MenuItem>
        </MenuItems>
    </NavContainer>
    </NavHolder>
  )
}

export default NavBar