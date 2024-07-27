import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";

// components
import BackButton from "../Button/BackButton";

const validEmail = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
export default class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: "",
      form: false,
      errorVisible: false,
      errors: {
        email: "",
      },
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton = (e) => {
    this.props.onEmailChange(e.target.value);
    let errors = this.state.errors;
    errors.email = validEmail.test(e.target.value) ? "" : "Email is not valid";
    this.setState({ errors });
    if (this.state.errors.email === "") {
      this.setState({
        show: true,
        errorVisible: false,
      });
    } else {
      this.setState({ show: false });
      this.setState({ errorVisible: true });
    }
  };
  submitValue = () => {
    if (this.state.errors.email === "") {
      this.setState({ errorVisible: false });
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
                <ChalkBlue>3/4</ChalkBlue>: What's your{" "}
                <Bold>email address?</Bold>
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
                  id="email"
                  value={this.props.email}
                  placeholder="Type your answer here..."
                ></Input>
              </Form>

              <ErrorMessage visible={this.state.errorVisible}>
                Valid Email Required
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

const Bold = styled.span`
  font-weight: bold;
`;

const ChalkBlue = styled.span`
  color: #0898FA;
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
  outline:none;
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
