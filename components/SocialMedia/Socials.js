import React from "react"
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

export default class Socials extends React.Component {
	render() {
		let Facebook = "https://www.facebook.com/TheChalkApp"
		let Twitter = "https://twitter.com/TheChalkApp"
		let Instagram = "https://www.instagram.com/thechalkapp/?hl=en"
		let Reddit = "https://www.reddit.com/r/thechalkapp/"
		let Twitch = "https://www.twitch.tv/chalkapp"
		let Discord = "https://discord.gg/NyM3xk5"

		return (
			<Container>
				<Flex>
					<IconLink target="_blank" href={Discord}>
						<Icons icon={faDiscord} />
					</IconLink>
					<IconLink target="_blank" href={Facebook}>
						<Icons icon={faFacebook} />
					</IconLink>
					<IconLink target="_blank" href={Instagram}>
						<Icons icon={faInstagram} />
					</IconLink>
					<IconLink target="_blank" href={Twitter}>
						<Icons icon={faTwitter} />
					</IconLink>
					<IconLink target="_blank" href={Reddit}>
						<Icons icon={faReddit} />
					</IconLink>
					<IconLink target="_blank" href={Twitch}>
						<Icons icon={faTwitch} />
					</IconLink>
				</Flex>
			</Container>
		)
	}
}

const Container = styled.div`
	
	top: 0;
	z-index: 99;
	padding-top: 32px;
`
const IconLink = styled.a`
	cursor: pointer;
`

const Icons = styled(FontAwesomeIcon)`
	font-size: 28px;
	cursor: pointer;
	color: white;
	margin-right: 10px;
	margin-left: 10px;
	&:hover {
		color: #80ebb6;
		opacity: 1;
	}
`

