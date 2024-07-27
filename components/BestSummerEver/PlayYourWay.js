import React from "react"
import Link from "next/link"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"

const PlayYourWay = () => {
	return (
		<Container>
			<TitleGrid>
				<MinorText>Chalk Best Summer Ever</MinorText>
				<Title>
					Play your way, and win
					{window.innerWidth > 1024 ? <br /> : " "}
					cool stuff.
				</Title>
			</TitleGrid>

			<Grid>
				<MoneyGrid>
					<Money src="/static/images/Small500sticker.png" />
					<Subtitle>Win $500</Subtitle>
					<Description>
						First Place will take home $500 to spend however you
						want!
					</Description>
				</MoneyGrid>
				<PlaystationGrid>
					<Playstation src="/static/images/PSlogoSticker.png" />
					<Subtitle>Sony Playstation 5</Subtitle>
					<Description>
						If you're team PS5 you can claim a brand new console!
					</Description>
				</PlaystationGrid>
				<XboxGrid>
					<Xbox src="/static/images/XBoxlogoSticker.png" />
					<Subtitle>Microsoft Xbox Series X</Subtitle>
					<Description>
						If Xbox is your go-to, don't trip, you could win a brand
						new Series X.
					</Description>
				</XboxGrid>
			</Grid>
		</Container>
	)
}
export default PlayYourWay

const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	background-color: #f8f8f8;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const TitleGrid = styled.div`
	background-color: #f8f8f8;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 3.5%;
	padding-bottom: 7%;
`
const MinorText = styled.h3`
	font-family: Poppins, sans-serif;
	font-weight: 600;
	font-size: 24px;
	color: #888888;
	margin-bottom: 0;
`
const Title = styled.p`
	color: #141416;
	font-family: Poppins, sans-serif;
	font-size: 48px;
	font-weight: 700;
	text-align: center;
	margin: 0;
	@media (max-width: 1024px) {
		font-size: 30px;
	}
`
const Grid = styled.div`
	height: auto;
	width: 80%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
	}
`
const MoneyGrid = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const PlaystationGrid = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-left: 1px solid black;
	border-right: 1px solid black;
	@media (max-width: 1024px) {
		border-left: none;
		border-right: none;
		border-top: 1px solid black;
		border-bottom: 1px solid black;
		padding-top: 5%;
		padding-bottom: 5%;
	}
`
const XboxGrid = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Playstation = styled.img`
	max-width: 114px;
	height: auto;
`
const Xbox = styled.img`
	max-width: 114px;
	height: auto;
`
const Money = styled.img`
	max-width: 300px;
	height: auto;
`
const Subtitle = styled.p`
	font-family: Poppins, sans-serif;
	font-weight: 600;
	font-size: 24px;
	color: #222222;
	margin-bottom: 1%;
`
const Description = styled.p`
	font-family: Poppins, sans-serif;
	font-weight: 500;
	font-size: 18px;
	color: #777474;
	max-width: 321px;
	text-align: center;
`
