import React from 'react';

interface StaticStarRatingProps {
  rating: number; // Static rating to display
  totalStars?: number; // Total number of stars (default is 5)
}

const StaticStarRating: React.FC<StaticStarRatingProps> = ({ rating, totalStars = 5 }) => {
  // Render a star as filled or unfilled based on the rating
  const renderStar = (starIndex: number) => {
    const isFilled = starIndex <= rating;

    return (
      <span
        key={starIndex}
        style={{
          color: isFilled ? '#FFD700' : '#e4e5e9', // Gold for filled, gray for unfilled
          fontSize: '2rem',
        }}
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

export default StaticStarRating;
