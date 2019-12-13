import React, { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const addStrike = () => {
    if (strikes >= 2) {
      return setStrikes(0), setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const addBall = () => {
    if (balls >= 3) {
      return setBalls(0), setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const addFoul = () => {
    if (strikes < 2) {
      return setStrikes(strikes + 1);
    }
  };

  const addHit = () => {
    return setStrikes(0), setBalls(0);
  };

  return (
    <div className="home">
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        addStrike={addStrike}
        addBall={addBall}
        addFoul={addFoul}
        addHit={addHit}
      />
    </div>
  );
}

export default App;
