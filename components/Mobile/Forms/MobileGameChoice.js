import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";

// components
import ApexLogo from "../../../public/static/svgs/Apex_Logo.svg";
import R6SLogo from "../../../public/static/svgs/R6S_Logo.svg";
import FortniteLogo from "../../../public/static/svgs/Fortnite_Logo.svg";
import CoDLogo from "../../../public/static/svgs/CoD_Logo.svg";

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
    this.toggleButton = this.toggleButton.bind(this);
    this.toggleApex = this.toggleApex.bind(this);
    this.toggleFortnite = this.toggleFortnite.bind(this);
    this.toggleR6 = this.toggleR6.bind(this);
    this.toggleCoD = this.toggleCoD.bind(this);
  }
  toggleButton = () => {
    const { show } = this.state;

    if (this.state.show === false) {
      this.setState({ show: true });
    }
  };
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
        <FormFlex justifyContent="center" alignItems="center">
          <Box>
            <FormQuestion>Which of these games <br /> do you play?</FormQuestion>
            <ImageFlex justifyContent="space-around">
              <ImageBox>
                <Input
                  type="checkbox"
                  id="CoD"
                  value={this.props.CoD}
                  onChange={(e) => this.toggleCoDChange(e)}
                ></Input>
                <Label for="CoD">
                  <CallofDuty
                    onClick={() => {
                      this.toggleCoD();
                      this.toggleButton();
                    }}
                    highlight={this.state.isCoD}
                  />
                </Label>
              </ImageBox>
              <ImageBox alignSelf="center">
                <Input
                  type="checkbox"
                  id="fortnite"
                  value={this.props.fortnite}
                  onChange={(e) => this.toggleFortniteChange(e)}
                ></Input>
                <Label for="fortnite">
                  <Fortnite
                    onClick={() => {
                      this.toggleFortnite();
                      this.toggleButton();
                    }}
                    highlight={this.state.isFortnite}
                  />
                </Label>
              </ImageBox>
            </ImageFlex>
            <ImageFlex justifyContent="space-around">
              <ImageBox alignItems="center">
                <Input
                  type="checkbox"
                  id="r6"
                  value={this.props.r6}
                  onChange={(e) => this.toggleR6Change(e)}
                ></Input>
                <Label for="r6">
                  <RainbowSix
                    onClick={() => {
                      this.toggleR6();
                      this.toggleButton();
                    }}
                    highlight={this.state.isR6}
                  />
                </Label>
              </ImageBox>

              <ImageBox alignItems="center">
                <Input
                  type="checkbox"
                  id="apex"
                  value={this.props.apex}
                  onChange={(e) => this.toggleApexChange(e)}
                ></Input>
                <Label for="apex">
                  <Apex
                    onClick={() => {
                      this.toggleApex();
                      this.toggleButton();
                    }}
                    highlight={this.state.isApex}
                  />
                </Label>
              </ImageBox>
            </ImageFlex>

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
  padding-top: 170px;
`;
const ImageBox = styled(Box)``;
const ImageFlex = styled(Flex)``;
const FormQuestion = styled.p`
  font-size: 24px;
  color: white;
  text-align: center;
  @media (max-width: 360px) {
    font-size: 19px;
  }
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

const Apex = styled(ApexLogo)`
  height: 71.55px;
  max-width: 95.68px;
  transition: all 200ms ease-out;
  filter: grayscale(100%);
  padding: 10px;
  cursor: pointer;
  ${(props) =>
    props.highlight &&
    css`
      filter: grayscale(0%);
    `}
`;
const Fortnite = styled(FortniteLogo)`
  height: 57.13px;
  width: 132.74px;
  transition: all 200ms ease-out;
  filter: grayscale(100%);
  padding: 10px;
  cursor: pointer;
  ${(props) =>
    props.highlight &&
    css`
      filter: grayscale(0%);
    `}
`;
const RainbowSix = styled(R6SLogo)`
  height: 67.69px;
  width: 166.82px;
  transition: all 200ms ease-out;
  filter: grayscale(100%);
  padding: 10px;
  cursor: pointer;
  ${(props) =>
    props.highlight &&
    css`
      filter: grayscale(0%);
    `}
`;
const CallofDuty = styled(CoDLogo)`
  height: 50.46px;
  width: 144.13px;
  transition: all 200ms ease-out;
  filter: grayscale(100%);
  padding: 10px;
  cursor: pointer;
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
  margin-top: 20px;
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
  @media (max-width: 360px) {
    margin-top: 0px;
  }
  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;
