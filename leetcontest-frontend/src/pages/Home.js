// src/pages/Home.js
import React from 'react';
import ContestForm from '../components/ContestForm';

function Home() {
  const startContest = (contestDetails) => {
    console.log('Contest Started:', contestDetails);
    // You can navigate to the contest page or handle state here
  };

  return (
    <div>
      <h1>Welcome to the Custom LeetCode Contest Creator</h1>
      <ContestForm onSubmit={startContest} />
    </div>
  );
}

export default Home;
