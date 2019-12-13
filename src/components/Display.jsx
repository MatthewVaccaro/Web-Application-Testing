import React, { useState } from "react";

export const Display = props => {
  return (
    <div>
      <h2>Strikes: {props.strikes} </h2>
      <h2>Balls: {props.balls} </h2>
    </div>
  );
};
