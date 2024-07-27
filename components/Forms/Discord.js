import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createBetaUser } from "../../graphql/mutations";
import moment from "moment";
import Link from "next/link";

// components
import BackButton from "../Button/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const validDiscord = RegExp(/^[ a-zA-Z0-9._!@$%^&*?'-]+#[0-9]{4}$/);
export default class Discord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      discord: "",
      form: false,
      errorVisible: false,
      errors: {
        discord: "",
      },
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton = (e) => {
    this.props.onDiscordChange(e.target.value);
    let discordValue = e.target.value;
    let errors = this.state.errors;
    errors.discord = validDiscord.test(discordValue)
      ? ""
      : "discord is not valid";
    this.setState({ errors });
    if (this.state.errors.discord === "") {
      this.setState({
        show: true,
        errorVisible: false,
      });
    } else {
      this.setState({ show: false });
      this.setState({ errorVisible: true });
    }
  };
  submitValue = async () => {
    const data = this.props.data;
    const betaUser = {
      name: {
        first: data.firstName,
        last: data.lastName,
        discord: data.discord,
      },
      favoritePlatform: {
        xbox: data.xbox,
        playstation: data.ps4,
      },
      favoriteGame: {
        apex: data.apex,
        fortnite: data.fortnite,
        rainbowsix: data.r6,
      },
      email: data.email,
      phone_number: "+" + data.phone,
      createdAt: moment(Date.now()),
    };
    if (this.state.errors.discord === "") {
      this.setState({ errorVisible: false });
      const response = await API.graphql(
        graphqlOperation(createBetaUser, { input: betaUser })
      );
      this.props.goToDiscord();
    } else {
      this.setState({ errorVisible: true });
    }
  };
  render() {
    return (
      <Section className="section">
        <Flex mx={-2} justifyContent="center">
          <FormFlex justifyContent="space-between" alignItems="center">
            <Box ml={70} mt={105}>
              <FormQuestion>
                <ChalkBlue>7/7</ChalkBlue>: What's your{" "}
                <Bold>discord name?</Bold>
                <br />
                <FormMessage>
                  *Include Number ( example: chalk#1234 ){" "}
                </FormMessage>
              </FormQuestion>

              <Form
                autoComplete="off"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Input
                  type="text"
                  onChange={(e) => this.toggleButton(e)}
                  id="discordname"
                  value={this.props.discord}
                  placeholder="Ex: DiscordName#1234"
                ></Input>
              </Form>

              <ErrorMessage visible={this.state.errorVisible}>
                Valid Discord Name Required
              </ErrorMessage>
              <ButtonContainer mb={25}>
                <BackButton
                  onClick={() => {
                    this.props.goBack();
                  }}
                />
                <NextButton
                  show={this.state.show}
                  onClick={() => {
                    this.submitValue();
                  }}
                >
                  Submit
                </NextButton>
              </ButtonContainer>
              <IconLink target="_blank" href="https://discord.com/new">
                
                  <Icon icon={faDiscord} /> Open Discord
                
              </IconLink>
            </Box>
            <Box ml={70}>
              <FormFlex
                flexDirection="column"
                justifyContent="center"
                alignItems="space-between"
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Box ml={50}>
                    <RealText>
                      REAL <br /> GAMES
                    </RealText>
                  </Box>
                  <Box ml={50}>
                    <RealText>
                      REAL <br /> MONEY
                    </RealText>
                  </Box>
                </Flex>
              </FormFlex>
            </Box>
          </FormFlex>
        </Flex>
      </Section>
    );
  }
}

const Section = styled.section``;
const FormFlex = styled(Flex)`
  height: 100vh;
`;

const FormQuestion = styled.p`
  font-size: 24px;
  color: white;
`;
const FormMessage = styled.p`
  font-size: 18px;
  color: #80ebb6;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const ChalkBlue = styled.span`
  color: #0898fa;
  letter-spacing: 4px;
`;

const Form = styled.form``;

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
`;
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
`;

const ButtonContainer = styled(Flex)`
  align-items: center;
  flex-direction: row;
`;

const NextButton = styled.button`
  display: block;
  border: none;
  color: black;
  margin-top: 30px;
  background: white;
  width: 146px;
  height: 46px;
  border-radius: 30px;
  font-size: 20px;
  opacity: 0;
  visibiliy: hidden;
  transition: all 0.2s ease-in-out;
  font-family: Montserrat;
  font-weight: bold;
  outline:none;
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
`;
const DiscordButton = styled.button`
  width: 185px;
  height: 46px;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: bold;
  border-radius: 30px;
  border: none;
  color: white;
  background: #7289da;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s ease-in-out;
  outline:none;
  &:hover {
    background: #8a9ad1;
    transform: scale(1.1);
  }
`;

const RealText = styled.p`
  color: #f7f7f7;
  margin-top: 0px;
  font-size: 56px;
  font-weight: bold;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #7289da;
  font-size: 20px;
`;

const IconLink = styled.a`
  cursor: pointer;
  color: #7289da;
  font-size: 20px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  margi-top: 5px;
  margin-left: 3px;
  &:hover {
    text-decoration: underline;
  }
`;
