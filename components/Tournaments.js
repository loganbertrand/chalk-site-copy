import React, { useEffect } from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import { Animated } from "react-animated-css"
import PocketTournament from "../public/static/images/PocketTourneyLogo.svg"
import DailyTournament from "../public/static/images/DailyTourneyLogo.svg"

const Tournaments = () => {
	return (
		<Section className="section">
			<Flex
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Animated animationIn="fadeIn">
					<TitleText>
						<Span>ESPORTS</Span> 🎮 YOUR WAY
					</TitleText>
				</Animated>
				<SubtitleBox>
					<SubtitleText>
						Chalk gaming tournaments can be played by anyone, at any
						time, from anywhere. We'll keep score so you can make
						your way to the top of the leaderboard and earn free
						tournament entries or cash prizes without having to
						leave the game.
					</SubtitleText>
				</SubtitleBox>
			</Flex>
			<PhoneDiv>
				<PhoneFlex justifyContent="center" alignItems="center">
					<Box>
						<Flex justifyContent="center" alignItems="center">
							<ImageInfoBox>
								<LeftInfoFlex alignItems="center">
									<PocketTournament />
									<SmallTitle>
										Pocket
										<br />
										Tournaments
									</SmallTitle>
								</LeftInfoFlex>
								<SubText>
									Play in hourly video game tournaments with
									other Chalk users. We track player stats for
									the duration of the tournament, with
									leaderboards that update continuously during
									your games.
								</SubText>
							</ImageInfoBox>
							<ImageBox>
								<TopPhone
									src="/static/images/Tournament_1.png"
									alt="Pocket Tournament Mobile Screen"
								/>
							</ImageBox>
						</Flex>
					</Box>
					<Box>
						<BottomDiv>
							<Flex justifyContent="center" alignItems="center">
								<BottomImageBox>
									<BottomPhone
										src="/static/images/Tournament_2.png"
										alt="Daily Tournament Mobile Screen"
									/>
								</BottomImageBox>
								<ImageInfoBox>
									<Flex
										alignItems="center"
										justifyContent="flex-start"
									>
										<DailyTournament />
										<SmallTitle>
											Daily
											<br />
											Tournaments
										</SmallTitle>
									</Flex>
									<SubText>
										Pickup and play in Daily on-demand
										esports tournaments for a chance to win
										real money. Find tournaments for games
										like Destiny 2 and Fortnite.
									</SubText>
								</ImageInfoBox>
							</Flex>
						</BottomDiv>
					</Box>
				</PhoneFlex>
			</PhoneDiv>
		</Section>
	)
}

export default Tournaments

const floatAnimation = keyframes`
	0% {
		
		transform: translatey(0px);
	}
	50% {
		
		transform: translatey(-20px);
	}
	100% {
		
		transform: translatey(0px);
	}
`

const Section = styled.section`
	height: 100%;
	background-color: #e5e5e5;
`
const PhoneDiv = styled.div`
	@media (min-width: 767px) {
		padding-bottom: 80px;
	}
`
const TitleText = styled.h1`
	font-family: fatfrank, Montserrat;
	font-size: 56px;
	font-weight: 400;
	color: #80ebb6;
	margin: 0;
	padding: 0;
	text-align: center;
	margin-top: 80px;
	letter-spacing: 4px;
	@media (max-width: 1250px) {
		margin-top: 15%;
	}
	@media (max-width: 1023px) {
		font-size: 48px;
		font-weight: 600;
		letter-spacing: normal;
	}
	@media (max-width: 767px) {
	}
`
const SubtitleText = styled.h2`
	font-family: Montserrat;
	font-size: 16px;
	font-weight: 500;
	line-height: 25px;
	color: #393939;
	margin-top: 10px;
	text-align: center;
`
const SubtitleBox = styled(Box)`
	@media (max-width: 1024px) {
		width: 80%;
		margin-bottom: 50px;
	}
	width: 40%;
`
const SubText = styled.h2`
	font-family: Roboto, sans-serif;
	font-size: 16px;
	font-weight: 400;
	color: #393939;
	margin-top: 10px;
	text-align: left;
	width: 300px;
	@media (max-width: 767px) {
		width: 180px;
		margin-left: 20px;
		text-align: left;
	}
`
const SmallTitle = styled.h1`
	font-family: Montserrat;
	font-size: 24px;
	font-weight: bold;
	color: #393939;
	margin: 0;
	padding: 0;
	margin-left: 10px;
	text-align: left;
	@media (max-width: 767px) {
		font-size: 18px;
	}
`
const Span = styled.span`
	color: black;
`
const ImageBox = styled(Box)`
	@media (max-width: 1250px) {
		margin-top: 10px;
	}
	animation-name: ${floatAnimation};
	animation-duration: 6s;
	animation-iteration-count: infinite;
`
const BottomImageBox = styled(Box)`
	@media (max-width: 1250px) {
		margin-top: 10px;
	}
	margin-top: 130px;
	animation-name: ${floatAnimation};
	animation-duration: 6s;
	animation-iteration-count: infinite;
`
const ImageInfoBox = styled(Box)`
	@media (max-width: 1250px) {
		margin-top: 10px;
	}
	@media (max-width: 767px) {
		width: 65%;
	}
`
const LeftInfoFlex = styled(Flex)`
	@media (max-width: 1023px) {
		justify-content: center;
	}
	@media (min-width: 1024px) {
		justify-content: left;
	}
`
const PhoneFlex = styled(Flex)`
	@media (max-width: 1250px) {
		flex-direction: column;
	}
	@media (max-width: 1024px) {
		margin-top: 80px;
	}
`
const TopPhone = styled.img`
	height: 600px;
	width: auto;
	@media (max-width: 1024px) {
		height: 326px;
	}
	@media (max-width: 767px) {
		height: 303px;
	}
`
const BottomPhone = styled.img`
	height: 600px;
	width: auto;
	@media (max-width: 1024px) {
		height: 326px;
	}
	@media (max-width: 767px) {
		height: 303px;
	}
`
const BottomDiv = styled.div`
	@media (min-width: 1025px) {
		margin-top: 200px;
	}
`
