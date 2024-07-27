import React, { useState } from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import axios from "axios"

const validName = RegExp(/^[a-zA-Z\s\-.]{1,30}$/)
const validEmail = RegExp(
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$/
)
const validPhone = RegExp(/^\d{10}$/)

const ModalContent = (props) => {
	const [name, setName] = useState("")
	const [nameSuccess, setNameSuccess] = useState(false)
	const [nameError, setNameError] = useState(false)
	const [email, setEmail] = useState("")
	const [emailSuccess, setEmailSuccess] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [phone, setPhone] = useState("")
	const [phoneSuccess, setPhoneSuccess] = useState(false)
	const [phoneError, setPhoneError] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const [submitError, setSubmitError] = useState(false)
	const [duplicateEmail, setDuplicateEmail] = useState(false)

	const testValue = (e) => {
		switch (e.target.id) {
			case "name":
				setName(e.target.value)
				if (validName.test(e.target.value)) {
					setNameError(false)
					setNameSuccess(true)

					setDuplicateEmail(false)
					setSubmitError(false)
				} else {
					setNameError(true)
					setNameSuccess(false)

					setDuplicateEmail(false)
					setSubmitError(false)
				}
				break
			case "email":
				setEmail(e.target.value)
				if (validEmail.test(e.target.value)) {
					setEmailError(false)
					setEmailSuccess(true)

					setDuplicateEmail(false)
					setSubmitError(false)
				} else {
					setEmailError(true)
					setEmailSuccess(false)

					setDuplicateEmail(false)
					setSubmitError(false)
				}
				break
			case "phone":
				setPhone(e.target.value)
				if (validPhone.test(e.target.value)) {
					setPhoneError(false)
					setPhoneSuccess(true)

					setDuplicateEmail(false)
					setSubmitError(false)
				} else {
					setPhoneError(true)
					setPhoneSuccess(false)

					setDuplicateEmail(false)
					setSubmitError(false)
				}
				break
		}
	}

	const submitForm = async () => {
		if (nameSuccess && emailSuccess) {
			try {
				const res = await fetch("./api/subscribe", {
					method: "post",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						fullName: name,
						emailAddress: email,
					}),
				})
				if (res.status === 200) {
					setSubmitted(true)
					import("react-facebook-pixel")
						.then((x) => x.default)
						.then((ReactPixel) => {
							ReactPixel.trackCustom("AndroidWaitlistSubmission")
						})
				} else if (res.status === 401) {
					setDuplicateEmail(true)
				} else if (res.status === 400) {
					setSubmitError(true)
				}
			} catch (err) {
				console.log(err)
			}
		} else {
			console.log("ERROR SUBMISSION")
		}
	}

	return (
		<FullFlex justifyContent="space-evenly" alignItems="center">
			<Box>
				<TitleFlex justifyContent="center" flexDirection="column">
					<Title>
						CHALK FOR <br />
						ANDROID
					</Title>
					<Info>
						Be the first to know when we launch Chalk for Android.
						Join the waitlist and we'll let you know via email as
						soon as Chalk is available on Android. US Only.
					</Info>
				</TitleFlex>
			</Box>
			<Box>
				<FormDiv>
					{!submitted && (
						<Flex justifyContent="flex-start">
							<SmallTitle>JOIN WAITLIST</SmallTitle>
						</Flex>
					)}
					<Flex justifyContent="center" alignItems="center">
						{submitted && (
							<Box>
								<Flex
									flexDirection="column"
									justifyContent="center"
									alignItems="flex-start"
								>
									<Box>
										<SmallTitle
											style={{ color: "#80EBB6" }}
										>
											SUCCESS.
										</SmallTitle>
									</Box>
									<Box width="70%">
										<SmallTitle>
											YOU HAVE JOINED THE ANDROID
											WAITLIST.
										</SmallTitle>
									</Box>
									<Box>
										<SmallTitle
											style={{ color: "#80EBB6" }}
										>
											THANK YOU!
										</SmallTitle>
									</Box>
								</Flex>
								<Flex
									justifyContent="flex-start"
									alignItems="flex-start"
								>
									<SuccessButton
										style={{
											backgroundColor: "#80EBB6",
											marginLeft: "8%",
										}}
										onClick={props.returnClick}
									>
										<ButtonText>Return Home</ButtonText>
									</SuccessButton>
								</Flex>
							</Box>
						)}
						{!submitted && (
							<Box>
								<Flex
									flexDirection="column"
									justifyContent="space-evenly"
									alignItems="center"
								>
									<Box>
										<InputTitle>Full Name</InputTitle>
										<FormInput
											id="name"
											value={name}
											placeholder="Full Name"
											onChange={(e) => {
												testValue(e)
											}}
											style={{
												border: nameSuccess
													? "solid 3px #80EBB6"
													: nameError
													? "solid 3px #D63D3D"
													: "solid 3px black",
												color: "black",
											}}
										/>
										<ErrorText
											style={{
												opacity: nameError ? 1 : 0,
											}}
										>
											Invalid Name
										</ErrorText>
									</Box>
									<Box>
										<InputTitle>Email</InputTitle>
										<FormInput
											id="email"
											value={email}
											onChange={(e) => {
												testValue(e)
											}}
											placeholder="name@example.com"
											style={{
												border: emailSuccess
													? "solid 3px #80EBB6"
													: emailError
													? "solid 3px #D63D3D"
													: "solid 3px black",
												color: "black",
											}}
										/>
										<ErrorText
											style={{
												opacity:
													emailError ||
													submitError ||
													duplicateEmail
														? 1
														: 0,
											}}
										>
											{" "}
											{duplicateEmail
												? "Email already on waitlist"
												: submitError
												? "Error submitting email. Try again later"
												: "Invalid Email"}{" "}
										</ErrorText>
									</Box>
									<Box>
										<InputTitle>Phone Number</InputTitle>
										<FormInput
											id="phone"
											value={phone}
											placeholder="10 Digit Number"
											onChange={(e) => {
												testValue(e)
											}}
											style={{
												border: phoneSuccess
													? "solid 3px #80EBB6"
													: phoneError
													? "solid 3px #D63D3D"
													: "solid 3px black",
												color: "black",
											}}
										/>
										<ErrorText
											style={{
												opacity: phoneError ? 1 : 0,
											}}
										>
											Invalid Number. 10 Digits
										</ErrorText>
									</Box>
								</Flex>
								<Flex justifyContent="space-between">
									<WaitlistButton
										style={{ backgroundColor: "#D9D9D9" }}
										onClick={props.onClose}
									>
										<ButtonText>Cancel</ButtonText>
									</WaitlistButton>
									<WaitlistButton
										style={{ backgroundColor: "#80EBB6" }}
										onClick={() => submitForm()}
									>
										<ButtonText>Waitlist Me</ButtonText>
									</WaitlistButton>
								</Flex>
							</Box>
						)}
					</Flex>
				</FormDiv>
			</Box>
		</FullFlex>
	)
}
export default ModalContent

