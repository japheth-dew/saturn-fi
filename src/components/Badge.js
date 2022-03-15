import React from 'react';
import styled from 'styled-components';


const Badge = (props) => {
  return (
    <StyledBadge>{props.text}</StyledBadge>
  )
}

const StyledBadge = styled.div`
  align-items: center;
  padding: 3px 7px;
  background: #e9fafc;
  border-radius: 15px;
  color: #5465ff;
  font-size: 0.6rem;
  position: static;
  margin: 0 .5rem;
  width: 4.5rem;
  text-align: center;

 
`;


export default Badge