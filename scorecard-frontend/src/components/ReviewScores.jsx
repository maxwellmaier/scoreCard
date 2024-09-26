import React from "react";

const ReviewScores = ({ scores, pars, setScores, setPars, currentHole, onProceed, isFinalReview }) => {
  // Determine which holes to review based on the current review state
  const holesToReview = currentHole === 8 ? scores.slice(0, 9) : scores; // Review holes 1-9 or the entire scorecard

  const handleScoreChange = (index, value) => {
    const newScores = [...scores];
    newScores[index] = parseInt(value || 0, 10);
    setScores(newScores);
  };

  const handleParChange = (index, value) => {
    const newPars = [...pars];
    newPars[index] = parseInt(value || 0, 10);
    setPars(newPars);
  };

  return (
    <div>
      <h2>{currentHole === 8 ? "Review Holes 1-9" : "Review Full Scorecard"}</h2>
      {/* Table Headers */}
      <div style={{ display: "flex", marginBottom: "10px", fontWeight: "bold" }}>
        <div style={{ flex: 1 }}>Hole #</div>
        <div style={{ flex: 1 }}>Par</div>
        <div style={{ flex: 1 }}>Score</div>
      </div>
      {holesToReview.map((score, index) => (
        <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
          <div style={{ flex: 1 }}>Hole {index + 1}</div>
          <input
            type="number"
            value={pars[index]}
            onChange={(e) => handleParChange(index, e.target.value)}
            min="0"
            placeholder="Par"
            style={{ flex: 1, marginRight: "10px" }}
          />
          <input
            type="number"
            value={scores[index]}
            onChange={(e) => handleScoreChange(index, e.target.value)}
            min="0"
            placeholder="Score"
            style={{ flex: 1 }}
          />
        </div>
      ))}
      <button onClick={onProceed} style={{ marginTop: "20px" }}>
        {isFinalReview ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default ReviewScores;
