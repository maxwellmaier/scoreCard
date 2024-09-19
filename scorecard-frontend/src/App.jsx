import React, { useState } from "react";
import axios from "axios";
import ScoreInput from "./components/ScoreInput";
import TotalScore from "./components/TotalScore";

function App() {
  const [scores, setScores] = useState([]); // State for scores
  const [pars, setPars] = useState([]); // State for pars
  const numHoles = 18; // Example: 18 holes
  const [playerName, setPlayerName] = useState("");
  const [courseName, setCourseName] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    // Calculate the total score by subtracting total par from total strokes
    const totalScore = scores.reduce((sum, score) => sum + score, 0) - pars.reduce((sum, par) => sum + par, 0);

    const data = {
      playerName,
      courseName,
      pars,
      scores,
      totalScore,
    };

    axios
      .post("/api/rounds", data)
      .then((response) => {
        console.log("Round submitted successfully", response.data);
      })
      .catch((error) => {
        console.error("Error submitting round", error);
      });
  };

  return (
    <div className="App">
      <h1>Golf Scorecard</h1>

      <div>
        <label>Player Name: </label>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </div>

      <div>
        <label>Course Name: </label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </div>

      {/* Passing setScores and setPars to ScoreInput */}
      <ScoreInput numHoles={numHoles} setScores={setScores} setPars={setPars} />
      <TotalScore scores={scores} pars={pars} />

      <button onClick={handleSubmit}>Submit Round</button>
    </div>
  );
}

export default App;
