import React, { useState } from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"

const validName = RegExp(/^[a-zA-Z\s\-.]{1,30}$/)
const validEmail = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$/)

const ModalContent = (props) => {
    const [name, setName] = useState()
    const [nameSuccess, setNameSuccess] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [email, setEmail] = useState()
    const [emailSuccess, setEmailSuccess] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const testValue = (e) => {
        switch (e.target.id) {
			case "name":
                setName(e.target.value)
				if (validName.test(e.target.value)) {
					setNameError(false)
					setNameSuccess(true)
				} else {
					setNameError(true)
					setNameSuccess(false)
				}
				break
			case "email":
                setEmail(e.target.value)
				if (validEmail.test(e.target.value)) {
					setEmailError(false)
					setEmailSuccess(true)
				} else {
					setEmailError(true)
					setEmailSuccess(false)
				}
				break
        } 
    }

    const submitForm = () => {
        if(nameSuccess && emailSuccess){
            setSubmitted(true)
            console.log("Form submission successful!!")
        }else{
            console.log("ERROR SUBMISSION")
        }

    }

    return(
        <Flex justifyContent="space-evenly" alignItems="center">
            <Box>
                <Flex justifyContent="center" alignItems="flex-start" flexDirection="column">
                    <Title>
                        CHALK FOR <br/>ANDROID
                    </Title>
                    <Info>
                        Be the first to know when we launch Chalk for Android. Join the waitlist and we'll let you know via email as soon as Chalk is available on Android.
                    </Info>
                </Flex>
            </Box>
            <Box>
                <FormDiv>
                    {!submitted && (
                        <Flex justifyContent="flex-start">
                            <SmallTitle>
                                JOIN WAITLIST
                            </SmallTitle>
                        </Flex>
                    )}
                    <Flex justifyContent="center" alignItems="center">
                        {submitted && (
                            <Box>
                                <Flex flexDirection="column" justifyContent="center" alignItems="flex-start">
                                    <Box>
                                        <SmallTitle style={{color: "#80EBB6"}}>SUCCESS.</SmallTitle>
                                    </Box>
                                    <Box width="70%">
                                        <SmallTitle>YOU HAVE JOINED THE ANDROID WAITLIST.</SmallTitle>
                                    </Box>
                                    <Box>
                                        <SmallTitle style={{color: "#80EBB6"}}>THANK YOU!</SmallTitle>
                                    </Box>
                                </Flex>
                            </Box>
                        )}
                        {!submitted && (
                            <Box>
                            <Flex flexDirection="column" justifyContent="space-evenly" alignItems="center">
                                <Box>
                                    <InputTitle>Full Name</InputTitle>
                                    <FormInput
                                        id="name"
                                        value={name}
                                        placeholder="Full Name"
                                        onChange={(e) =>{
                                            testValue(e)
                                        }}
                                        style={{border: nameSuccess ? "solid 3px #80EBB6" : nameError ? "solid 3px #D63D3D" : "solid 3px black"}}
                                    />
                                    <ErrorText style={{opacity: nameError ? 1 : 0 }}>Invalid Name</ErrorText>
                                </Box>
                                <Box>
                                    <InputTitle>Email</InputTitle>
                                    <FormInput
                                        id="email"
                                        value={email}
                                        onChange={(e) =>{
                                            testValue(e)
                                        }}
                                        placeholder="name@example.com"
                                        style={{border: emailSuccess ? "solid 3px #80EBB6" : emailError ? "solid 3px #D63D3D" : "solid 3px black"}}
                                    />
                                    <ErrorText style={{opacity: emailError ? 1 : 0 }}>Invalid Email</ErrorText>
                                </Box>
                                
                            </Flex>
                            <Flex justifyContent="space-between" mt={40}>
                                <WaitlistButton
                                    style={{backgroundColor: "#D9D9D9"}}
                                    onClick={props.onClose}
                                >
                                    Cancel
                                </WaitlistButton>
                                <WaitlistButton
                                    style={{backgroundColor: "#80EBB6"}}
                                    onClick={()=>submitForm()}
                                >
                                    Waitlist Me
                                </WaitlistButton>
                            </Flex>
                        </Box>
                        )}
                        
                        
                    </Flex>
                </FormDiv>
            </Box>
        </Flex>
    )
}
export default ModalContent

const FormDiv = styled.div`
    border: solid 6px black;
    border-radius: 30px;
    background-color: #ffffff;
    height: 476px;
    width: 408px;
`
const Title = styled.h1`
	font-family: Montserrat;
	font-size: 48px;
	font-weight: bold;
	color: #393939;
	margin: 0;
	padding: 0;
	padding-left: 10px;
	text-align: left;
`
const SmallTitle = styled.h1`
	font-family: Montserrat;
	font-size: 31px;
	font-weight: bold;
	color: #393939;
	padding-left: 45px;
    padding-top: 20px;
	text-align: left;
`
const Info = styled.h2`
	font-family: Roboto, sans-serif;
	font-size: 18px;
	font-weight: 500;
	line-height: 25px;
	color: #393939;
	margin-top: 30px;
	width: 300px;
`

const FormInput = styled.input`
    border-radius: 8px;
    height: 56px;
    width: 312px;
    margin-bottom: 5px;
    font-size: 16px;
    text-indent: 15px;
    &:focus{
        outline: none;
    }
`
const WaitlistButton = styled.button`
    border-radius: 100px;
    border: none;
    height: 56px;
    width: 148px;
    font-family: Roboto, sans-serif;
    font-size: 16;
    font-weight: 900;
    cursor: pointer;
`
const InputTitle = styled.h4`
	font-family: Roboto, sans-serif;
	font-size: 14px;
	font-weight: 500;
	color: #626262;
    margin: 0;
    margin-bottom: 5px;
    margin-top: 5px;
    padding:0;
`
const ErrorText = styled.h4`
	font-family: Roboto, sans-serif;
	font-size: 14px;
	font-weight: 500;
	color: #D63D3D;
    margin: 0;
    padding:0;

`