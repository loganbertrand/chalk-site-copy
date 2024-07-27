import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";

const validEmail = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
export default class MobileEmail extends React.Component {
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
        <FormFlex justifyContent="center" alignItems="center">
          <Box>
            <FormQuestion>
              What's your <Bold>email address?</Bold>
            </FormQuestion>
            <form
              autoComplete="off"
              onSubmit={(e) => {
                this.submitValue();
                e.preventDefault();
              }}
            >
              <Input
                onChange={(e) => this.toggleButton(e)}
                id="email"
                value={this.props.email}
                placeholder="Type your answer here..."
              ></Input>
            </form>
            <ErrorMessage visible={this.state.errorVisible}>
              Valid Email Required
            </ErrorMessage>
            <ButtonContainer>
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
        </FormFlex>
      </Section>
    );
  }
}

const Section = styled.section``;
const FormFlex = styled(Flex)`
  padding-top: 200px;
`;

const FormQuestion = styled.p`
  font-size: 24px;
  color: white;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Input = styled.input`
  width: 302.46px;
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
    font-size: 18px;
  }
  -webkit-appearance: none;
  border-radius: 0;
`;
const ErrorMessage = styled.div`
  width: 220px;
  text-align: center;
  padding: 8px;
  margin-top: 8px;
  visibiliy: hidden;
  opacity: 0;
  background-color: #f4747e;
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
  width: 130px;
  height: 40px;
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  visibiliy: hidden;
  transition: all 200ms ease-out;
  font-family: Montserrat;
  font-weight: bold;
  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;
