import React from 'react';

const ExplanationChart = ({ shapValues }) => {
  return (
    <div>
      <h3>Explanation Chart</h3>
      {shapValues.length > 0 ? (
        <ul>
          {shapValues.map((val, index) => (
            <li key={index}>Feature {index + 1}: {val}</li>
          ))}
        </ul>
      ) : (
        <p>No explanation values available.</p>
      )}
    </div>
  );
};

export default ExplanationChart;
