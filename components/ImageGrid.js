import React, { useEffect, useState } from "react"
import styled, { css, keyframes } from "styled-components"
import ChalkLogo from "../public/static/images/ChalkLogoLarge.svg"
import ChalkLogoSmall from "../public/static/images/ChalkMedium.svg"

const ImageGrid = () => {
	const [height, setHeight] = useState(0)
	const [width, setWidth] = useState(1025)
	const [loaded, setLoaded] = useState(false)

	const updateDimensions = () => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}

	useEffect(() => {
		window.addEventListener("resize", updateDimensions())

		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
		setLoaded(true)

		return () => {
			window.removeEventListener("resize", updateDimensions())
		}
	}, [])

	return (
		<ImageGridDiv>
			<BalanceCardDiv>
				<BalanceCard
					src="/static/images/MyBalance@2x.png"
					alt="Pocket Tournament Mobile Screen 4"
				/>
			</BalanceCardDiv>
			<MainPhoneDiv>
				<MainPhone
					src="/static/images/Features.png"
					alt="Pocket Tournament Mobile Screen 4"
				/>
			</MainPhoneDiv>
			<LeaderboardDiv>
				<Leaderboard
					src="/static/images/Leaderboard@2x.png"
					alt="Pocket Tournament Mobile Screen 4"
				/>
			</LeaderboardDiv>
			<EndCardDiv>
				<EndCard
					src="/static/images/Features_EoTC.png"
					alt="Pocket Tournament Mobile Screen 4"
				/>
			</EndCardDiv>
			<ChalkLogoLargeDiv>
				{width >= 768 && loaded && <ChalkLogoLarge />}
				{width < 768 && loaded && <ChalkLogoMedium />}
			</ChalkLogoLargeDiv>
		</ImageGridDiv>
	)
}
export default ImageGrid

const floatAnimationUp = keyframes`
	0% {
		
		transform: translatey(0px);
	}
	50% {
		
		transform: translatey(10px);
	}
	100% {
		
		transform: translatey(0px);
	}
`
const floatAnimationDown = keyframes`
	0% {
		
		transform: translatey(0px);
	}
	50% {
		
		transform: translatey(-10px);
	}
	100% {
		
		transform: translatey(0px);
	}
`

const MainPhone = styled.img`
	z-index: 2;
	height: 397px;
	width: auto;
	@media (max-width: 767px) {
		height: 238px;
	}
`
const MainPhoneDiv = styled.div`
	grid-column: 3 / span 4;
	grid-row: 1 / span 4;
	animation-name: ${floatAnimationUp};
	animation-duration: 6s;
	animation-iteration-count: infinite;
`
const BalanceCard = styled.img`
	z-index: 2;
	height: 89px;
	width: auto;
	@media (max-width: 767px) {
		height: 53px;
	}
	filter: drop-shadow(0px 10px 5px rgba(121, 121, 121, 0.35));
`
const BalanceCardDiv = styled.div`
	grid-column: 1 / span 2;
	grid-row: 1 / span 2;
	animation-name: ${floatAnimationDown};
	animation-duration: 6s;
	animation-iteration-count: infinite;
`
const Leaderboard = styled.img`
	z-index: 2;
	height: 217px;
	width: auto;
	@media (max-width: 767px) {
		height: 130px;
	}
	filter: drop-shadow(0px 10px 5px rgba(121, 121, 121, 0.35));
`
const LeaderboardDiv = styled.div`
	grid-column: 9 / span 6;
	grid-row: 3 / span 2;
	animation-name: ${floatAnimationDown};
	animation-duration: 6s;
	animation-iteration-count: infinite;
`
const EndCard = styled.img`
	z-index: 5;
	height: 216px;
	width: auto;
	@media (max-width: 767px) {
		height: 129px;
	}
	filter: drop-shadow(0px 10px 5px rgba(121, 121, 121, 0.35));
`
const EndCardDiv = styled.div`
	grid-column: 2 / span 3;
	grid-row: 4 / span 4;
	animation-name: ${floatAnimationDown};
	animation-duration: 6s;
	animation-iteration-count: infinite;
`
const ChalkLogoLarge = styled(ChalkLogo)`
	filter: drop-shadow(0px 10px 5px rgba(121, 121, 121, 0.35));
`
const ChalkLogoMedium = styled(ChalkLogoSmall)`
	filter: drop-shadow(0px 10px 5px rgba(121, 121, 121, 0.35));
`
const ChalkLogoLargeDiv = styled.div`
	grid-column: 9 / span 2;
	grid-row: 5 / span 5;
	animation-name: ${floatAnimationUp};
	animation-duration: 6s;
	animation-iteration-count: infinite;
	@media (max-width: 767px) {
		margin-bottom: 50px;
	}
`
const ImageGridDiv = styled.div`
	padding: 10%;
	@media (max-width: 767px) {
		padding: 0;
	}
	background: radial-gradient(circle, #9afacb 0%, #f7f7f7 70%);
	display: grid;
`
