import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage'; // Uncomment this line if you want to show the LandingPage
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import SearchBar from './SearchBar';
import Footer from './Footer';
import './App.css';

const dummyReviews = [
  { id: 1, rating: 4, comment: 'Great product!', user: 'John Doe' },
  { id: 2, rating: 5, comment: 'Highly recommended!', user: 'Jane Smith' },
  { id: 3, rating: 3, comment: 'Average product.', user: 'Bob Johnson' },
];

// Placeholder function for handleSearch
const handleSearch = (searchText) => {
  console.log('Searching for:', searchText);
};

function App() {
  return (
    <div className="App">
      <LandingPage /> {/* Uncomment this line if you want to show the LandingPage */}
      <Navbar />
      <div className="content">
        <Login />
        <Register />
        <Profile />
        <ReviewList reviews={dummyReviews} />
        <ReviewForm />
        <SearchBar onSearch={handleSearch} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
