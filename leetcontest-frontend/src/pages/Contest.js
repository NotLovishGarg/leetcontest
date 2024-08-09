// src/pages/Contest.js
import React from 'react';
import Timer from '../components/Timer';

function Contest() {
  const handleContestEnd = () => {
    alert('Contest ended!');
  };

  return (
    <div>
      <h1>Your Contest</h1>
      <Timer timeLimit={60} onEnd={handleContestEnd} />
      {/* You can add question display logic here */}
    </div>
  );
}

export default Contest;
