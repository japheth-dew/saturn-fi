import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton>{props.text}</StyledButton>;
};
const StyledButton = styled.button`
  width: 309px;
  height: 49px;
  background: #5465ff;
  box-shadow: 0px 10px 24px #99a3ff;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  border: none;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    background: #99a3ff;
  }
`;

export default Button;
