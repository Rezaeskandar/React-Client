import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none; /* Remove the bullets */
  padding-left: 1em;
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin-right: 10px;
  font-weight: bold;

  &:hover {
    color: #a9c04f;
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <nav>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/Movies">Movies</StyledLink>
          </li>
        </NavList>
      </nav>
    </NavContainer>
  );
};

export default Nav;
