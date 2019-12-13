import React from "react";

export const Dashboard = props => {
  return (
    <div>
      <button onClick={props.addStrike}> Strike </button>
      <button onClick={props.addBall}>Ball</button>
      <button onClick={props.addFoul}>Foul</button>
      <button onClick={props.addHit}>Hit</button>
    </div>
  );
};
