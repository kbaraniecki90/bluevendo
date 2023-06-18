import React from "react";
import styled from "styled-components";

const BaseButtonStyles = `
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: background-color .3s, color .3s ;
`;

const ButtonWrapper = styled.button`
  ${BaseButtonStyles}

  background-color: #c7e7f5;
  padding: 15px 37px;
  color: #000000;
  border: none;
  border-radius: 6px;
  font-size: 16px;

  &:hover {
    background-color: #aac8d4;
    color: #ffffff;
  }
`;

const LinkWrapper = styled.a`
  ${BaseButtonStyles}

  padding: 3.5px 18px;
  color: #3068de;
  font-weight: 600;

  &:hover {
    color: #2c5dc5;
  }
`;

const Button = ({ children, onClick, icon, type }) => {
  const WrapperComponent = type === "link" ? LinkWrapper : ButtonWrapper;

  return (
    <WrapperComponent onClick={onClick}>
      {children} {icon && <img src={icon} />}
    </WrapperComponent>
  );
};

export default Button;
