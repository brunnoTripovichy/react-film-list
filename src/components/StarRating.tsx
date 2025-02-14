import type React from 'react';
import Star from './Star';
import { useState } from 'react';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const startContainerStyle = {
  display: 'flex',
};

export interface StartRatingProps {
  maxRating: number;
  color: string;
  size: string;
  onSetRating: (rating: number) => void;
}

const StartRating: React.FC<StartRatingProps> = ({
  maxRating = 5,
  color = '#fcc419',
  size = '2rem',
  onSetRating,
}) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const textStyles = {
    lineHeight: '1',
    margin: '0',
    fontSize: size,
    color: color,
  };

  const handleRating = (rating: number) => {
    setRating(rating);
    onSetRating(rating);
  };

  return (
    <div style={containerStyle}>
      <div style={startContainerStyle}>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index}
            onRate={() => handleRating(index + 1)}
            onHoverIn={() => setHoverRating(index + 1)}
            onHoverOut={() => setHoverRating(0)}
            selected={hoverRating > 0 ? index < hoverRating : index < rating}
          />
        ))}
      </div>
      <p style={textStyles}>{hoverRating || rating || ''}</p>
    </div>
  );
};

export default StartRating;
