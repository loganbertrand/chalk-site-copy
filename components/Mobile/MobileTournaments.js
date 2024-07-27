import React, { useEffect } from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import { Animated } from "react-animated-css"
import PocketTournament from "../../public/static/images/PocketTourneyLogo.svg"
import DailyTournament from "../../public/static/images/DailyTourneyLogo.svg"

const Tournaments = () => {

    return(
        <Section className="section">
            <TotalFlex alignItems="center" flexDirection="column">
                <Animated animationIn="fadeIn">
                    <TitleText>
                        <Span>ESPORTS</Span> 🎮 YOUR WAY
                    </TitleText>
					
                </Animated>
				<Box width="80%">
					<SubtitleText>
						Chalk Tournaments can be played by anyone, at any time, from anywhere. We'll keep score so you can make your way to the top of the leaderboard without having to leave the game.
					</SubtitleText>
				</Box>

                <Box maxWidth="80%">
                    <Flex alignItems="center" justifyContent="center">
                        <PocketTournament/>
                        <SmallTitle>Pocket<br/>Tournaments</SmallTitle>
                    </Flex>
                    <SubText>Join the Daily Tournament and play against your friends or other opponents from around the world.</SubText>
                </Box>
                <Box maxWidth="80%">
                    <Flex alignItems="center" justifyContent="center">
                        <DailyTournament/>
                        <SmallTitle>Daily<br/>Tournaments</SmallTitle>
                    </Flex>
                    <SubText>Join the Daily Tournament and play against your friends or other opponents from around the world.</SubText>
                </Box>
            </TotalFlex>
        </Section>
    )
}

export default Tournaments

const Section = styled.section`
	height: 100%;
	background-color: #E5E5E5;

`
const TitleText = styled.h1`
	font-family: Montserrat;
	font-size: 64px;
	font-weight: bold;
	color: #80EBB6;
	@media (max-width: 1356px) {
		font-size: 45px;
	}
	margin: 0;
	padding: 0;
	text-align: center;
	margin-top: 5%;
	text-shadow: 0px 3px 6px rgba(121, 121, 121, 0.16);
`
const SubtitleText = styled.h2`
	font-family: Montserrat;
	font-size: 16px;
	font-weight: 500;
	line-height: 25px;
	color: #393939;
	
	margin-top: 10px;
	@media (max-width: 1356px) {
		font-size: 18px;
	}
	text-align: center;
`
const SubText = styled.h2`
	font-family: Roboto, sans-serif;
	font-size: 16px;
	font-weight: 500;
	line-height: 25px;
	color: #393939;
	
	margin-top: 10px;
	@media (max-width: 1356px) {
		font-size: 18px;
	}
	text-align: center;
`
const SmallTitle = styled.h1`
	font-family: Montserrat;
	font-size: 32px;
	font-weight: bold;
	color: #393939;
	@media (max-width: 1356px) {
		font-size: 32px;
	}
    margin-left: 15px;
`
const Span = styled.span`
	color: black;
`
const TotalFlex = styled(Flex)`
height: 100vh;
`