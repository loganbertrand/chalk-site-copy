import React from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"

// components
import BackButton from "../Button/BackButton"

const validName = RegExp(/^[a-zA-Z]{1,30}$/)
export default class Form2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			lastName: "",
			errorVisible: false,
			errors: {
				lastName: "",
			},
		}
		this.toggleButton = this.toggleButton.bind(this)
	}

	toggleButton = (e) => {
		this.props.onLastNameChange(e.target.value)
		let lastNameInput = e.target.value
		let errors = this.state.errors
		errors.lastName = validName.test(lastNameInput)
			? ""
			: "Name is not valid"
		this.setState({ errors })
		if (this.state.errors.lastName === "") {
			this.setState({
				show: true,
				errorVisible: false,
			})
		} else {
			this.setState({ show: false })
			this.setState({ errorVisible: true })
		}
	}
	submitValue = () => {
		if (this.state.errors.lastName === "") {
			this.setState({ errorVisible: false })
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
				<Flex mx={-2} justifyContent="center">
					<FormFlex
						justifyContent="space-between"
						alignItems="center"
					>
						<Box mr={70}>
							<FormQuestion>
								<ChalkBlue>2/4</ChalkBlue>: What's your{" "}
								<Bold>last name?</Bold>
							</FormQuestion>
							<Form
								autoComplete="off"
								onSubmit={(e) => {
									e.preventDefault()
								}}
							>
								<Input
									type="text"
									onChange={(e) => this.toggleButton(e)}
									id="lname"
									value={this.props.lastName}
									placeholder="Type your answer here..."
								></Input>
							</Form>

							<ErrorMessage visible={this.state.errorVisible}>
								Valid Last Name Required
							</ErrorMessage>
							<ButtonContainer>
								<BackButton
									onClick={() => {
										this.props.goBack()
									}}
								/>
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
						<Box ml={70}>
							<RealText>
								REAL <br /> GAMES
							</RealText>
						</Box>
						<Box ml={50}>
							<RealText>
								REAL <br /> MONEY
							</RealText>
						</Box>
					</FormFlex>
				</Flex>
			</Section>
		)
	}
}

const Section = styled.section``

const FormFlex = styled(Flex)`
	height: 100vh;
`

const FormQuestion = styled.p`
	font-size: 24px;
	color: white;
`

const Bold = styled.span`
	font-weight: bold;
`

const ChalkBlue = styled.span`
	color: #0898fa;
	letter-spacing: 4px;
`

const Form = styled.form``

const Input = styled.input`
	width: 400px;
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
	}
`
const ErrorMessage = styled.div`
	width: 220px;
	text-align: center;
	padding: 8px;
	margin-top: 8px;
	visibiliy: hidden;
	opacity: 0;
	background-color: #ff8c7a;
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
	width: 146px;
	height: 46px;
	border-radius: 30px;
	font-size: 20px;
	opacity: 0;
	visibiliy: hidden;
	transition: all 200ms ease-out;
	font-family: Montserrat;
	font-weight: bold;
	outline: none;
	${(props) =>
		props.show &&
		css`
			opacity: 1;
			visibility: visible;
			cursor: pointer;
		`};
	&:hover {
		background: #aeb2b5;
		transform: scale(1.1);
	}
`

const RealText = styled.p`
	color: #f7f7f7;
	margin-top: 0px;
	font-size: 56px;
	font-weight: bold;
`
