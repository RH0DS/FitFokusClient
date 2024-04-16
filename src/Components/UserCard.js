import React from "react";

const UserCard = ({ name, startWeight, currentWeight, waistWidth }) => {
  // Calculate the percentage change in weight
  const weightChange = ((currentWeight - startWeight) / startWeight) * 100;

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <div className="user-info">
        <p>Start Weight: {startWeight} kg</p>
        <p>Current Weight: {currentWeight} kg</p>
        <p>Waist Width: {waistWidth} cm</p>
        <p>Weight Change: {weightChange.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default UserCard;
