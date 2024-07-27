import React, { useEffect } from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import { Animated } from "react-animated-css"

const Footer = () => {



    return(
        <Section className="section">
            <TotalFlex justifyContent="center" alignItems="center" flexDirection="column">
                <Animated animationIn="fadeIn">
                    <TitleText>
                        Footer
                    </TitleText>
                </Animated>

            </TotalFlex>
        </Section>
    )
}

export default Footer

const Section = styled.section`
	height: 35%;
	background-color: #151A1E;
`
const TitleText = styled.h1`
	font-family: Montserrat;
	font-size: 64px;
	font-weight: bold;
	color: #80EBB6;
	@media (max-width: 1356px) {
		font-size: 45px;
	}
	margin: 0;
	padding: 0;
	text-align: center;
`
const TotalFlex = styled(Flex)`
	height: 35vh;
`