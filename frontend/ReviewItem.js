import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <div>
      <h3>Rating: {review.rating}</h3>
      <p>Comment: {review.comment}</p>
      <p>User: {review.user}</p>
    </div>
  );
};

export default ReviewItem;
