import React from "react"
import Link from "next/link"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import { Parallax } from "react-scroll-parallax"

import Button from "./Button"

const SummerLanding = () => {
	return (
		<Wrapper>
			<Container>
				<LandingView>
					<MinorText>Download Chalk from the iOS App Store</MinorText>
					<BannerText>
						WIN A FREE PS5 <br /> XBOX SERIES X <br />
						AND $500
					</BannerText>
					<SmallText>
						Join and play the Best Summer Ever{" "}
						{window.innerWidth < 1024 ? <br /> : " "} Call of Duty
						{window.innerWidth > 1024 ? <br /> : " "}
						WARZONE tournaments.
					</SmallText>
					<Button
						onClick={() => {
							window.open("https://apple.co/3aX1WYh")
						}}
						title="Join Now"
					/>
				</LandingView>
				<ImageView>
					<Parallax
						translateY={
							window.innerWidth > 1024 ? [-25, 25] : [-5, 5]
						}
					>
						<LandingImage src="/static/images/Chalk-BSE-Winnings.png" />
					</Parallax>
				</ImageView>
			</Container>
		</Wrapper>
	)
}

export default SummerLanding

const Wrapper = styled.div`
	height: 92vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 1024px) {
		height: 100%;
		margin-bottom: 30px;
	}
`

const Container = styled.div`
	width: 80%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	@media (max-width: 1024px) {
		flex-direction: column-reverse;
	}
`
const LandingView = styled.div`
	height: auto;
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	@media (max-width: 1024px) {
		width: 100%;
		align-items: center;
	}
`
const ImageView = styled.div`
	height: auto;
	width: 65%;
	justify-content: center;
	@media (max-width: 1024px) {
		width: 100%;
		margin-top: 25%;
	}
`
const MinorText = styled.p`
	font-family: Poppins, sans-serif;
	font-size: 20px;
	font-weight: 500;
	color: #888888;
	@media (max-width: 1024px) {
		font-size: 14px;
		text-align: center;
		align-self: center;
	}
`
const BannerText = styled.h1`
	font-family: fatfrank, Montserrat;
	font-weight: 700;
	color: #0f0f0f;
	font-size: 64px;
	margin: 0;
	@media (max-width: 1024px) {
		margin: 0;
		font-size: 38px;
		text-align: center;
	}
`
const SmallText = styled.p`
	font-family: Poppins, sans-serif;
	font-size: 18px;
	color: #292626;
	margin-bottom: 15%;
	@media (max-width: 1024px) {
		font-size: 16px;
		text-align: center;
		align-self: center;
	}
`
const LandingImage = styled.img`
	width: 100%;
	height: auto;
`
