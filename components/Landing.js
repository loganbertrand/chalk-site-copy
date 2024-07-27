import React, { useEffect } from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import Modal from "styled-react-modal"
import Image from "next/image"

import { Animated } from "react-animated-css"
import ChalkLogo from "../public/static/images/LandingBadge.svg"
import AndroidWaitlist from "../public/static/images/AndroidWaitlist.svg"
import AppStore from "../public/static/images/Download_on_the_App_Store_Badge.svg"
import ArrowDown from "../public/static/images/ArrowDown.svg"
import ModalContent from "../components/ModalContent"
import PocketTournament from "../public/static/images/PocketTourneyLogo.svg"

export default class Landing extends React.Component {
	constructor(props) {
		super(props)
	}
	state = {
		show: false,
	}
	scrollDown() {
		window.scrollTo({
			top: 800,
			behavior: "smooth",
		})
	}
	openModal() {
		this.setState({
			show: true,
		})
	}
	closeModal() {
		this.setState({
			show: false,
		})
	}

	componentDidMount = () => {
		import("react-facebook-pixel")
	}

	render() {
		return (
			<Section className="section">
				<TopLeftPhone
					src="/static/images/PhoneTLeft.png"
					alt="Pocket Tournament Mobile Screen 1"
					height="550"
					width="auto"
					style={{ position: "absolute", zIndex: 1, left: 50 }}
				/>
				<TopRightPhone
					src="/static/images/TopRightPhone.png"
					alt="Pocket Tournament Mobile Screen 2"
					height="550"
					width="auto"
					style={{ position: "absolute", zIndex: 1, right: 70 }}
				/>
				<TotalFlex
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
				>
					<Animated animationIn="fadeIn">
						<Flex
							justifyContent="center"
							alignItems="center"
							flexDirection="column"
						>
							<ChalkBadge />
							<MainText>JUST PLAY</MainText>
							<SubText>
								Daily Esports Tournaments In Your Pocket.
							</SubText>
						</Flex>
					</Animated>

					<Animated animationIn="fadeIn">
						<Flex justifyContent="space-between">
							<div
								onClick={() => {
									import("react-facebook-pixel")
										.then((x) => x.default)
										.then((ReactPixel) => {
											ReactPixel.trackCustom(
												"AppStoreButtonClick"
											)
										})

									window.open(
										"https://apps.apple.com/us/app/chalk-esports-tournaments/id1559663332",
										"_blank"
									)
								}}
								style={{
									marginRight: 20,
									cursor: "pointer",
									paddingTop: "3%",
								}}
							>
								<AppStore />
							</div>

							<div
								onClick={() => {
									import("react-facebook-pixel")
										.then((x) => x.default)
										.then((ReactPixel) => {
											ReactPixel.trackCustom(
												"GooglePlayButtonClick"
											)
										})
									window.open(
										"https://play.google.com/store/apps/details?id=co.chalkapp.chalkapp",
										"_blank"
									)
								}}
								style={{ marginLeft: 20, cursor: "pointer" }}
							>
								<Image
									src={"/static/images/google-play-badge.png"}
									width={150}
									height={58}
									alt="Download Chalk on the Google Play Store"
								/>
							</div>
						</Flex>
					</Animated>
					<BottomLeftPhone
						src="/static/images/PhoneBLeft.png"
						alt="Pocket Tournament Mobile Screen 3"
						height="550"
						width="auto"
						style={{
							position: "absolute",
							zIndex: 1,
							left: 20,
							bottom: -200,
						}}
					/>

					<ArrowButton
						onClick={() => {
							this.scrollDown()
						}}
					>
						<ArrowDown />
					</ArrowButton>

					<BottomRightPhone
						src="/static/images/PhoneBRight.png"
						alt="Pocket Tournament Mobile Screen 4"
						height="550"
						width="auto"
						style={{
							position: "absolute",
							zIndex: 1,
							right: 20,
							bottom: -200,
						}}
					/>
				</TotalFlex>
				<StyledModal
					isOpen={this.state.show}
					onBackgroundClick={() => {
						this.closeModal()
					}}
					onEscapeKeydown={() => {
						this.closeModal()
					}}
				>
					<PocketImage />
					<ModalContent
						onClose={() => {
							this.closeModal()
						}}
						returnClick={() => {
							this.closeModal()
						}}
					/>
				</StyledModal>
			</Section>
		)
	}
}

const TopLeftAnimation = keyframes`
	0% {
		transform: translatex(-160px) translatey(-160px);
	}
	100% {
		transform: translatex(0px) translatey(0px);
	}
`
const TopRightAnimation = keyframes`
	0% {
		transform: translatex(160px) translatey(-160px);
	}
	100% {
		transform: translatex(0px) translatey(0px);
	}
`
const BottomLeftAnimation = keyframes`
	0% {
		transform: translatex(-60px) translatey(60px);
	}
	100% {
		transform: translatex(0px) translatey(0px);
	}
`
const BottomRightAnimation = keyframes`
	0% {
		transform: translatex(60px) translatey(60px);
	}
	100% {
		transform: translatex(0px) translatey(0px);
	}
`

const Section = styled.section`
	height: 100%;
	background: radial-gradient(circle, #9afacb 0%, #80ebb6 100%);
	z-index: -30;
`

const TotalFlex = styled(Flex)`
	height: 100vh;
	z-index: 3;
`

const MainText = styled.h1`
	font-family: fatfrank, sans-serif;
	font-size: 104px;
	font-weight: 400;
	color: #ffffff;
	@media (max-width: 1356px) {
		font-size: 45px;
	}
	margin: 0;
	padding: 0;
	padding-top: 20px;
	text-align: center;
	text-shadow: 0px 5px 12px rgba(117, 217, 167, 0.5);
	letter-spacing: 6px;
`

const SubText = styled.h2`
	font-family: Montserrat;
	font-size: 23px;
	font-weight: 500;
	line-height: 25px;
	color: #393939;

	padding-top: 10px;
	padding-bottom: 20px;
	@media (max-width: 1356px) {
		font-size: 18px;
	}
	text-align: center;
`
const ChalkBadge = styled(ChalkLogo)`
	filter: drop-shadow(0px 10px 5px rgba(121, 121, 121, 0.35));
`
const TopLeftPhone = styled.img`
	animation-name: ${TopLeftAnimation};
	animation-duration: 4s;
	animation-iteration-count: 1;
`
const TopRightPhone = styled.img`
	animation-name: ${TopRightAnimation};
	animation-duration: 4s;
	animation-iteration-count: 1;
`
const BottomLeftPhone = styled.img`
	animation-name: ${BottomLeftAnimation};
	animation-duration: 4s;
	animation-iteration-count: 1;
`
const BottomRightPhone = styled.img`
	animation-name: ${BottomRightAnimation};
	animation-duration: 4s;
	animation-iteration-count: 1;
`
const ArrowButton = styled.button`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	text-align: center;
	border: 2px solid black;
	color: black;
	background-color: black;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: fadeIn 700ms ease-in-out 1s both;
	cursor: pointer;
	bottom: 2rem;
	position: absolute;
`
const StyledModal = Modal.styled`
	width: 980px;
	height: 652px;
	border-radius: 30px;
	background-color: #F7F7F7;
`

const PocketImage = styled(PocketTournament)`
	top: 0;
	padding-top: 40px;
	padding-left: 40px;
`
