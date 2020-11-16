import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    Heroh1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements'


const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <Heroh1>Crypto Virtual Company </Heroh1>
                <HeroP>Sign up for a new account</HeroP>
                <HeroBtnWrapper>
                    <Button
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        to="sign up"
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={-80}
                    > Get Started! {hover ? <ArrowForward /> : <ArrowRight />} </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>

    )
}

export default HeroSection
