import React, { useEffect } from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import { Animated } from "react-animated-css"

const Affiliate = () => {

    return(
        <Section className="section">
            <TotalFlex flexDirection="column">
                <Animated animationIn="fadeIn">
                    <TitleText>
                        Are You a Content Creator?
                    </TitleText>
                </Animated>
				<SubText>Test out new features, create your own tournaments, and more with our affiliate program!</SubText>
				
            </TotalFlex>
        </Section>
    )
}

export default Affiliate

const Section = styled.section`
	height: 100%;
	background-color: #F7F7F7;
`
const TitleText = styled.h1`
	font-family: Montserrat;
	font-size: 64px;
	font-weight: bold;
	color: #000000;
	@media (max-width: 1356px) {
		font-size: 45px;
	}
	margin: 0;
	padding: 0;
	text-align: left;
	margin-top: 5%;
	margin-left: 15%;
`
const SubText = styled.h2`
	font-family: Roboto;
	font-size: 21px;
	font-weight: 500;
	line-height: 25px;
	color: #393939;
	
	margin-top: 10px;
	@media (max-width: 1356px) {
		font-size: 18px;
	}
	text-align: left;
	margin-top: 3%;
	margin-left: 15%;
`
const Span = styled.span`
	color: black;
`
const TotalFlex = styled(Flex)`
	height: 100vh;
`