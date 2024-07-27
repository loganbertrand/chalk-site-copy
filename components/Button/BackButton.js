import React from "react";
import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <Icon icon={faArrowLeft} />
    </Button>
  );
};

export default BackButton;

// styles

const Button = styled.button`
  border: none;
  color: black;
  background: #494A50;
  width: 46px;
  height: 46px;
  border-radius: 100px;
  font-size: 20px;
  margin-top: 30px;
  margin-right: 20px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  outline:none;
  &:hover {
    background: #606166;
    transform: scale(1.1);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: #2D2E2F;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;
