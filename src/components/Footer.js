import React from "react";
import styled from "styled-components";
import FooterContents from "./FooterContents";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContents />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: #00031a;
  padding: 3rem 5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
`;

export default Footer;
