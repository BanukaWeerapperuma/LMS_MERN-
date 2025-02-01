import React from 'react'
import { useState, useEffect } from 'react';

const Rating = ({initialRating, onRatingChange}) => {

  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (starValue) => {
    setRating(starValue);
    if (onRatingChange) {
      onRatingChange(starValue);
    }
  }

  useEffect(() => {
    if(initialRating){
      setRating(initialRating);
    }
  }, [initialRating]);


  return (
    <div>
      {Array.from({length: 5}, (_, index) =>{
        const starValue = index + 1;
        return (
          <span key={index} className={`text-xl sm:text-2xl cursor-pointer transition-colors ${starValue <= rating  ? 'text-yellow-500' : 'text-gray-400'}`}
          onClick={() => handleStarClick(starValue)}>
            &#9733;
          </span>
        )
      } )}
    </div>
  )
}

export default Rating
