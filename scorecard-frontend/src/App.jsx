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
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle form submission
 const handleSubmit = () => {
   const totalScore =
     scores.reduce((sum, score) => sum + score, 0) -
     pars.reduce((sum, par) => sum + par, 0);

   const data = {
     playerName,
     courseName,
     pars,
     scores,
     totalScore,
   };

   // Use the environment variable for the backend URL
   axios
     .post(`${process.env.REACT_APP_BACKEND_URL}/api/rounds`, data)
     .then((response) => {
       console.log("Round submitted successfully", response.data);
       setErrorMessage(""); // Clear error if successful
     })
     .catch((error) => {
       console.error("Error submitting round", error);
       setErrorMessage("Failed to submit round. Please try again."); // Set error message
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

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default App;
