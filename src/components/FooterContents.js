import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";

const FooterContents = () => {
  return (
    <StyledFooterContent>
      <div className="content">
        <div className="right-content">
          <img src={logo} alt="logo" />
        </div>

        <div className="left-content">
          <div className="left-left-content">
            <ul>
              <li>
                <a href="#">Saturn Earn</a>
              </li>
              <li>
                <a href="#">Saturn Ramp</a>
              </li>
              <li>
                <a href="#">SDK/API Docs (coming soon)</a>
              </li>
              <li>
                <a href="#">Saturn Escrow Docs (coming soon)</a>
              </li>
            </ul>
          </div>
          <div className="right-left-content">
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-content">
        <p>&#169; 2022 SaturnFi. All Rights Reserved.</p>
        <p>info@saturn.co</p>
      </div>
    </StyledFooterContent>
  );
};

const StyledFooterContent = styled.section`
  font-size: 14px;

  .content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .left-content ul li {
    padding: 0.3rem;
  }
  .right-content p {
    font-size: 0.9rem;
  }
  .right-content img {
    width: 4rem;
  }

  .left-content {
    display: flex;
    justify-content: space-between;
  }

  .left-content .left-left-content {
    margin-right: 6rem;
  }

  .bottom-content {
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 0 0 0;
  }

  @media (max-width: 768px) {
    font-size: 12px;

    .left-content {
      flex-direction: column;
    }

    .left-content .left-left-content {
      margin-right: 0.5rem;
    }
    .bottom-content {
      flex-direction: column;
      text-align: center;
    }
  }
`;
export default FooterContents;
