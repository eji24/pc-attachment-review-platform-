import React from 'react';

function Navbar({ isLoggedIn, onLogout, onReviewsClick, onHomeClick }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <button onClick={() => onHomeClick()}>Home</button>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <button onClick={() => onLogout()}>Logout</button>
            </li>
            <li>
              <button onClick={() => onReviewsClick()}>Reviews</button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={() => {}}>Login</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
