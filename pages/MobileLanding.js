import React from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"
import { Animated } from "react-animated-css"
import Link from "next/link"
import Modal from "styled-react-modal"
import Image from "next/image"

import AndroidWaitlist from "../public/static/images/AndroidWaitlist.svg"
import ChalkMobileLogo from "../public/static/images/ChalkLogoOutlined.svg"
import AppStore from "../public/static/images/Download_on_the_App_Store_Badge.svg"
import ArrowDown from "../public/static/images/ArrowDown.svg"
import ModalContent from "../components/ModalContent"
import PocketTournament from "../public/static/images/PocketTourneyLogo.svg"
import ChalkLogo from "../public/static/images/LandingBadge.svg"

export default class Landing extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false,
			width: 1025,
			height: 0,
		}
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
	scrollDown() {
		window.scrollTo({
			top: 800,
			behavior: "smooth",
		})
	}
	updateDimensions = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight })
	}
	componentDidMount = () => {
		window.addEventListener("resize", this.updateDimensions)
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight,
			loaded: true,
		})
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions)
	}

	render() {
		const { width, loaded } = this.state
		return (
			<>
				<Flex
					ml={30}
					justifyContent="left"
					style={{ position: "absolute" }}
				>
					<MobileLogo onClick={() => window.location.reload()} />
				</Flex>
				{width >= 768 && loaded && (
					<Section className="section" id="page-wrap">
						<img
							src="/static/images/PhoneTLeft.png"
							alt="Pocket Tournament Mobile Screen 1"
							height="370"
							width="auto"
							style={{
								position: "absolute",
								zIndex: 1,
								left: -20,
								top: 70,
							}}
						/>
						<img
							src="/static/images/PhoneTRight.png"
							alt="Pocket Tournament Mobile Screen 2"
							height="370"
							width="auto"
							style={{
								position: "absolute",
								zIndex: 1,
								right: 10,
								top: 70,
							}}
						/>
						<TotalFlex
							justifyContent="center"
							alignItems="center"
							flexDirection="column"
						>
							<TextFlex>
								<ChalkBadge />
								<TextBox>
									<MainText>JUST PLAY</MainText>
									<SubText>
										Daily Esports Tournaments In Your
										Pocket.
									</SubText>
								</TextBox>
							</TextFlex>
							<Animated animationIn="fadeIn">
								<Flex justifyContent="space-between">
									<div
										onClick={() => {
											window.open(
												"https://apps.apple.com/us/app/chalk-esports-tournaments/id1559663332",
												"_blank"
											)
										}}
										style={{
											marginRight: 15,
											cursor: "pointer",
											paddingTop: "3.6%",
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
										style={{
											marginLeft: 15,
											cursor: "pointer",
										}}
									>
										<Image
											src={
												"/static/images/google-play-badge.png"
											}
											width={135}
											height={58}
											alt="Download Chalk on the Google Play Store"
										/>
									</div>
								</Flex>
							</Animated>
							<img
								src="/static/images/PhoneBLeft.png"
								alt="Pocket Tournament Mobile Screen 1"
								height="370"
								width="auto"
								style={{
									position: "absolute",
									zIndex: 1,
									left: -80,
									bottom: 100,
								}}
							/>
							<ArrowButton
								onClick={() => {
									this.scrollDown()
								}}
							>
								<ArrowDown />
							</ArrowButton>
							<img
								src="/static/images/PhoneBRight.png"
								alt="Pocket Tournament Mobile Screen 2"
								height="370"
								width="auto"
								style={{
									position: "absolute",
									zIndex: 1,
									right: -40,
									bottom: 100,
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
							/>
						</StyledModal>
					</Section>
				)}

				{width < 768 && loaded && (
					<Section className="section" id="page-wrap">
						<TotalFlex
							justifyContent="center"
							alignItems="center"
							flexDirection="column"
						>
							<TextFlex>
								<ChalkBadge />
								<TextBox>
									<MainText>JUST PLAY</MainText>
									<SubText>
										Daily Esports Tournaments In Your
										Pocket.
									</SubText>
								</TextBox>
							</TextFlex>
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
											marginRight: 15,
											cursor: "pointer",
											paddingTop: "3.5%",
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
										style={{
											marginLeft: 15,
											cursor: "pointer",
										}}
									>
										<Image
											src={
												"/static/images/google-play-badge.png"
											}
											width={135}
											height={59}
											alt="Download Chalk on the Google Play Store"
										/>
									</div>
								</Flex>
							</Animated>
						</TotalFlex>
					</Section>
				)}
			</>
		)
	}
}

const Section = styled.section`
	background: radial-gradient(circle, #9afacb 0%, #80ebb6 100%);
	height: 100vh;
	width: 100%;
`
const MobileLogo = styled(ChalkMobileLogo)`
	top: 0;
	z-index: 10;
	margin-top: 40px;
	height: 40px;
	width: 40px;
`

const TotalFlex = styled(Flex)`
	height: 100%;
	@media (max-height: 667px) {
		height: 97%;
	}
	@media (max-height: 640px) {
		padding-top: 12px;
	}
	@media (max-width: 572px) {
		padding-top: 9px;
	}
`

const TextFlex = styled(Flex)`
	z-index: 1;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const ButtonFlex = styled(Flex)`
	z-index: 1;
`

const TextBox = styled(Box)`
	text-align: center;
	justify-content: center;
	align-items: center;
	@media (max-width: 767px) {
		width: 80%;
	}
	width: 50%;
`

const MainText = styled.h1`
	font-family: fatfrank, Montserrat;
	text-align: center;
	font-size: 88px;
	font-weight: bold;
	color: #ffffff;
	margin: 0;
	padding: 0;
	text-shadow: 0px 5px 12px rgba(117, 217, 167, 0.5);
`

const SubText = styled.h2`
	text-align: center;
	font-weight: 500;
	font-size: 16px;
	line-height: 25px;
	font-family: Montserrat;
	color: #393939;
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
	@media (max-width: 767px) {
		height: 100%;
		width: 100%;
		border-radius: 0px;
	}
`
const PocketImage = styled(PocketTournament)`
	top: 0;
	padding-top: 20px;
	padding-left: 0px;
	@media (max-width: 767px) {
		text-align: center;
		font-size: 31px;
	}
`
const ChalkBadge = styled(ChalkLogo)`
	filter: drop-shadow(0px 10px 5px rgba(121, 121, 121, 0.35));
`
