import React, { useEffect } from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import { Animated } from "react-animated-css"

const AppDetails = () => {

    return(
        <Section className="section">
            <TotalFlex alignItems="center" flexDirection="column">
                <Animated animationIn="fadeIn">
                    <TitleText>
                        Features
                    </TitleText>
                </Animated>
                <Box maxWidth="80%">
                    <SubText>WALLET INFO / PAYMENT OPTIONS</SubText>
                    <SubText>SYNC YOUR GAMER TAG</SubText>
                    <SubText>FIND TOURNAMENTS THAT FIT YOUR STYLE OF PLAY</SubText>
                    <SubText>CHECK THE LEADERBOARD TO KNOW WHER YOU STAND</SubText>
                    <SubText>PLAY, WIN, CASHOUT WHEN YOU WANT</SubText>
                </Box>
				
            </TotalFlex>
        </Section>
    )
}

export default AppDetails

const Section = styled.section`
	height: 100%;
	background-color: #F7F7F7;
`
const TitleText = styled.h1`
	font-family: Montserrat;
	font-size: 64px;
	font-weight: bold;
	color: #000000;
	@media (max-width: 1356px) {
		font-size: 45px;
	}
	margin: 0;
	padding: 0;
	text-align: center;
	margin-top: 5%;

`
const SubText = styled.h2`
	font-family: Roboto, sans-serif;
	font-size: 21px;
	font-weight: 500;
	line-height: 25px;
	color: #393939;
	
	margin-top: 10px;
	@media (max-width: 1356px) {
		font-size: 18px;
	}
	text-align: center;
	margin-top: 3%;
    
`
const TotalFlex = styled(Flex)`
	height: 100vh;
`