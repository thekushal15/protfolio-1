import React from 'react'
import LogoComponent from '../subComponents/LogoComponent'
import { DarkTheme, lightTheme } from '../components/Themes'
import styled, { ThemeProvider } from 'styled-components'
import NavBar from './NavBar'
import { PowerBtn } from './AllSvgs'
import PowerButton from '../subComponents/PowerButton'
import Intro from './Intro'
import Main from './Main'
import Banner from './Banner'
import { AnimatePresence } from 'framer-motion'

import {LocomotiveScrollProvider} from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const HomePage = styled.section`
background-color: ${props => props.theme.text};
min-height: 300vh;
`


const Explore = () => {
  return (
    <ThemeProvider theme={lightTheme}>

    <HomePage>
        <LogoComponent theme={DarkTheme}/>
        <NavBar theme='light' />
        <PowerButton/>
        <section className="hero">
        {/* <Intro/> */}
        <Main/>
        </section>
<section className="villan">

  {/* <LocomotiveScrollProvider
  // options={
  //   {
  //     smooth: true,
  //     // ... all available Locomotive Scroll instance options 
  //   }
  // }
  // watch={
  //   []
  // }
  // >
  </LocomotiveScrollProvider> */}

  <AnimatePresence>

  <Banner/>
  </AnimatePresence>
  </section>
    </HomePage>
    </ThemeProvider>
  )
}

export default Explore