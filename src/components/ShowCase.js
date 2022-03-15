import React from "react";
import styled from "styled-components";
import showcaseImg from "../img/showcaseImg.svg";
import showcaseImg2 from "../img/showcaseImg2.svg";
import Button from "./Button";
import { Link } from "react-scroll";

const ShowCase = () => {
  return (
    <StyledShowCase>
      <div className="showcase">
        <div className="showcaseImg1">
          <img src={showcaseImg} alt="prices" />
        </div>
        <div className="middle-content">
          <h1>
            Saturn Fi is the world’s leading financial automation service
            provider.
          </h1>

          <p>Automate financial transactions, Trade P2P, and do lots more.</p>

          <Link to="form" smooth={true} duration={1000}>
            <Button text="Contact Us" />
          </Link>
        </div>

        <div className="showcaseImg2 ">
          <img src={showcaseImg2} alt="prices" />
        </div>
      </div>
    </StyledShowCase>
  );
};

const StyledShowCase = styled.section`
 .showcase{
   margin: 5rem 0 0 0;
    display: flex;
    align-items: top;
    text-align: center;
} 

  

  .showcase .middle-content p {
    color: #000F99;
    padding: 1.5rem 0;
    font-weight; bold;
  }

  .showcase .middle-content h1{
    font-size: 2.4rem;
  }
  .showcase .showcaseImg1 {
    padding-top: 4rem;
  }

  @media (max-width: 1200px){
    
    .showcaseImg1{
      display: none;
    }

    .showcase .middle-content{
      text-align: left;
    }

  }

  @media (max-width: 768px){
    .showcase{
   margin: 2rem 0 0 0;
    }
    .showcase .middle-content h1{
    font-size: 2rem;
    }

    .showcase .middle-content{
      text-align: center;
    }
     .showcaseImg2{
      display: none;
    }
  }
`;

export default ShowCase;
