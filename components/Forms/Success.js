import React from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import PocketTournament from "../../public/static/svgs/CHALK_BADGE_NEW.svg"

export default class Phone extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			phoneNumber: "",
			form: false,
			errorVisible: false,
			errors: {
				phoneNumber: "",
			},
		}
	}

	render() {
		return (
			<Section className="section" change={this.state.form}>
				<TotalFlex justifyContent="center" alignItems="center">
					<Box>
						<HeadFlex justifyContent="center" alignItems="center">
							<Box mr={90}>
								<MainText>
									<Span>Welcome To</Span> <br />
									Chalk <Span>Beta!</Span>
								</MainText>
								<SubText>
									Check your email to start your account.
								</SubText>

								<DiscordButton
									type="button"
									onClick={(e) => {
										e.preventDefault()
										window.open('https://discord.gg/NyM3xk5', '_blank');
									}}
								>
									Join Discord
								</DiscordButton>
							</Box>
							<ImageBox ml={90} id="badge">
								<PocketImg />
							</ImageBox>
						</HeadFlex>
					</Box>
				</TotalFlex>
			</Section>
		)
	}
}

const Section = styled.section`
	height: 100%;
`

const TotalFlex = styled(Flex)`
	height: 100vh;
`

const HeadFlex = styled(Flex)``

const MainText = styled.h1`
	font-family: Montserrat;
	font-size: 48px;
	font-weight: bold;
	color: #80ebb6;
	@media (max-width: 1356px) {
		margin-left: 60px;
		font-size: 35px;
	}
	@media (max-width: 1341px) {
		font-size: 32px;
	}
	@media (max-width: 1233px) {
		font-size: 30px;
	}
	@media (max-width: 1182px) {
		font-size: 26px;
	}
	margin: 0;
	padding: 0;
`

const SubText = styled.h2`
	font-family: Montserrat;
	font-size: 20px;
	font-weight: 500;
	line-height: 25px;
	color: #ebebeb;
	width: 700px;
	margin-top: 25px;
	@media (max-width: 1356px) {
		margin-left: 60px;
		font-size: 15px;
	}
	@media (max-width: 1341px) {
		font-size: 14px;
	}
	@media (max-width: 1182px) {
		font-size: 11px;
	}
`

const Span = styled.span`
	color: #ffffff;
`

const DiscordButton = styled.button`
	width: 170px;
	height: 48px;
	background-color: #e5e5e5;
	color: #1c1d24;
	font-weight: semi-bold;
	font-size: 18px;
	border: none;
	border-radius: 100px;
	background-size: 150% 150%;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	font-family: Montserrat;
	margin-top: 40px;
	&:hover {
		background-color: #aeb2b5;
	}
	@media (max-width: 1356px) {
		margin-left: 60px;
	}
`

const ImageBox = styled(Box)`
	
`

const PocketImg = styled(PocketTournament)``
