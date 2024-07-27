import React from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createBetaUser } from "../../../graphql/mutations"
import moment from "moment"

const validDiscord = RegExp(/^[ a-zA-Z0-9._!@$%^&*?'-]+#[0-9]{4}$/)
export default class MobileDiscord extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			discord: "",
			form: false,
			errorVisible: false,
			errors: {
				discord: "",
			},
		}
		this.toggleButton = this.toggleButton.bind(this)
	}

	toggleButton = (e) => {
		this.props.onDiscordChange(e.target.value)
		let discordValue = e.target.value
		let errors = this.state.errors
		errors.discord = validDiscord.test(discordValue)
			? ""
			: "discord is not valid"
		this.setState({ errors })
		if (this.state.errors.discord === "") {
			this.setState({
				show: true,
				errorVisible: false,
			})
		} else {
			this.setState({ show: false })
			this.setState({ errorVisible: true })
		}
	}
	submitValue = async () => {
		const data = this.props.data
		const betaUser = {
			name: {
				first: data.firstName,
				last: data.lastName,
				discord: data.discord,
			},
			favoritePlatform: {
				xbox: data.xbox,
				playstation: data.ps4,
			},
			favoriteGame: {
				apex: data.apex,
				fortnite: data.fortnite,
				rainbowsix: data.r6,
			},
			email: data.email,
			phone_number: "+" + data.phone,
			createdAt: moment(Date.now()),
		}
		if (this.state.errors.discord === "") {
			this.setState({ errorVisible: false })
			const response = await API.graphql(
				graphqlOperation(createBetaUser, { input: betaUser })
			)
			this.props.goToDiscord()
		} else {
			this.setState({ errorVisible: true })
		}
	}
	render() {
		return (
			<Section className="section">
				<FormFlex justifyContent="center" alignItems="center">
					<Box>
						<FormQuestion>
							What's your <Bold>discord name?</Bold>
						</FormQuestion>
						<FormMessage>
							*Include Number ( example: chalk#1234 ){" "}
						</FormMessage>
						<form
							autoComplete="off"
							onSubmit={(e) => {
								this.submitValue()
								e.preventDefault()
							}}
						>
							<Input
								onChange={(e) => this.toggleButton(e)}
								id="discordname"
								value={this.props.discord}
								placeholder="Ex: DiscordName#1234"
							></Input>
						</form>
						<ErrorMessage visible={this.state.errorVisible}>
							Valid Discord Name Required
						</ErrorMessage>
						<ButtonContainer>
							<NextButton
								show={this.state.show}
								onClick={() => {
									this.submitValue()
								}}
							>
								Submit
							</NextButton>
						</ButtonContainer>
					</Box>
				</FormFlex>
			</Section>
		)
	}
}

const Section = styled.section``
const FormFlex = styled(Flex)`
	padding-top: 200px;
`

const FormQuestion = styled.p`
	font-size: 24px;
  color: white;
  text-align: center;
`
const FormMessage = styled.p`
	font-size: 16px;
	color: #80ebb6;
`

const Bold = styled.span`
	font-weight: bold;
`

const Input = styled.input`
	width: 302.46px;
	color: white;
	height: auto;
	outline: none;
	border: none;
	border-bottom: 1px solid white;
	background: transparent;
	font-size: 30px;
	caret-color: white;
	&:focus {
		border: none;
	}
	&::placeholder {
		color: #898c8f;
		font-size: 20px;
	}
	-webkit-appearance: none;
	border-radius: 0;
`
const ErrorMessage = styled.div`
	width: 220px;
	text-align: center;
	padding: 8px;
	margin-top: 8px;
	visibiliy: hidden;
	opacity: 0;
	background-color: #f4747e;
	border-radius: 10px 10px 10px 10px;
	${(props) =>
		props.visible &&
		css`
			opacity: 1;
			visibility: visible;
		`};
`

const ButtonContainer = styled(Flex)`
	align-items: center;
	flex-direction: row;
`

const NextButton = styled.button`
	display: block;
	margin-top: 30px;
	border: none;
	color: black;
	background: white;
	width: 130px;
	height: 40px;
	border-radius: 30px;
	font-size: 20px;
	cursor: pointer;
	opacity: 0;
	visibiliy: hidden;
	transition: all 200ms ease-out;
	font-family: Montserrat;
	font-weight: bold;
	${(props) =>
		props.show &&
		css`
			opacity: 1;
			visibility: visible;
		`}
`
