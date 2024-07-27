import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";

// components
import BackButton from "../../Button/BackButton";

export default class MobileForm3 extends React.Component {
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
    if (this.state.show === false) {
      this.setState({ show: true });
    }
  };
  toggleXbox = () => {
    const { isXbox } = this.state;
    this.setState({
      isXbox: !isXbox,
    });
    this.toggleButton();
  };
  togglePS4 = () => {
    const { isPS4 } = this.state;
    this.setState({
      isPS4: !isPS4,
    });
    this.toggleButton();
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
        <FormFlex justifyContent="center" alignItems="center">
          <Box>
            <FormQuestion>
              Which of these{" "}
              <Bold>
                systems <br /> do you play?
              </Bold>
            </FormQuestion>
            <Flex flexDirection="column" alignItems="center">
              <ImageBox mt={10}>
                <Input
                  type="checkbox"
                  id="xbox"
                  value={this.props.xbox}
                  onChange={(e) => this.toggleXboxChange(e)}
                ></Input>
                <Label for="xbox">
                  <XBOXController
                    src={require("../../../public/static/images/xbox-controller.png")}
                    onClick={() => {
                      this.toggleXbox();
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
                    src={require("../../../public/static/images/ps4-controller.png")}
                    onClick={() => {
                      this.togglePS4();
                    }}
                    highlight={this.state.isPS4}
                  />
                </Label>
              </ImageBox>
            </Flex>
            <Flex justifyContent="center">
              <ErrorMessage visible={this.state.errorVisible}>
                Please Select At Least One
              </ErrorMessage>
            </Flex>

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
const ImageBox = styled(Box)`
  position: relative;
`;

const FormQuestion = styled.p`
  font-size: 24px;
  color: white;
  text-align: center;
  @media (max-width: 360px) {
    font-size: 19px;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label``;
const ErrorMessage = styled.div`
  width: 220px;
  text-align: center;
  padding: 8px;
  margin-bottom: 5px;
  visibiliy: hidden;
  opacity: 0;
  background-color: #f4747e;
  border-radius: 10px 10px 10px 10px;
  @media (max-width: 360px) {
    margin-top: 0px;
    margin-bottom: 5px;
    width: 200px;
  }
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
  background: white;
  width: 130px;
  height: 40px;
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  visibiliy: hidden;
  transition: all 200ms ease-out;
  margin-top: 30px;
  @media (max-width: 360px) {
    margin-top: 0px;
  }
  font-family: Montserrat;
  font-weight: bold;
  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

const PS4Controller = styled.img`
  position: absolute;
  width: 190.81px;
  height: 125.6px;
  left: 20px;
  transform: rotate(16deg);
  cursor: pointer;
  filter: grayscale(100%);
  margin-left: 80px;
  transition: all 200ms ease-out;
  @media (max-width: 360px) {
    width: 152px;
    height: 101px;
    left: 0px;
  }
  ${(props) =>
    props.highlight &&
    css`
      filter: grayscale(0%);
      transform: rotate(0deg);
    `}
`;

const XBOXController = styled.img`
  position: relative;
  width: 190.81px;
  height: 125.6px;
  right: 100px;
  transform: rotate(-16deg);
  cursor: pointer;
  filter: grayscale(100%);
  transition: all 200ms ease-out;
  @media (max-width: 360px) {
    width: 152px;
    height: 101px;
    right: 80px;
  }
  ${(props) =>
    props.highlight &&
    css`
      filter: grayscale(0%);
      transform: rotate(0deg);
    `}
`;
