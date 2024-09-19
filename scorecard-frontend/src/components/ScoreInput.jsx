import React, { useState } from "react";

const ScoreInput = ({ numHoles, setScores, setPars }) => {
  const [scores, updateScores] = useState(Array(numHoles).fill(3));
  const [pars, updatePars] = useState(Array(numHoles).fill(3));

  // Update scores state when user changes a score input
  const handleScoreChange = (index, value) => {
    const newScores = [...scores];
    newScores[index] = parseInt(value || 0, 10);
    updateScores(newScores);
    setScores(newScores); // Update parent component with new scores
  };

  // Update pars state when user changes a par input
  const handleParChange = (index, value) => {
    const newPars = [...pars];
    newPars[index] = parseInt(value || 0, 10);
    updatePars(newPars);
    setPars(newPars); // Update parent component with new pars
  };

  return (
    <div>
      <h2>Enter Your Scores and Pars</h2>
      {Array.from({ length: numHoles }, (_, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <label>Hole {index + 1}: </label>
          <input
            type="number"
            value={pars[index]}
            onChange={(e) => handleParChange(index, e.target.value)}
            min="0"
            placeholder="Par"
            style={{ marginRight: "10px" }}
          />
          <input
            type="number"
            value={scores[index]}
            onChange={(e) => handleScoreChange(index, e.target.value)}
            min="0"
            placeholder="Score"
          />
        </div>
      ))}
    </div>
  );
};

export default ScoreInput;
