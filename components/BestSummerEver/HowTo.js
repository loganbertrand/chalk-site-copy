import React from "react"
import Link from "next/link"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import { Parallax } from "react-scroll-parallax"

import Button from "./Button"
import CheckmarkGreen from "../../public/static/images/checkmark-green.svg"
import AppStore from "../../public/static/svgs/DownloadAppStore.svg"

const SummerLanding = () => {
	const buttonClick = () => {
		console.log("button clicked")
	}

	return (
		<Container>
			<InfoView>
				<Title>
					How to <br /> participate.
				</Title>
				<SmallText>
					Download our iOS app and <br /> experience Esports your way.{" "}
					<br />
					No skills required.
				</SmallText>
				<Checklist>
					<CheckView>
						<Check src="/static/images/checkmark.png" />
						<ListText>Create your free account.</ListText>
					</CheckView>
					<CheckView>
						<Check src="/static/images/checkmark.png" />
						<ListText>
							Link your gamertag. This is how <br />
							we track scores.
						</ListText>
					</CheckView>
					<CheckView style={{ paddingBottom: "35px" }}>
						<Check src="/static/images/checkmark.png" />
						<ListText>
							Explore and enter as many daily
							<br />
							tournaments as you want.
						</ListText>
					</CheckView>
					<AppStoreView
						onClick={() => {
							window.open("https://apple.co/3aX1WYh")
						}}
					>
						<AppStore />
					</AppStoreView>
				</Checklist>
			</InfoView>
			<ImageView>
				<Parallax translateY={[20, -20]}>
					<LandingImage src="/static/images/HowToRes.png" />
				</Parallax>
			</ImageView>
		</Container>
	)
}

export default SummerLanding

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	@media (max-width: 1024px) {
		height: 100%;
		flex-direction: column-reverse;
		justify-content: center;
	}
`
const InfoView = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const ImageView = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40%;
	@media (max-width: 1024px) {
		margin-top: 10%;
		width: 100%;
	}
`
const Title = styled.h1`
	font-family: Poppins, Montserrat;
	color: #0f0f0f;
	font-size: 48px;
	font-weight: 900;
	align-self: flex-start;
	margin-bottom: 0;
`
const SmallText = styled.p`
	font-family: Poppins, sans-serif;
	font-size: 22px;
	color: #4b4b4b;
	align-self: flex-start;
`
const LandingImage = styled.img`
	width: 100%;
	height: auto;
`
const CheckView = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`
const Checklist = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	@media (max-width: 1024px) {
		margin-bottom: 15%;
	}
`
const Check = styled(CheckmarkGreen)`
	max-width: 35px;
	height: 100%;
`
const ListText = styled.p`
	font-family: Poppins, sans-serif;
	color: #4b4b4b;
	font-size: 18px;
	padding-left: 27px;
	margin-top: 3%;
	margin-bottom: 3%;
`
const AppStoreView = styled.div`
	cursor: pointer;
	@media (max-width: 1024px) {
		align-self: center;
	}
`
