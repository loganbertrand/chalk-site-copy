import React from "react"
import { useRouter } from "next/router"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import TrophyLogo from "../public/static/svgs/bluetroph.svg"
import ExploreLogo from "../public/static/svgs/explore.svg"
import BracketLogo from "../public/static/svgs/bracket.svg"
import ChalkLogo from "../public/static/svgs/chalklogo.svg"
import MobileLayout from "../components/Mobile/MobileLayout"
import Hamburger from "../components/Mobile/MobileMenu/MobileMenu"

const MobileSuccess = () => {
	const router = useRouter()

	return (
		<MobileLayout>
			<Section className="section">
				<Hamburger />
				<FormFlex
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
				>
					<MobileLogo onClick={() => router.push("/")} />

					<MainText>Welcome to <br /> <ChalkGreen>Chalk</ChalkGreen> beta!</MainText>
					<MessageText>
						{" "}
						Thank you for signing up for the Chalk Beta. Check your
						email or click the button below to get started!
					</MessageText>
					<Flex justifyContent="center">
						<a
							style={{ textDecoration: "none" }}
							target="_blank"
							href="https://testflight.apple.com/join/8xHq4zg2"
						>
							<NextButton>Download Beta</NextButton>
						</a>
					</Flex>
					<Flex justifyContent="center">
						<IconLink
							target="_blank"
							href="https://discord.gg/Qp9vztp"
						>
							<Icon /> Join the Discord Community!
						</IconLink>
					</Flex>
				</FormFlex>
			</Section>
		</MobileLayout>
	)
}

export default MobileSuccess

const Section = styled.section``
const FormFlex = styled(Flex)`
	height: 100vh;
`

const MessageText = styled.p`
	text-align: center;
	font-weight: 500;
	font-size: 20px;
	line-height: 25px;
	color: #ffffff;
	@media (max-width: 360px) {
		font-size: 16px;
		width: 270px;
		line-height: 20px;
	}
	@media (max-width: 303px) {
		font-size: 14px;
		width: 250px;
	}
`

const Icon = styled(FontAwesomeIcon)`
	color: #7289da;
	font-size: 20px;
	height: 20px;
	width: 20px;
`

const IconLink = styled.a`
	cursor: pointer;
	color: #7289da;
	font-size: 16px;
	text-decoration: none;
	align-items: flex-end;
	justify-content: center;
	margi-top: 5px;
	margin-left: 3px;
	&:hover {
		text-decoration: underline;
	}
`

const MainText = styled.h1`
	text-align: center;
	font-size: 40px;
	font-weight: bold;
	color: #ffffff;
	@media (max-width: 1410px) {
		font-size: 90px;
	}
	@media (max-width: 1330px) {
		font-size: 85px;
	}
	@media (max-width: 1250px) {
		font-size: 80px;
	}
	@media (max-width: 1214px) {
		font-size: 70px;
	}
	@media (max-width: 1139px) {
		font-size: 60px;
	}
	@media (max-width: 1024px) {
		font-size: 48px;
	}
	margin: 0;
	padding: 0;
`
const ChalkGreen = styled.span`
	color: #80ebb6;
`

const NextButton = styled.button`
	display: block;
	margin-top: 30px;
	border: none;
	color: black;
	background: white;
	width: 160px;
	height: 46px;
	border-radius: 100px;
	font-size: 16px;
	transition: all 0.2s ease-in-out;
	font-family: Montserrat;
	font-weight: sem-bold;
	outline: none;
	margin-bottom: 30%;
`

// icons

const float = keyframes`
	0% {
        transform: translatey(0px);
	}
	50% {
        transform: translatey(-5px);
	}
	100% {
        transform: translatey(0px);
	}
`

const altfloat = keyframes`
	0% {
        transform: translatey(0px);
	}
	50% {
        transform: translatey(5px);
	}
	100% {
        transform: translatey(0px);
	}
`

const MobileLogo = styled(ChalkLogo)`
	position: fixed;
	top: 0;
	z-index: 10;
	margin-top: 40px;
	height: 36px;
	width: 36px;
`
