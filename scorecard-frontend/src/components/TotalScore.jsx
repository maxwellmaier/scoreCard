import React from "react";

const TotalScore = ({ scores, pars }) => {
  // Calculate the total score as the sum of scores minus the sum of pars
  const total = scores.reduce((sum, score) => sum + score, 0) - pars.reduce((sum, par) => sum + par, 0);

  return (
    <div>
      <h3>Total Score: {total}</h3>
    </div>
  );
};

export default TotalScore;
