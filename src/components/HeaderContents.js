import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import ShowCase from "./ShowCase";

const HeaderContents = () => {
  return (
    <StyledHeaderContents>
      <Navigation />
      <ShowCase />
      
    </StyledHeaderContents>
  );
};

const StyledHeaderContents = styled.div`
  margin: 2rem 7rem;


  @media screen and (max-width: 1024px) {
    margin: 2rem 5rem;
  }

  @media screen and (max-width: 480px) {
    margin: 1rem 2rem;
  }
`;

export default HeaderContents;
