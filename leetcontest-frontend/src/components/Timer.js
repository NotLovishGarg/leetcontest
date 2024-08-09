// src/components/Timer.js
import React, { useState, useEffect } from 'react';

function Timer({ timeLimit, onEnd }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit * 60);

  useEffect(() => {
    if (timeLeft === 0) {
      onEnd();
    } else {
      const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft, onEnd]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h2>
        Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h2>
    </div>
  );
}

export default Timer;
