//Breakpoints (480px, 768px, 1024px, and 1280px)
import React from "react"
import Link from "next/link"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"

import Menu from "../components/Menu"
import Layout from "../components/Layout"
import MobileLayout from "../components/Mobile/MobileLayout"
import Hamburger from "../components/Mobile/MobileMenu/MobileMenu"
import Footer from "../components/Footer"
import ChalkLogo from "../public/static/images/ChalkLogoOutlined.svg"

import Landing from "../components/BestSummerEver/Landing"
import Bar from "../components/BestSummerEver/Bar"
import HowTo from "../components/BestSummerEver/HowTo"
import PlayYourWay from "../components/BestSummerEver/PlayYourWay"
import FAQ from "../components/BestSummerEver/FAQ"

export default class BestSummerEver extends React.Component {
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
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions)
	}
	render() {
		const { width, loaded } = this.state
		return (
			<>
				{width >= 1024 && loaded && (
					<Layout>
						<Header>
							<Flex ml={40} justifyContent="left">
								<Link href="/">
									<Logo />
								</Link>
							</Flex>
							<Menu />
						</Header>
						<Landing />
						<Bar />
						<PlayYourWay />
						<HowTo />
						<FAQ />
						<Footer />
					</Layout>
				)}
				{width < 1024 && loaded && (
					<MobileLayout>
						<Hamburger />
						<Landing />
						<Bar />
						<PlayYourWay />
						<HowTo />
						<FAQ />
						<Footer />
					</MobileLayout>
				)}
			</>
		)
	}
}

const Logo = styled(ChalkLogo)`
	top: 0;
	z-index: 99;
	margin-top: 45px;
	cursor: pointer;
`
const Header = styled.div`
	display: flex;
	flex-direction: row;
`
