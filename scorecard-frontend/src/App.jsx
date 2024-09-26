import React, { useState } from "react";
import axios from "axios";
import ScoreInput from "./components/ScoreInput";
import TotalScore from "./components/TotalScore";
import ReviewScores from "./components/ReviewScores"; // Component for mid-round and final reviews
import './styles.css';

function App() {
  const [scores, setScores] = useState(Array(18).fill(3)); // Default scores to 3
  const [pars, setPars] = useState(Array(18).fill(3)); // Default pars to 3
  const [currentHole, setCurrentHole] = useState(0); // State to manage current hole view
  const [playerName, setPlayerName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showReview, setShowReview] = useState(false); // State to control when to show review
  const [isFinalReview, setIsFinalReview] = useState(false); // State to differentiate final review

  // Function to handle form submission
  const handleSubmit = () => {
    const totalScore = scores.reduce((sum, score) => sum + score, 0) - pars.reduce((sum, par) => sum + par, 0);

    const data = {
      playerName,
      courseName,
      pars,
      scores,
      totalScore,
    };

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

  const nextHole = () => {
    if (currentHole === 8) {
      // Trigger mid-round review after the 9th hole
      setShowReview(true);
      setIsFinalReview(false);
    } else if (currentHole === 17) {
      // Trigger final review after the 18th hole
      setShowReview(true);
      setIsFinalReview(true);
    } else if (currentHole < 17) {
      setCurrentHole(currentHole + 1);
    }
  };

  const previousHole = () => {
    if (currentHole > 0) setCurrentHole(currentHole - 1);
  };

  const proceedAfterReview = () => {
    if (isFinalReview) {
      // Hide the review to enable the submit button after the final review
      setShowReview(false);
    } else {
      // Continue to the 10th hole after the mid-review
      setShowReview(false);
      setCurrentHole(9);
    }
  };

  return (
    <div className="App">
      <h1>Scorecard</h1>

      <div>
        <label>Player Name: </label>
        <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
      </div>

      <div>
        <label>Course Name: </label>
        <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
      </div>

      {showReview ? (
        // Display review screen when `showReview` is true
        <ReviewScores
          scores={scores}
          pars={pars}
          setScores={setScores}
          setPars={setPars}
          currentHole={currentHole}
          onProceed={proceedAfterReview}
          isFinalReview={isFinalReview} // Pass final review state
        />
      ) : (
        <>
          <ScoreInput
            numHoles={18}
            scores={scores}
            pars={pars}
            setScores={setScores}
            setPars={setPars}
            currentHole={currentHole}
            nextHole={nextHole}
            previousHole={previousHole}
          />
          <TotalScore scores={scores} pars={pars} />
        </>
      )}

      {isFinalReview && !showReview && (
        // Display submit button only at the end of the final review
        <button onClick={handleSubmit}>Submit Round</button>
      )}

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default App;
