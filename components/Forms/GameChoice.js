import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";

// components
import BackButton from "../Button/BackButton";
import ApexLogo from "../../public/static/svgs/Apex_Logo.svg";
import R6SLogo from "../../public/static/svgs/R6S_Logo.svg";
import FortniteLogo from "../../public/static/svgs/Fortnite_Logo.svg";
import CoDLogo from "../../public/static/svgs/CoD_Logo.svg";

export default class GameChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      input: "",
      form: false,
      isApex: false,
      isFortnite: false,
      isR6: false,
      isCoD: false,
      errorVisible: false,
    };
  }
  toggleApex = () => {
    const { isApex } = this.state;
    this.setState({
      isApex: !isApex,
    });
  };
  toggleFortnite = () => {
    const { isFortnite } = this.state;
    this.setState({
      isFortnite: !isFortnite,
    });
  };
  toggleR6 = () => {
    const { isR6 } = this.state;
    this.setState({
      isR6: !isR6,
    });
  };
  toggleCoD = () => {
    const { isCoD } = this.state;
    this.setState({
      isCoD: !isCoD,
    });
  };
  toggleApexChange = (e) => {
    this.props.onApexChange(e.target.value);
  };
  toggleFortniteChange = (e) => {
    this.props.onFortniteChange(e.target.value);
  };
  toggleR6Change = (e) => {
    this.props.onR6Change(e.target.value);
  };
  toggleCoDChange = (e) => {
    this.props.onCoDChange(e.target.value);
  };
  submitValue = () => {
    if (
      this.state.isApex ||
      this.state.isFortnite ||
      this.state.isR6 ||
      this.state.isCoD
    ) {
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
              <Flex justifyContent="space-between">
                <Box>
                  <Input
                    type="checkbox"
                    id="CoD"
                    value={this.props.CoD}
                    onChange={(e) => this.toggleCoDChange(e)}
                  ></Input>
                  <Label for="CoD">
                    <CallofDuty
                      onClick={this.toggleCoD}
                      highlight={this.state.isCoD}
                    />
                  </Label>
                </Box>

                <Box alignSelf="center" ml={3}>
                  <Input
                    type="checkbox"
                    id="fortnite"
                    value={this.props.fortnite}
                    onChange={(e) => this.toggleFortniteChange(e)}
                  ></Input>
                  <Label for="fortnite">
                    <Fortnite
                      onClick={this.toggleFortnite}
                      highlight={this.state.isFortnite}
                    />
                  </Label>
                </Box>
              </Flex>
              <Flex justifyContent="space-evenly" mt={30} ml={-30}>
                <Box>
                  <Input
                    type="checkbox"
                    id="r6"
                    value={this.props.r6}
                    onChange={(e) => this.toggleR6Change(e)}
                  ></Input>
                  <Label for="r6">
                    <RainbowSix
                      onClick={this.toggleR6}
                      highlight={this.state.isR6}
                    />
                  </Label>
                </Box>

                <Box>
                  <Input
                    type="checkbox"
                    id="apex"
                    value={this.props.apex}
                    onChange={(e) => this.toggleApexChange(e)}
                  ></Input>
                  <Label for="apex">
                    <Apex
                      onClick={this.toggleApex}
                      highlight={this.state.isApex}
                    />
                  </Label>
                </Box>
              </Flex>
              <FormQuestion>
                <ChalkBlue>4/7</ChalkBlue>: Which of these games do you play?
              </FormQuestion>
              <Flex justifyContent="center">
                <ErrorMessage visible={this.state.errorVisible}>
                  Please Select At Least One
                </ErrorMessage>
              </Flex>
              <ButtonContainer ml={12}>
                <BackButton
                  onClick={() => {
                    this.props.goBack();
                  }}
                />
                <NextButton
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
  margin-left: 12px;
`;
const Input = styled.input`
  display: none;
`;

const ChalkBlue = styled.span`
  color: #0898FA;
  letter-spacing: 4px;
`;

const Label = styled.label``;
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

const Apex = styled(ApexLogo)`
  height: 77px;
  width: 119.65px;
  transition: all 200ms ease-out;
  filter: grayscale(100%);
  padding: 10px;
  cursor: pointer;
  &:hover {
    filter: grayscale(50%);
  }
  ${(props) =>
    props.highlight &&
    css`
      filter: grayscale(0%);
    `}
`;
const Fortnite = styled(FortniteLogo)`
  height: 50.6px;
  transition: all 200ms ease-out;
  filter: grayscale(100%);
  padding: 10px;
  cursor: pointer;
  &:hover {
    filter: grayscale(50%);
  }
  ${(props) =>
    props.highlight &&
    css`
      filter: grayscale(0%);
    `}
`;
const RainbowSix = styled(R6SLogo)`
  height: 66.47px;
  transition: all 200ms ease-out;
  filter: grayscale(100%);
  padding: 10px;
  cursor: pointer;
  &:hover {
    filter: grayscale(50%);
  }
  ${(props) =>
    props.highlight &&
    css`
      filter: grayscale(0%);
    `}
`;
const CallofDuty = styled(CoDLogo)`
  height: 50px;
  transition: all 200ms ease-out;
  filter: grayscale(100%);
  padding: 10px;
  cursor: pointer;
  &:hover {
    filter: grayscale(50%);
  }
  ${(props) =>
    props.highlight &&
    css`
      filter: grayscale(0%);
    `}
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
  cursor: pointer;
  font-family: Montserrat;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  margin-left: 12px;
  outline:none;
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
