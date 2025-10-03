import PredictionList from '../components/PredictionList';
import ExplanationChart from '../components/ExplanationChart';

export default function ResultPage({ predictions }) {
  return (
    <div>
      <h2>Your AI Health Report</h2>
      <PredictionList predictions={predictions} />
      <ExplanationChart shapValues={predictions.shap || []} />
    </div>
  );
}
