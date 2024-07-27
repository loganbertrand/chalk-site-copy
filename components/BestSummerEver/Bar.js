import React from "react"
import Link from "next/link"
import styled, { css, keyframes } from "styled-components"

const Bar = () => {
	return (
		<Container>
			<ChalkLogo src="/static/images/Chalk Logo White.png" />
			<Playstation src="/static/images/playstation-logo-white.png" />
			<Warzone src="/static/images/Cod-warzone-chalk-tourney.png" />
			<Xbox src="/static/images/xbox-logo-white.png" />
			<PC src="/static/images/pc-gamer-logo-chalk-tourney.png" />
		</Container>
	)
}

export default Bar

const Container = styled.div`
	width: 100%;
	height: 25vh;
	background-color: #1f1f1f;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	@media (max-width: 768px) {
		height: 18vh;
	}
`

const Warzone = styled.img`
	max-width: 203px;
	height: auto;
	@media (max-width: 768px) {
		max-width: 66px;
	}
`
const PC = styled.img`
	max-width: 76px;
	height: auto;
	@media (max-width: 768px) {
		max-width: 36px;
	}
`
const Xbox = styled.img`
	max-width: 67px;
	height: auto;
	@media (max-width: 768px) {
		max-width: 31px;
	}
`
const Playstation = styled.img`
	max-width: 87px;
	height: auto;
	@media (max-width: 768px) {
		max-width: 41px;
	}
`
const ChalkLogo = styled.img`
	max-width: 68px;
	height: auto;
	@media (max-width: 768px) {
		max-width: 33px;
	}
`
