import React from 'react'
import { Button } from 'react-scroll'
import { ImgWrap } from './InfoElements'
import {
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Column1,
    Column2,
    TextWrapper,
    TopLine, Heading,
    Subtitle,
    BtnWrap,
    Img
} from './InfoElements'


const InfoSection = () => {
    return (
        <>
            <InfoContainer >
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Top Line</TopLine>
                                <Heading>Headint</Heading>
                                <Subtitle>Subtitle</Subtitle>
                                <BtnWrap>
                                    <Button to="home" />
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
