import React, { useState } from 'react';

interface StarRatingProps {
  totalStars?: number; // total number of stars in the rating component
  initialRating?: number; // initial selected rating
  onRatingChange?: (rating: number) => void; 
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  // Handles the rating selection
  const handleRating = (newRating: number) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  // Renders individual star
  const renderStar = (starIndex: number) => {
    const isFilled = hoverRating >= starIndex || rating >= starIndex;

    return (
      <span
        key={starIndex}
        style={{
          cursor: 'pointer',
          color: isFilled ? '#FFD700' : '#e4e5e9', // gold for filled stars, light gray for empty stars
          fontSize: '2rem',
        }}
        onClick={() => handleRating(starIndex)}
        onMouseEnter={() => setHoverRating(starIndex)}
        onMouseLeave={() => setHoverRating(0)}
      >
        ★
      </span>
    );
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => renderStar(index + 1))}
    </div>
  );
};

export default StarRating;
