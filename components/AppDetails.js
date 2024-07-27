import React, { useEffect } from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import { Animated } from "react-animated-css"
import CheckMark from "../public/static/images/CheckMark.svg"
import ImageGrid from "../components/ImageGrid"

const AppDetails = () => {
	return (
		<Section className="section">
			<TotalFlex justifyContent="center" alignItems="center">
				<DetailBox>
					<FeatureFlex
						alignItems="left"
						justifyContent="center"
						flexDirection="column"
					>
						<Box>
							<Animated animationIn="fadeIn">
								<TitleText>FEATURES</TitleText>
							</Animated>
						</Box>
						<FeatureBox>
							<Flex justifyContent="left" alignItems="center">
								<CheckCircle>
									{" "}
									<CheckMark />{" "}
								</CheckCircle>
								<SubText>REAL-TIME STAT TRACKING</SubText>
							</Flex>

							<Flex>
								<InfoText>
									Keep your head in the game, we’ll handle the
									rest. Thanks to Chalk’s direct integration
									with your gameplay, there’s no need for you
									to upload images or experience any friction.
									Just Play.
								</InfoText>
							</Flex>
						</FeatureBox>

						<FeatureBox>
							<Flex justifyContent="left" alignItems="center">
								<CheckCircle>
									{" "}
									<CheckMark />{" "}
								</CheckCircle>
								<SubText>SAFE & SECURE WALLET</SubText>
							</Flex>

							<Flex>
								<InfoText>
									Add money to your account using a variety of
									payment options, including Apple Pay. When
									you win real money cash prizes, simply
									withdraw directly to your bank account.
								</InfoText>
							</Flex>
						</FeatureBox>

						<FeatureBox>
							<Flex justifyContent="left" alignItems="center">
								<CheckCircle>
									{" "}
									<CheckMark />{" "}
								</CheckCircle>
								<SubText>TOURNAMENTS FOR ANYONE</SubText>
							</Flex>

							<Flex>
								<InfoText>
									Chalk video game tournaments fit all styles
									of gameplay. Whether you’re a sharpshooting
									headshot extraordinaire or a cash grabbing
									loot goblin, there’s a tournament for you.
								</InfoText>
							</Flex>
						</FeatureBox>

						<FeatureBox>
							<Flex justifyContent="left" alignItems="center">
								<CheckCircle>
									{" "}
									<CheckMark />{" "}
								</CheckCircle>
								<SubText>PLAY, WIN, CASHOUT</SubText>
							</Flex>
							<Flex>
								<InfoTextBottom>
									It's that simple.
								</InfoTextBottom>
							</Flex>
						</FeatureBox>
					</FeatureFlex>
				</DetailBox>
				<ImageBox>
					<GradientFlex>
						<ImageGrid />
					</GradientFlex>
				</ImageBox>
			</TotalFlex>
		</Section>
	)
}

export default AppDetails

const Section = styled.section`
	height: 100%;
	background-color: #f7f7f7;
`
const TitleText = styled.h1`
	font-family: fatfrank, Montserrat;
	font-size: 56px;
	font-weight: bold;
	color: #000000;
	@media (max-width: 1023px) {
		font-size: 56px;
		text-align: center;
		letter-spacing: normal;
		margin-top: 10%;
	}
	@media (max-width: 767px) {
		font-size: 48px;
	}
	margin: 0;
	padding: 0;
	text-align: left;
	margin-top: 5%;
	margin-bottom: 3%;
	letter-spacing: 4px;
`
const SubText = styled.h2`
	font-family: Roboto, sans-serif;
	font-size: 20px;
	font-weight: bold;
	line-height: 25px;
	color: #212121;
	@media (max-width: 1356px) {
		font-size: 18px;
	}
	text-align: left;
	margin-left: 2%;
	margin-bottom: 10px;
`
const InfoText = styled.h3`
	font-family: Roboto, sans-serif;
	font-size: 16px;
	font-weight: 500;
	line-height: 25px;
	color: #464646;
	text-align: left;
	margin-left: 8%;
	margin-top: 0;
`
const InfoTextBottom = styled.h3`
	font-family: Roboto, sans-serif;
	font-size: 16px;
	font-weight: 500;
	line-height: 25px;
	color: #464646;
	text-align: left;
	margin-left: 8%;
	margin-top: 0;
	@media (max-width: 1023px) {
		margin-bottom: 70px;
	}
`
const TotalFlex = styled(Flex)`
	height: 100vh;
	background: radial-gradient(circle at left, #9afacb 0%, #f7f7f7 20%);
	@media (max-width: 1100px) {
		flex-direction: column;
		height: 100%;
		background: radial-gradient(
			circle at top left,
			#9afacb 0%,
			#f7f7f7 20%
		);
	}
`
const FeatureFlex = styled(Flex)`
	@media (min-width: 1024px) {
		width: 80%;
	}
	@media (max-width: 1023px) {
		align-items: center;
	}
`
const ImageBox = styled(Box)`
	width: 30%;
`
const DetailBox = styled(Box)`
	@media (min-width: 1024px) {
		min-width: 30%;
		max-width: 50%;
	}
	@media (max-width: 1023px) {
		max-width: 98%;
	}
`
const FeatureBox = styled(Box)`
	@media (max-width: 1023px) {
		width: 70%;
		align-items: left;
	}
`
const GradientFlex = styled(Flex)`
	justify-content: center;
	align-items: center;
	width: 100%;
`
const CheckCircle = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	text-align: center;
	background-color: #80ebb6;
	font-size: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
`
