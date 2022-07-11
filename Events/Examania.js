import React from 'react'
import { ThemeProvider } from 'styled-components'
import NavBar from '../components/NavBar'
import GlobalStyle from '../globalStyles'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import { lightTheme } from '../components/Themes'
import SocialIcons from '../subComponents/SocialIcons'
import Home from '../EventComponents/Home'


const Examania = () => {
  return (
    <>
    <ThemeProvider theme={lightTheme}>
        <GlobalStyle/>
        <PowerButton/>
        <NavBar/>
        <LogoComponent/>
        <SocialIcons theme={lightTheme}/>

        {/* <Home/> */}
    </ThemeProvider>
    </>
  )
}

export default Examania