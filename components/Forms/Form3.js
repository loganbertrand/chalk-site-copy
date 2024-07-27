import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";

// components
import BackButton from "../Button/BackButton";

export default class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      form: false,
      isXbox: false,
      isPS4: false,
      errorVisible: false,
    };
    this.toggleButton = this.toggleButton.bind(this);
    this.toggleXbox = this.toggleXbox.bind(this);
    this.togglePS4 = this.togglePS4.bind(this);
  }

  toggleButton = () => {
    const { show } = this.state;
    if (this.state.show === false) {
      this.setState({ show: true });
    }
  };
  toggleXbox = () => {
    const { isXbox } = this.state;
    this.setState({
      isXbox: !isXbox,
    });
  };
  togglePS4 = () => {
    const { isPS4 } = this.state;
    this.setState({
      isPS4: !isPS4,
    });
  };
  toggleXboxChange = (e) => {
    this.props.onXboxChange(e.target.value);
  };
  togglePS4Change = (e) => {
    this.props.onPS4Change(e.target.value);
  };
  submitValue = () => {
    if (this.state.isPS4 || this.state.isXbox) {
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
          <FormFlex alignItems="center">
            <Box mr={70} mb={170}>
              <Input
                type="checkbox"
                id="xbox"
                value={this.props.xbox}
                onChange={(e) => this.toggleXboxChange(e)}
              ></Input>
              <Label for="xbox">
                <XBOXController
                  src={require("../../public/static/images/xbox-controller.png")}
                  onClick={() => {
                    this.toggleXbox();
                    this.toggleButton();
                  }}
                  highlight={this.state.isXbox}
                />
              </Label>

              <Input
                type="checkbox"
                id="ps4"
                value={this.props.ps4}
                onChange={(e) => this.togglePS4Change(e)}
              ></Input>
              <Label for="ps4">
                <PS4Controller
                  src={require("../../public/static/images/ps4-controller.png")}
                  onClick={() => {
                    this.togglePS4();
                    this.toggleButton();
                  }}
                  highlight={this.state.isPS4}
                />
              </Label>

              <FormQuestion>
                <ChalkBlue>3/7</ChalkBlue>: Which of these{" "}
                <Bold>systems do you play?</Bold>
              </FormQuestion>
              <Flex justifyContent="center">
                <ErrorMessage visible={this.state.errorVisible}>
                  Please Select At Least One
                </ErrorMessage>
              </Flex>
              <ButtonContainer ml={70}>
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
              <RealText>
                REAL <br /> GAMES
              </RealText>
            </Box>
            <Box ml={50}>
              <RealText>
                REAL <br /> MONEY
              </RealText>
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
  margin-left: 70px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const ChalkBlue = styled.span`
  color: #0898FA;
  letter-spacing: 4px;
`;

const RealText = styled.p`
  color: #f7f7f7;
  margin-top: 0px;
  font-size: 56px;
  font-weight: bold;
`;

const Label = styled.label``;

const Input = styled.input`
  display: none;
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
  flex-direction: row;
  align-items: center;
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
  cursor: pointer;
  outline:none;
  opacity: 0;
  visibiliy: hidden;
  transition: all 0.2s ease-in-out;
  font-family: Montserrat;
  font-weight: bold;
  &:hover {
    background: #aeb2b5;
    transform: scale(1.1);
  }
  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

const PS4Controller = styled.img`
  width: 230.49px;
  height: 153.74px;
  transform: rotate(16deg);
  cursor: pointer;
  transition: all 200ms ease-out;
  filter: grayscale(100%);
  margin-left: 100px;
  &:hover {
    filter: grayscale(50%);
  }
  ${(props) =>
    props.highlight &&
    css`
      filter: grayscale(0%);
      transform: rotate(0deg);
    `}
`;

const XBOXController = styled.img`
  width: 230.49px;
  height: 153.74px;
  transform: rotate(-16deg);
  cursor: pointer;
  transition: all 200ms ease-out;
  filter: grayscale(100%);
  margin-left: 45px;
  &:hover {
    filter: grayscale(50%);
  }
  ${(props) =>
    props.highlight &&
    css`
      filter: grayscale(0%);
      transform: rotate(0deg);
    `}
`;
