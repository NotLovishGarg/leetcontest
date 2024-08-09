// src/components/ContestForm.js
import React, { useState } from 'react';

function ContestForm({ onSubmit }) {
  const [questions, setQuestions] = useState('');
  const [timeLimit, setTimeLimit] = useState(60);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ questions: questions.split(','), timeLimit });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Questions (comma separated):</label>
        <input
          type="text"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Time Limit (in minutes):</label>
        <input
          type="number"
          value={timeLimit}
          onChange={(e) => setTimeLimit(e.target.value)}
          required
        />
      </div>
      <button type="submit">Start Contest</button>
    </form>
  );
}

export default ContestForm;
