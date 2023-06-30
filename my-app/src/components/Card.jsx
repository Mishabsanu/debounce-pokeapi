
import React from 'react'

const Card = ({ name, height, weight }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
    </div>
  );
}

export default Card
