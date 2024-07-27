import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import PhoneInput from "react-phone-input-2";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createBetaUser } from "../../graphql/mutations";
import moment from "moment";

// components
import BackButton from "../Button/BackButton";

const validPhoneNumber = RegExp(
  /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
);

const InputStyling = {
  width: 400,
  color: "white",
  height: "auto",
  outline: "none",
  border: "none",
  borderBottom: "1px solid white",
  background: "transparent",
  fontSize: "30px",
  caretColor: "white",
  borderRadius: 0,
	WebkitAppearance: "none"
};
const buttonStyling = {
  backgroundColor: "transparent",
};
export default class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      phoneNumber: "",
      form: false,
      errorVisible: false,
      errors: {
        phoneNumber: "",
      },
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton = (e) => {
    this.props.onPhoneChange(e);
    let errors = this.state.errors;
    errors.phoneNumber = validPhoneNumber.test(e)
      ? ""
      : "phoneNumber is not valid";
    this.setState({ errors });
    if (this.state.errors.phoneNumber === "") {
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
        discord: "null",
      },
      favoritePlatform: {
        xbox: "null",
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
    if (this.state.errors.phoneNumber === "") {
      this.setState({ errorVisible: false });
      const response = await API.graphql(
        graphqlOperation(createBetaUser, { input: betaUser })
      ); 
      this.props.scrolling();
      this.setState({
        form: true,
      });
    } else {
      this.setState({ errorVisible: true });
    }
  };

  render() {
    return (
      <Section className="section">
        <Flex mx={-2} justifyContent="center">
          <FormFlex justifyContent="space-between" alignItems="center">
            <Box ml={70} mt={25}>
              <FormQuestion>
                <ChalkBlue>4/4</ChalkBlue>: What's your{" "}
                <Bold>phone number?</Bold>
              </FormQuestion>
              <Form
                autoComplete="off"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <PhoneInput
                  country={"us"}
                  type="text"
                  id="pnumber"
                  placeholder="Type your answer here..."
                  value={this.props.phone}
                  onChange={(e) => this.toggleButton(e)}
                  inputStyle={InputStyling}
                  buttonStyle={buttonStyling}
                ></PhoneInput>
              </Form>
              <ErrorMessage visible={this.state.errorVisible}>
                Valid Phone Number Required
              </ErrorMessage>
              <ButtonContainer>
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
                  Next
                </NextButton>
              </ButtonContainer>
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
  color: #0898FA;
  letter-spacing: 4px;
`;
const Form = styled.form``;


const ErrorMessage = styled.div`
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
  margin-top: 30px;
  border: none;
  color: black;
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
const RealText = styled.p`
  color: #f7f7f7;
  margin-top: 0px;
  font-size: 56px;
  font-weight: bold;
`;
