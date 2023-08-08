import React, { useState } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      id: Date.now(), // Use a unique identifier, here we use the current timestamp
      rating,
      comment,
      user: 'User XYZ', // Replace this with the actual user name or user ID
    };
    onAddReview(newReview);
    setRating(0);
    setComment('');
  };

  return (
    <div>
      <h2>Submit Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <input type="number" min="0" max="5" value={rating} onChange={handleRatingChange} />
        </div>
        <div>
          <label>Comment:</label>
          <textarea value={comment} onChange={handleCommentChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
