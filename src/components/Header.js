import React from "react";
import styled from "styled-components";
import HeaderBg from "./HeaderBg";
import HeaderContents from "./HeaderContents";
import wave from "../img/wave.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderBg>
        <HeaderContents />
      </HeaderBg>
      <div className="wave">
        <img src={wave} alt="wave" />
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  .wave {
    margin-top: 80vh;
  }

  .wave img {
    width: 100%;
//     height: 10rem;
  }

  @media (max-width: 1024px){
    // margin-top: 90vh;
  }
  
  @media (max-width: 480px){
  .wave {
    margin-top: 60vh;
    margin-bottom: 14rem;
  }
}
`;

export default Header;
