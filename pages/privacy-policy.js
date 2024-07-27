import React from "react"
import Link from "next/link"

import Layout from "../components/Layout"
import MobileLayout from "../components/Mobile/MobileLayout"
import ChalkLogo from "../public/static/images/ChalkLogoOutlined.svg"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import Socials from "../components/SocialMedia/Socials"
import Hamburger from "../components/Mobile/MobileMenu/MobileMenu"
import Menu from "../components/Menu"
import PrivacyPolicy from "../components/PrivacyPolicy"
import dynamic from "next/dynamic"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class Tos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false,
			width: 1025,
			height: 0,
			numPages: null,
			pageNumber: 1,
			buttonIsVisible: false,
		}
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
		var scrollComponent = this
		document.addEventListener("scroll", function (e) {
			scrollComponent.toggleVisibility()
		})
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions)
	}
	toggleVisibility() {
		if (window.pageYOffset > 300) {
			this.setState({
				buttonIsVisible: true,
			})
		} else {
			this.setState({
				buttonIsVisible: false,
			})
		}
	}
	scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}
	render() {
		const { width, loaded } = this.state
		return (
			<>
				{width >= 1024 && loaded && (
					<Layout>
						<Flex ml={40} justifyContent="left">
							<Link href="/">
								<Logo />
							</Link>
						</Flex>
						<Menu />

						<Flex
							style={{
								marginTop: "2%",
								backgroundColor: "white",
							}}
							flexDirection="column"
							alignItems="center"
						>
							<Flex
								justifyContent="flex-start"
								width="75%"
								style={{ paddingTop: "20px" }}
							>
								<Flex alignItems="center" width="50%">
									<Text
										style={{
											fontWeight: 600,
											marginRight: 20,
										}}
									>
										Legal
									</Text>
									<Link href="/privacy-policy">
										<Div>
											<Text
												style={{
													color: "white",
													cursor: "pointer",
												}}
											>
												Privacy Policy
											</Text>
										</Div>
									</Link>
									<Link href="/tos">
										<Text
											style={{
												cursor: "pointer",
												marginLeft: 20,
											}}
										>
											Terms of Service
										</Text>
									</Link>
									<Link href="/support">
										<Text
											style={{
												cursor: "pointer",
												marginLeft: 20,
											}}
										>
											FAQ
										</Text>
									</Link>
								</Flex>
							</Flex>
							<Flex
								justifyContent="flex-start"
								width="75%"
								style={{ paddingTop: "40px" }}
							>
								<Box>
									<MainTitle>Privacy Policy</MainTitle>
								</Box>
							</Flex>
							<Flex
								justifyContent="center"
								flexDirection="column"
								width="75%"
							>
								<PrivacyPolicy />
							</Flex>
						</Flex>
						{this.state.buttonIsVisible && (
							<ScrollButton
								onClick={() => {
									this.scrollToTop()
								}}
							>
								<Icons icon={faArrowUp} />
							</ScrollButton>
						)}
					</Layout>
				)}
				{width < 1024 && (
					<MobileLayout>
						<Flex backgroundColor="#FFFFFF">
							<Hamburger />
							<Box marginLeft="5%">
								<Link href="/">
									<MobileLogo />
								</Link>
							</Box>
						</Flex>

						<Flex
							style={{
								marginTop: "10%",
								backgroundColor: "white",
							}}
							flexDirection="column"
							alignItems="center"
						>
							<Flex
								flexDirection="column"
								justifyContent="flex-start"
								width="96%"
								style={{
									paddingTop: "40px",
									paddingBottom: "40px",
								}}
							>
								<Box>
									<MainTitle>Privacy Policy</MainTitle>
								</Box>
								<Box marginTop="3%">
									<Text>Last Updated 02/04/2021</Text>
								</Box>
							</Flex>
							<Flex
								flexDirection="column"
								alignItems="center"
								width="94%"
							>
								<PrivacyPolicy />
							</Flex>
						</Flex>
					</MobileLayout>
				)}
			</>
		)
	}
}

const Logo = styled(ChalkLogo)`
	position: fixed;
	top: 0;
	z-index: 99;
	padding-top: 32px;
	cursor: pointer;
`
const MobileLogo = styled(ChalkLogo)`
	top: 0;
	z-index: 10;
	margin-top: 40px;
	height: 40px;
	width: 40px;
`
const Div = styled.div`
	background-color: #707070;
	padding: 6px;
	border-radius: 5px;
`
const Text = styled.text``
const MainTitle = styled.text`
	font-size: 32px;
	font-weight: 800;
`
const ScrollButton = styled.button`
	width: 44px;
	height: 44px;
	border-radius: 50%;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	text-align: center;
	border: 2px solid black;
	color: black;
	background-color: black;
	font-size: 16px;
	text-transform: uppercase;
	font-weight: 700;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 3rem;
	right: 3rem;
	animation: fadeIn 700ms ease-in-out 1s both;
	cursor: pointer;
`
const Icons = styled(FontAwesomeIcon)`
	font-size: 28px;
	cursor: pointer;
	color: white;
	text-align: center;
	display: inline;
	height: 25px;
	width: 25px;
`
