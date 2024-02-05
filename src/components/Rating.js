import React from 'react'
import './Rating.css'
export default function Rating({ rating }) {
     const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  // Create an array of stars to display
  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<span key={i} className="star-filled">&#9733;</span>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={filledStars + i} className="star-empty">&#9733;</span>);
  }

  return (
    <div className="star-rating">
      {stars}
      <p style={{fontSize:"12px",color:"black",textAlign:"center"}}>({rating})</p>
    </div>
  );
  
}
