import React from "react";

function PredictionList({ predictions }) {
  if (!predictions || !predictions.predictions) {
    return <p>No predictions yet.</p>;
  }

  return (
    <div>
      <h2>Predictions</h2>
      <ul>
        {predictions.predictions.map((p, index) => (
          <li key={index}>
            Prediction: {p} | Probabilities: {predictions.probabilities[index].join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PredictionList;
