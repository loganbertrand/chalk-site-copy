import React, { useEffect } from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import Link from "next/link"
import ChalkLogo from "../public/static/images/ChalkMedium.svg"
import ChalkBadge from "../public/static/images/ChalkBadgeSmall.svg"
import AppStore from "../public/static/svgs/DownloadAppStore.svg"

const Footer = () => {
	return (
		<Section className="section">
			<TotalDiv>
				<TotalFlex
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
				>
					<Flex
						justifyContent="space-between"
						width={200}
						mt={30}
						mb={15}
					>
						<ChalkBadge />
						<ChalkLogo />
					</Flex>
					<Box
						mt={25}
						mb={10}
						onClick={() => {
							window.open("https://apple.co/3aX1WYh")
						}}
						style={{ cursor: "pointer" }}
					>
						<AppStore />
					</Box>

					<Box>
						<Flex>
							<Box>
								<Link href="/privacy-policy">
									<LinkText>Privacy Policy</LinkText>
								</Link>
							</Box>

							<Box>
								<PipeText> &nbsp; | &nbsp; </PipeText>
							</Box>

							<Box>
								<Link href="/tos">
									<LinkText>Terms of Service</LinkText>
								</Link>
							</Box>
							<Box>
								<PipeText> &nbsp; | &nbsp; </PipeText>
							</Box>

							<Box>
								<Link href="/support">
									<LinkText>Support</LinkText>
								</Link>
							</Box>
						</Flex>

						<CopyrightText>© 2022 Chalk Esports Inc</CopyrightText>
					</Box>
				</TotalFlex>
			</TotalDiv>
		</Section>
	)
}

export default Footer

const Section = styled.section`
	height: 40%;
	background-color: #151a1e;
`
const LinkText = styled.h3`
	font-family: Roboto, sans-serif;
	font-size: 16px;
	font-weight: 500;
	color: #ffffff;
	text-align: center;
	cursor: pointer;
`
const CopyrightText = styled.h3`
	font-family: Roboto, sans-serif;
	font-size: 16px;
	font-weight: bold;
	color: #ffffff;
	text-align: center;
`
const PipeText = styled.h2`
	font-family: Roboto, sans-serif;
	font-size: 18px;
	font-weight: 700;
	color: #ffffff;
	text-align: center;
`
const TotalFlex = styled(Flex)``
const TotalDiv = styled.div`
	padding-top: 80px;
	padding-bottom: 80px;
`
