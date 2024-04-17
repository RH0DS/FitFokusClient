import React from "react";

import "../UserCard.css";

const UserCard = ({ name, startWeight, currentWeight, waistWidth }) => {
  // Calculate the percentage change in weight
  const weightChange = ((currentWeight - startWeight) / startWeight) * 100;

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <div className="user-info">
        <div>
          <p><strong>Start Vikt:</strong></p>
          <p>{startWeight} kg</p>
        </div>
        <div> 
          <p><strong>Nuvarande Vikt:</strong></p>
          <p>{currentWeight} kg</p>
        </div>
        <div>
          <p><strong>Midjemått:</strong></p>
          <p>{waistWidth} cm</p>
        </div>
        <div>
          <p><strong>Vikt ändring:</strong></p>
          <p>{weightChange.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
