// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

function Navbar() {
  return (
    <Nav>
      <h1>LeetCode Contest</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contest">Contest</Link>
      </div>
    </Nav>
  );
}

export default Navbar;
