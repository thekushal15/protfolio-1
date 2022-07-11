import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
min-height: 100vh;
width: 80vw;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

position: relative;
`

const Container = styled.div`
min-height: 100vh;

display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`

const BannerComponent = styled(motion.h1)`
font-size   : ${props => props.theme.fontxxxl};
font-family: 'Kaushan Script';
color:${props => props.theme.text};
white-space:nowrap;
text-transform: uppercase;
line-height: 1;


span{
    display:block;
    background-color: ${props => props.theme.body};
    padding: 1rem 2rem;
}
`

const Banner = () => {
  return (
    <Section>
        <Container id="up">
            <BannerComponent>
                <span data-scroll data-scroll-direction="horizontal"
                data-scroll-speed="-8"
                data-scroll-target="#up"
                >
                    Right there with you
                </span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction="horizontal"
                data-scroll-speed="6"
                data-scroll-target="#up"
                >
                    For making your
                </span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction="horizontal"
                data-scroll-speed="-6"
                data-scroll-target="#up"
                >
                college life better
                </span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction="horizontal"
                data-scroll-speed="10"
                data-scroll-target="#up"
                >
                    Student Welfare Group
                </span>
            </BannerComponent>
        </Container>
    </Section>
  )
}

export default Banner