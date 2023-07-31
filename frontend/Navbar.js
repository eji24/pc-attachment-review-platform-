import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-start', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
        <li>
          <a href="#register">Register</a>
        </li>
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#search">Search</a>
        </li>
        <li>
          <a href="#footer">Footer</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
