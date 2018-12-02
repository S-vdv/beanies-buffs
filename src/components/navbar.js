import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  margin: 0;
  background: #85b885;
`;

const List = styled.ul`
	margin:0;
  display: flex;
  list-style: none;
`;

const ListItem = styled.li`
	margin: 0;
  padding: 2em;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <List>
        <ListItem href="#">Home</ListItem>
        <ListItem href="#">Beanies</ListItem>
        <ListItem href="#">Buff's</ListItem>
        <ListItem href="#">About</ListItem>
        <ListItem href="#">Contact</ListItem>
      </List>
    </StyledNav>
  );
};

export default Navbar;
