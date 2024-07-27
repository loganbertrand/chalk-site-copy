import React from "react"
import Link from "next/link"
import styled, { css, keyframes } from "styled-components"

const FAQ = () => {
	return (
		<Container>
			<Title>Frequently asked questions.</Title>
			<Subtitle>Esports for everyone.</Subtitle>
			<Grid>
				<Box>
					<Question>How do I participate in the tournament?</Question>
					<Answer>
						Download the app{" "}
						<Highlight
							href="https://apple.co/3aX1WYh"
							target={"_blank"}
						>
							here
						</Highlight>
						<br />
						Create your free account then head to the “Explore” page
						and join a BSE tournament!
					</Answer>
				</Box>
				<Box>
					<Question>When is the cutoff date for earnings?</Question>
					<Answer>
						The Best Summer Ever begins July 12th, and the final day
						to participate in BSE tournaments is August 31st, 2022.
					</Answer>
				</Box>
				<Box>
					<Question>What happens if there’s a tie?</Question>
					<Answer>
						In the event of a tie, Chalk will be hosting and
						streaming a tournament between the final tied users to
						determine the grand prize winner.
					</Answer>
				</Box>
				<Box>
					<Question>How does the winner claim their prize?</Question>
					<Answer>
						If you win, you will be contacted via email. Make sure
						you add contact@chalkapp.co to your contact list to
						avoid the message ending up in your spam folder.
					</Answer>
				</Box>
				<Box>
					<Question>What counts as earnings?</Question>
					<Answer>
						Any win from a BSE tournament will count toward your
						overall earnings. Successful referrals will also count
						as earnings.
					</Answer>
				</Box>
				<Box>
					<Question>
						How can I ask a question directly to the team?
					</Question>
					<Answer>
						Join our{" "}
						<Highlight
							href="https://discord.gg/NyM3xk5"
							target={"_blank"}
						>
							Discord server
						</Highlight>
						. Our team is always available to help answer questions.
					</Answer>
				</Box>
			</Grid>
			<Contact>
				Didn't find your answer?{" "}
				<Highlight href="https://discord.gg/NyM3xk5" target={"_blank"}>
					Contact us here.
				</Highlight>
			</Contact>
		</Container>
	)
}
export default FAQ

const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f8f8f8;
	@media (max-width: 1024px) {
		justify-content: center;
	}
`

const Title = styled.h1`
	font-family: Poppins, Montserrat;
	color: #0f0f0f;
	font-size: 48px;
	font-weight: 900;
	padding-top: 4%;
	margin-bottom: 0;
	@media (max-width: 1024px) {
		align-self: center;
		font-size: 30px;
		text-align: center;
	}
`
const Subtitle = styled.p`
	font-family: Poppins, sans-serif;
	font-size: 22px;
	color: #4b4b4b;
	padding-bottom: 2%;
	@media (max-width: 1024px) {
		font-size: 18px;
	}
`
const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 21px;
	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 1px;
		width: 80%;
	}
`
const Box = styled.div``
const Question = styled.p`
	font-family: Poppins, sans-serif;
	font-size: 24px;
	font-weight: 700;
	color: #222222;
	text-align: left;
	@media (max-width: 1024px) {
		font-size: 20px;
	}
`
const Answer = styled.p`
	font-family: Poppins, sans-serif;
	font-size: 16px;
	color: #4b4b4b;
	max-width: 418px;
	text-align: flex-start;
`
const Contact = styled.p`
	font-family: Poppins, sans-serif;
	font-size: 16px;
	color: #4b4b4b;
	padding-top: 5%;
	margin-bottom: 5%;
`
const Highlight = styled.a`
	font-family: Poppins, sans-serif;
	font-size: 16px;
	font-weight: 1000;
	color: #fd3e3e;
	text-decoration: none;
`
