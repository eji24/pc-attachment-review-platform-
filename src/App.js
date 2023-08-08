import React, { useState } from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import SearchBar from './SearchBar';
import Footer from './Footer';
import './App.css';

const dummyReviews = [
  {
    id: 1,
    rating: 4.5,
    comment: 'Great product! Works as expected.',
    user: 'JohnDoe',
  },
  {
    id: 2,
    rating: 3.8,
    comment: 'Decent quality but could be better.',
    user: 'JaneSmith',
  },
  // Add more dummy reviews here...
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleHomeClick = () => {
    if (isLoggedIn) {
      setSearchResults([]); // Clear search results
    } else {
      setIsLoggedIn(true); // Toggle isLoggedIn state
    }
  };

  const handleReviewsClick = () => {
    console.log('Reviews button clicked!');
  };

  const handleSearch = (searchTerm) => {
    const filteredReviews = dummyReviews.filter((review) =>
      review.comment.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredReviews);
  };

  return (
    <div className="App">
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onReviewsClick={handleReviewsClick}
        onHomeClick={handleHomeClick}
      />
      <div className="content">
        {isLoggedIn ? (
          <>
            <Profile />
            {searchResults.length > 0 ? (
              <ReviewList reviews={searchResults} />
            ) : (
              <ReviewList reviews={dummyReviews} />
            )}
            <ReviewForm />
          </>
        ) : (
          <>
            <LandingPage />
            <Login onLogin={handleLogin} />
            <Register />
          </>
        )}
        <SearchBar onSearch={handleSearch} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
