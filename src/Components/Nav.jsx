import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #333;
  padding: 10px;
  color: #fff;
`;

const NavTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #555;
  }
`;

function Nav() {
  return (
    <NavContainer>
     
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/movies">Movies</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
}

export default Nav;




