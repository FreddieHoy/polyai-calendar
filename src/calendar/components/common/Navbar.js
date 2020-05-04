import React from 'react';
import styled from 'styled-components';

import { NavItem, HeadingOne } from 'calendar/config/FontStyles';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid black;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Navbar = () => (
  <Container>
    <HeadingOne>PolyAI Calendar</HeadingOne>
    <NavContainer>
      <StyledLink to="/">
        <NavItem>Home page</NavItem>
      </StyledLink>
      <StyledLink to="/about">
        <NavItem>About Page</NavItem>
      </StyledLink>
    </NavContainer>
  </Container>
);

export default Navbar;
