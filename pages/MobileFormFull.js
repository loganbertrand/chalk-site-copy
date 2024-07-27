import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import PhoneInput from "react-phone-input-2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import MobileLayout from "../components/Mobile/MobileLayout";
import ChalkLogo from "../public/static/svgs/chalklogo.svg";

const validName = RegExp(/^[a-zA-Z]{1,30}$/)
const validEmail = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
const validPhoneNumber = RegExp(
	/([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
)

const FormFull = (props) => {
	const router = useRouter()
	const [form, setForm] = useState(false)
	const [formError, setFormError] = useState(false)

	const [fnError, setFNError] = useState(false)
	const [lnError, setLNError] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [phoneError, setPhoneError] = useState(false)

	const [fnValid, setFNValid] = useState(false)
	const [lnValid, setLNValid] = useState(false)
	const [emailValid, setEmailValid] = useState(false)
	const [phoneValid, setPhoneValid] = useState(false)
	const [checkValid, setCheckValid] = useState(false)

	const [fName, setFName] = useState("")
	const [lName, setLName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")

	const InputStyling = {
		width: 302.46,
		color: "white",
		height: "auto",
		outline: "none",
		border: "none",
		borderBottom: "none",
		background: "transparent",
		fontSize: "20px",
		caretColor: "white",
		borderRadius: 0,
		WebkitAppearance: "none",
	}
	const buttonStyling = {
		backgroundColor: "transparent",
		border: "none",
	}
	const dropDownStyling = {
		borderRadius: 4,
	}
	const searchStyling = {
		color: "green",
	}
	const testPhone = (e) => {
		setPhone(e)
		if (validPhoneNumber.test(e)) {
			setPhoneError(false)
			setPhoneValid(true)
		} else {
			setPhoneError(true)
			setPhoneValid(false)
		}
	}
	const testValue = (e) => {
		switch (e.target.id) {
			case "fname":
				setFName(e.target.value)
				let firstNameInput = e.target.value
				if (validName.test(firstNameInput)) {
					setFNError(false)
					setFNValid(true)
				} else {
					setFNError(true)
					setFNValid(false)
				}
				break
			case "lname":
				setLName(e.target.value)
				let lastNameInput = e.target.value
				if (validName.test(lastNameInput)) {
					
					setLNError(false)
					setLNValid(true)
				} else {
					setLNError(true)
					setLNValid(false)
				}
				break
			case "email":
				setEmail(e.target.value)
				let emailInput = e.target.value
				if (validEmail.test(emailInput)) {
					setEmailError(false)
					setEmailValid(true)
				} else {
					setEmailError(true)
					setEmailValid(false)
				}
				break
			default:
				console.log(`Value id not found`)
		}
	}
	const subscribe = async () =>{
		setFormError(false)
		try {
			const res = await fetch('./api/subscribe', {
				method: 'post',
				headers: {
				'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				firstName: fName,
				lastName: lName,
				emailAddress: email,
				phoneNumber: phone
				})
			})
			if (res.status === 200) {
				console.log('You are subscribed!')
				router.push("/MobileSuccess")
				} 
			else {
				setFormError(true)
				console.log('Sorry, something went wrong.')
				}
			} catch(err) { setFormError(true)}
		}

	return (
		<MobileLayout>
		<Section className="section">
			<FormFlex justifyContent="center">
			<MobileLogo onClick={() => router.push("/")} />
				<Box>
					<Form
						autoComplete="off"
						onSubmit={(e) => {
							e.preventDefault()
						}}
					>
						<input
							type="hidden"
							name="u"
							value="22b67946fad39ce28b0ae1e18"
						></input>
						<input
							type="hidden"
							name="id"
							value="41ab03cb9d"
						></input>
						<FormTitle>First Name</FormTitle>
						<Input
							type="text"
							onChange={(e) => testValue(e)}
							id="fname"
							value={fName}
							placeholder="Enter First Name"
						></Input>
						<ErrorMessage visible={fnError}>
							Valid First Name Required
						</ErrorMessage>
						<FormTitle>Last Name</FormTitle>
						<Input
							type="text"
							onChange={(e) => testValue(e)}
							id="lname"
							value={lName}
							placeholder="Enter Last Name"
						></Input>
						<ErrorMessage visible={lnError}>
							Valid Last Name Required
						</ErrorMessage>
						<FormTitle>Email Address</FormTitle>
						<Input
							type="text"
							onChange={(e) => testValue(e)}
							id="email"
							value={email}
							placeholder="Enter Email Address"
						></Input>
						<ErrorMessage visible={emailError}>
							Valid Email Required
						</ErrorMessage>
						<FormTitle>Phone Number</FormTitle>
						<Section id="pnumber">
						<PhoneInput
							country={"us"}
							type="text"
							inputProps={{
								placeholder: "Enter Phone Number",
							}}
							value={phone}
							onChange={(e) => testPhone(e)}
							inputStyle={InputStyling}
							buttonStyle={buttonStyling}
							dropdownStyle={dropDownStyling}
							searchStyle={searchStyling}
						></PhoneInput>
						</Section>
						<ErrorMessage visible={phoneError}>
							Valid Phone Number Required
						</ErrorMessage>
						<Label>
								<Checkmark 
								type="checkbox" 
								checked={checkValid} 
								onChange={() =>{ 
									setCheckValid(!checkValid)
									console.log("button has been hit")
								}} />
								I agree to receive email updates about Chalk
						</Label>
						<ButtonContainer>
							<NextButton
								show={
									fnValid &&
									lnValid &&
									emailValid &&
									phoneValid &&
									checkValid
								}
								disabled={
									!fnValid ||
									!lnValid ||
									!emailValid ||
									!phoneValid ||
									!checkValid
								}
								onClick={() => {
									subscribe()
								}}
							>
								Submit
							</NextButton>
							
						</ButtonContainer>
						<ErrorMessage visible={formError}>
								Email already in use. Please try again with a different email.
						</ErrorMessage> 
						<input
							type="hidden"
							name="ht"
							value="3bed4bc5b57fb066214caec78cd9efb2e3e5f184:MTYwMDQ2NzUwMy41NTc0"
						></input>
						<input
							type="hidden"
							name="mc_signupsource"
							value="hosted"
						></input>
					</Form>
				</Box>
			</FormFlex>
		</Section>
		</MobileLayout>
	)
}

export default FormFull

const Section = styled.section``
const FormFlex = styled(Flex)`
	padding-top: 30%;
`



const Form = styled.form``
const ErrorMessage = styled.div`
	width: 220px;
	color: #ff8c7a;
	margin-top: 10px;
	right: 0;
	visibiliy: hidden;
	opacity: 0;
	font-size: 12px;
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
	width: 150px;
	height: 46px;
	border-radius: 100px;
	font-size: 18px;
	opacity: 0;
	visibiliy: hidden;
	transition: all 0.2s ease-in-out;
	font-family: Montserrat;
	font-weight: sem-bold;
	outline: none;
	${(props) =>
		props.show &&
		css`
			opacity: 1;
			visibility: visible;
			cursor: pointer;
		`}
	@media (max-width: 380px) {
		margin-top: 15px;
	}
`
const Input = styled.input`
	width: 302.46px;
	color: white;
	height: 40px;
	outline: none;
	border: none;
	background: transparent;
	font-size: 20px;
	caret-color: #80ebb6;
	-webkit-appearance: none;
	border-radius: 0;
	font-family: Montserrat;
	margin: 0;
	padding: 0;
	&:focus {
		border-bottom: 1px solid #80ebb6;
	}
	&::placeholder {
		color: #898c8f;
		font-size: 20px;
		color: #ffffff;
		opacity: 0.2;
		font-weight: 500;
	}
	@media (max-width: 360px) {
		font-size: 13px;
		height: 20px;
	}
`

const FormTitle = styled.h2`
	font-size: 15px;
	color: #ffffff;
	font-weight: 400;
	font-family: Montserrat;
`

const Button = styled.button`
	position: fixed;
	z-index: 10;
	border: none;
	color: black;
	background: transparent;
	width: 36px;
	height: 36px;
	border-radius: 100px;
	font-size: 20px;
	margin-top: 40px;
	margin-left: 8px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	outline: none;
`

const Icon = styled(FontAwesomeIcon)`
	color: white;
	font-size: 25px;
	justify-content: center;
	align-items: center;
`
const Checkmark = styled.input`
	width: 20px;
	height: 20px;
	border: none;
	display: inline-block;
	vertical-align: middle;
	position: relative;
	margin-right: 10px;
`

const Label = styled.label`
	color: grey;
	font-size: 12px;
	@media (max-width: 360px) {
		font-size: 10px;
		height: 20px;
	}
`
const MobileLogo = styled(ChalkLogo)`
	position: fixed;
	top: 0;
	z-index: 10;
	margin-top: 40px;
	height: 36px;
	width: 36px;
`;