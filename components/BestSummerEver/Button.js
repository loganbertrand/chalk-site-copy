import React from "react"
import Link from "next/link"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"

const Button = (props) => {
	return (
		<Container onClick={props.onClick} buttonColor={props.buttonColor}>
			<Text textColor={props.textColor} fontSize={props.fontSize}>
				{props.title}
			</Text>
		</Container>
	)
}

export default Button

const Container = styled.div`
	width: 195px;
	max-height: 56px;
	border-radius: 90px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) =>
		props.buttonColor ? props.buttonColor : "#46FF8D"};
	cursor: pointer;
`
const Text = styled.p`
	font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
	font-weight: 600;
	margin-horizontal: 30px;
	font-family: Poppins, sans-serif;
	color: ${(props) => (props.textColor ? props.textColor : "#292626")};
`
