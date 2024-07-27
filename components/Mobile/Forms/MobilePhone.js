import React from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import PhoneInput from "react-phone-input-2"
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createBetaUser } from "../../../graphql/mutations";
import moment from "moment";

const validPhoneNumber = RegExp(
	/([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
)

const InputStyling = {
	width: 302.46,
	color: "white",
	height: "auto",
	outline: "none",
	border: "none",
	borderBottom: "1px solid white",
	background: "transparent",
	fontSize: "30px",
	caretColor: "white",
	borderRadius: 0,
	WebkitAppearance: "none"
}
const buttonStyling = {}
export default class MobilePhone extends React.Component {
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
		this.toggleButton = this.toggleButton.bind(this)
	}

	toggleButton = (e) => {
		this.props.onPhoneChange(e)
		let errors = this.state.errors
		errors.phoneNumber = validPhoneNumber.test(e)
			? ""
			: "phoneNumber is not valid"
		this.setState({ errors })
		if (this.state.errors.phoneNumber === "") {
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
				discord: "null",
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
		if (this.state.errors.phoneNumber === "") {
			this.setState({ errorVisible: false })
			const response = await API.graphql(
				graphqlOperation(createBetaUser, { input: betaUser })
			)
			this.props.scrolling()
			this.setState({
				form: true,
			})
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
							What's your <Bold>phone number?</Bold>
						</FormQuestion>
						<form
							autoComplete="off"
							onSubmit={(e) => {
								this.submitValue()
								e.preventDefault()
							}}
						>
							<PhoneInput
								country={"us"}
								type="text"
								id="pnumber"
								placeholder="Type your answer here..."
								value={this.props.phone}
								onChange={(e) => this.toggleButton(e)}
								inputStyle={InputStyling}
								buttonStyle={buttonStyling}
							></PhoneInput>
						</form>
						<ErrorMessage visible={this.state.errorVisible}>
							Valid Phone Number Required
						</ErrorMessage>
						<ButtonContainer>
							<NextButton
								show={this.state.show}
								onClick={() => {
									this.submitValue()
								}}
							>
								Next
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
	@media (max-width: 360px) {
		font-size: 19px;
	}
`

const Bold = styled.span`
	font-weight: bold;
`

const ErrorMessage = styled.div`
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
