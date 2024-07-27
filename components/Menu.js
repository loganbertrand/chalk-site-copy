import React from "react"
import Link from "next/link"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faReddit,
	faTwitch,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons"

import { slide as Menu } from "react-burger-menu"
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons"

export default class Hamburger extends React.Component {
	render() {
		var styles = {
			bmBurgerButton: {
				position: "absolute",
				width: "29px",
				height: "25px",
				right: "20px",
				marginTop: "45px",
			},
			bmBurgerBars: {
				background: "#212121",
			},
			bmBurgerBarsHover: {
				background: "#a90000",
			},
			bmCrossButton: {
				height: "40px",
				width: "40px",
			},
			bmCross: {
				background: "white",
			},
			bmMenuWrap: {
				position: "fixed",
				height: "100%",
			},
			bmMenu: {
				margin: 0,
				background: "#1C1D24",
				padding: "2.5em 1.5em 0",
				fontSize: "1.15em",
				overflow: "hidden",
			},
			bmOverlay: {
				background: "rgba(0, 0, 0, 0.5)",
			},
			bmItem: {
				display: "flex",
				justifyContent: "center",
			},
		}

		let Facebook = "https://www.facebook.com/TheChalkApp"
		let Twitter = "https://twitter.com/TheChalkApp"
		let Instagram = "https://www.instagram.com/thechalkapp/?hl=en"
		let Reddit = "https://www.reddit.com/r/thechalkapp/"
		let Twitch = "https://www.twitch.tv/chalkapp"
		let Discord = "https://discord.gg/Qp9vztp"

		return (
			<Menu styles={styles} width={"50%"} right>
				<Info>Want more info? Reach out and ask us anything!</Info>
				<Flex justifyContent="center">
					<Flex
						justifyContent="center"
						flexDirection="column"
						alignItems="flex-start"
					>
						<Box mt={10} mb={20}>
							<IconLink target="_blank" href={Discord}>
								<Icons icon={faDiscord} /> <Text>Discord</Text>
							</IconLink>
						</Box>

						<Box mt={20} mb={20}>
							<IconLink target="_blank" href={Facebook}>
								<Icons icon={faFacebook} />{" "}
								<Text>Facebook</Text>
							</IconLink>
						</Box>

						<Box mt={20} mb={20}>
							<IconLink target="_blank" href={Instagram}>
								<Icons icon={faInstagram} />{" "}
								<Text>Instagram</Text>
							</IconLink>
						</Box>

						<Box mt={20} mb={20}>
							<IconLink target="_blank" href={Twitter}>
								<Icons icon={faTwitter} /> <Text>Twitter</Text>
							</IconLink>
						</Box>

						<Box mt={20} mb={20}>
							<IconLink target="_blank" href={Reddit}>
								<Icons icon={faReddit} /> <Text>Reddit</Text>
							</IconLink>
						</Box>

						<Box mt={20} mb={20}>
							<IconLink target="_blank" href={Twitch}>
								<Icons icon={faTwitch} /> <Text>Twitch</Text>
							</IconLink>
						</Box>

						<Box mt={20} mb={20}>
							<IconLink href="/support">
								<Icons icon={faQuestionCircle} />{" "}
								<Text>Support</Text>
							</IconLink>
						</Box>
					</Flex>
				</Flex>
				<Flex justifyContent="center" alignItems="center" mt={70}>
					<Link href="/privacy-policy">
						<SmallText>Privacy Policy</SmallText>
					</Link>
					<Link href="/tos">
						<SmallText>Terms of Service</SmallText>
					</Link>
				</Flex>
			</Menu>
		)
	}
}

const IconLink = styled.a`
	cursor: pointer;
	margin-top: 30px;
	text-decoration: none;
`

const Icons = styled(FontAwesomeIcon)`
	font-size: 28px;
	cursor: pointer;
	color: #80ebb6;
	opacity: 0.8;
	text-align: left;
	display: inline;
	height: 36px;
	width: 36px;
`

const Info = styled.p`
	font-family: Montserrat;
	font-size: 26px;
	font-weight: 500;
	color: #ffffff;
	margin-bottom: 8%;
	text-align: center;
`

const Text = styled.p`
	font-family: Montserrat;
	font-size: 32px;
	font-weight: 500;
	color: #ffffff;
	display: inline;
	position: relative;
	bottom: 5px;
	left: 8px;
`
const SmallText = styled.h1`
	z-index: 99;
	color: #c9c9c9;
	font-size: 12px;
	cursor: pointer;
	padding: 20px;
`
