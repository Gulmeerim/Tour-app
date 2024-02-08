import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <p>Manas 🇰🇬 Tours</p>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  & p {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
    background-color: #333;
    padding: 5px 10px;
  }
`;
