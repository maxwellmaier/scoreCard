import React from "react";

const ScoreInput = ({ numHoles, scores, pars, setScores, setPars, currentHole, nextHole, previousHole }) => {
  const handleScoreChange = (value) => {
    const newScores = [...scores];
    newScores[currentHole] = parseInt(value || 0, 10);
    setScores(newScores);
  };

  const handleParChange = (value) => {
    const newPars = [...pars];
    newPars[currentHole] = parseInt(value || 0, 10);
    setPars(newPars);
  };

  return (
    <div>
      <h2>Hole {currentHole + 1}</h2>
      <div>
        <label>Par: </label>
        <input
          type="number"
          value={pars[currentHole]}
          onChange={(e) => handleParChange(e.target.value)}
          min="0"
          placeholder="Par"
          style={{ marginRight: "10px" }}
        />
        <label>Score: </label>
        <input
          type="number"
          value={scores[currentHole]}
          onChange={(e) => handleScoreChange(e.target.value)}
          min="0"
          placeholder="Score"
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={previousHole} disabled={currentHole === 0}>
          Previous
        </button>
        {/* Enable the Next button to function on the 18th hole */}
        <button onClick={nextHole} disabled={currentHole > numHoles - 1} style={{ marginLeft: "10px" }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ScoreInput;
