import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: #c7e7f5;
  color: #000000;
  padding: 15px 37px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #aac8d4;
  }
`;

const Button = ({ children, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default Button;
