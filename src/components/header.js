import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background: #b88585;
	text-align: center;
	margin: 0;
	padding: 1em;
	height: 9em; 
`;

const Styledh1 = styled.h1`
	margin: 0;
  font-size: 4em;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Styledh1>Beanies & Buff's</Styledh1>
    </StyledHeader>
  );
};
export default Header;