const FullFlex = styled(Flex)`
	@media (max-width: 767px) {
		flex-direction: column;
	}
`
const TitleFlex = styled(Flex)`
	align-items: flex-start;
	@media (max-width: 767px) {
		align-items: center;
	}
`
const FormDiv = styled.div`
	border: solid 6px black;
	border-radius: 30px;
	background-color: #ffffff;
	height: 476px;
	width: 408px;
	@media (max-width: 767px) {
		width: 310px;
		height: 476px;
	}
`
const Title = styled.h1`
	font-family: fatfrank, Montserrat, sans-serif;
	font-size: 48px;
	font-weight: bold;
	color: #393939;
	margin: 0;
	padding: 0;
	padding-left: 10px;
	text-align: left;
	@media (max-width: 767px) {
		padding-top: 80px;
		text-align: center;
		font-size: 31px;
		padding-left: 0;
	}
`
const SmallTitle = styled.h1`
	font-family: fatfrank, Montserrat, sans-serif;
	font-size: 31px;
	font-weight: bold;
	color: #393939;
	padding-left: 45px;
	padding-top: 10px;
	text-align: left;
	@media (max-width: 767px) {
		font-size: 24px;
		padding-left: 25px;
	}
`
const Info = styled.h2`
	font-family: Roboto, sans-serif;
	font-size: 18px;
	font-weight: 500;
	line-height: 25px;
	color: #393939;
	margin-top: 25px;
	width: 300px;
	@media (max-width: 767px) {
		margin-top: 20px;
	}
`

const FormInput = styled.input`
	border-radius: 8px;
	height: 46px;
	width: 312px;
	margin-bottom: 5px;
	font-size: 16px;
	text-indent: 15px;
	&:focus {
		outline: none;
	}
	&:-webkit-contacts-auto-fill-button {
		padding-right: 10px;
	}
	@media (max-width: 767px) {
		width: 273px;
	}
`
const WaitlistButton = styled.button`
	border-radius: 100px;
	border: none;
	height: 56px;
	width: 148px;
	cursor: pointer;
	margin-top: 20px;
	@media (max-width: 767px) {
		width: 129px;
		height: 48px;
		margin-top: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
const ButtonText = styled.h3`
	font-family: roboto, sans-serif;
	font-size: 18;
	font-weight: 500;
	text-align: center;
`
const SuccessButton = styled.button`
	border-radius: 100px;
	border: none;
	height: 56px;
	width: 148px;
	font-family: Roboto, sans-serif;
	font-size: 16;
	font-weight: 500;
	cursor: pointer;
	margin-top: 10px;
	@media (max-width: 767px) {
		width: 129px;
		height: 48px;
		margin-top: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
const InputTitle = styled.h4`
	font-family: Roboto, sans-serif;
	font-size: 14px;
	font-weight: 500;
	color: #626262;
	margin: 0;
	margin-bottom: 5px;
	margin-top: 2px;
	padding: 0;
`
const ErrorText = styled.h4`
	font-family: Roboto, sans-serif;
	font-size: 14px;
	font-weight: 500;
	color: #d63d3d;
	margin: 0;
	padding: 0;
`
