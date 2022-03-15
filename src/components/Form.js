import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <StyledForm id="form">
      <h2>We are more than happy to help out. </h2>
      <form>
        <div className="field">
          <label htmlFor="fullName">Full Name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            id="fullName"
          />
        </div>

        <div className="details">
          <div className="field space">
            <label htmlFor="mobileNo">Mobile No</label>
            <input
              value={mobileNo}
              onChange={(e) => setmobileNo(e.target.value)}
              className="space"
              type="number"
              id="mobileNo"
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Type in message"
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  width: 50%;
  margin: auto;

  form {
    padding: 10px;
    display: block;
    padding: 1rem;
  }

  button {
    padding: 10px 16px;
    margin: 1rem 0;
    background: #5465ff;
    border: none;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
      0px 8px 16px rgba(96, 97, 112, 0.16);
    border-radius: 15px;
    color: white;

    &:hover {
      background: green;
      cursor: pointer;
    }
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 137.18%;
    text-align: center;
    color: #00031a;
  }
  label {
    color: #333333;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }

  .field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .field input {
    margin: 10px 0;
    width: 100%;
    padding: 10px 16px;
    border-radius: 10px;
    border: 1px solid #bdbdbd;
  }

  .field textarea {
    width: 100%;
    height: 128px;
    border-radius: 10px;
    border: 1px solid #bdbdbd;
  }
  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .details .field {
    width: 90%;
  }

  .details .space {
    margin-right: 1rem;
  }

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
  @media (max-width: 768px) {
    width: 80%;
    h2 {
      font-size: 22px;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;
export default Form;
