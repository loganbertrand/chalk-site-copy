import React from "react"
import styled from "styled-components"

const StyledInput = (props) => {
	return (
		<Input
			type={props.type}
			onChange={props.onChange}
			id={props.id}
			value={props.value}
			placeholder={props.placeholder}
		></Input>
	)
}

export default StyledInput

const Input = styled.input`
	width: 400px;
	color: white;
	height: 40px;
	outline: none;
	border: none;
	background: transparent;
	font-size: 20px;
	caret-color: #80EBB6;
	-webkit-appearance: none;
    border-radius: 0;
    font-family: Montserrat;
    margin: 0;
    padding: 0;
	&:focus {
		border-bottom: 1px solid #80EBB6;
	}
	&::placeholder {
		color: #FFFFFF;
		font-size: 20px;
		opacity: 0.2;
        color: #ffffff;
        font-weight: 500;
	}
`
