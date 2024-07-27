import React from "react"
import Link from "next/link"
import Head from "next/head"

import Menu from "../components/Menu"
import Layout from "../components/Layout"
import Landing from "../components/Landing"
import Tournaments from "../components/BestSummerEver/HowTo"
import AppDetails from "../components/AppDetails"
import Footer from "../components/Footer"
import ChalkLogo from "../public/static/images/ChalkLogoOutlined.svg"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import MobileLayout from "../components/Mobile/MobileLayout"
import MobileLanding from "./MobileLanding"
import Hamburger from "../components/Mobile/MobileMenu/MobileMenu"
export default class index extends React.Component {
	handleClick = (props) => {
		props.setAllowScrolling(true, "down")
		props.moveSectionDown()
		document.body.classList.add("form")
		props.setAllowScrolling(false, "down")
	}
	handleBack = (props) => {
		props.setAllowScrolling(true, "up")
		props.moveSectionUp()
		props.setAllowScrolling(false, "up")
	}
	constructor(props) {
		super(props)
		this.state = {
			loaded: false,
			width: 1025,
			height: 0,
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
		import("react-facebook-pixel")
			.then((x) => x.default)
			.then((ReactPixel) => {
				ReactPixel.init("466935704302589")
				ReactPixel.pageView()
			})
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions)
	}
	showSettings(event) {
		event.preventDefault()
	}

	render() {
		const { width, loaded } = this.state

		return (
			<>
				{/* For Facebook Domain Verification */}
				<Head>
					<meta
						name="viewport"
						content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi"
					/>
					<meta property="og:type" content="website" />
					<meta
						name="description"
						content="Chalk gaming tournaments can be played by anyone, at any time, from anywhere. We'll keep score so you can make your way to the top of the leaderboard and earn free tournament entires or cash prizes without having to leave the game."
					/>
					<meta
						property="og:title"
						content="Video Game Tournaments | Cash Prizes"
					/>
					<meta
						content="%PUBLIC_URL%/Chalk-FB-OG_Image.jpg"
						property="og:image"
					/>
					<meta
						property="og:site_name"
						content="Video Game Tournaments | Cash Prizes"
					/>
					<meta
						property="og:description"
						content="Chalk gaming tournaments can be played by anyone, at any time, from anywhere. We'll keep score so you can make your way to the top of the leaderboard and earn free tournament entires or cash prizes without having to leave the game."
					/>

					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" />
					<meta
						name="facebook-domain-verification"
						content="yn06oyghbp0et88scc1t1kwjyoori9"
					/>
					<meta
						property="al:ios:url"
						content="chalkapp.page.link://fb_test"
					/>
					<meta property="al:ios:app_store_id" content="1559663332" />
					<meta
						property="al:ios:app_name"
						content="Chalk Esports Tournaments"
					/>
				</Head>

				{width >= 1024 && loaded && (
					<Layout>
						<Flex ml={40} justifyContent="left">
							<Logo onClick={() => window.location.reload()} />
						</Flex>
						<Menu />
						<Landing />
						<Tournaments />
						<AppDetails />
						<Footer />
					</Layout>
				)}
				{width < 1024 && loaded && (
					<MobileLayout>
						<Hamburger />
						<MobileLanding />
						<Tournaments />
						<AppDetails />
						<Footer />
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
