import UploadForm from '../components/UploadForm';
export default function UploadPage({ setPredictions }) {
  return (
    <div>
      <h2>Upload Your Saliva Sample</h2>
      <UploadForm setPredictions={setPredictions} />
    </div>
  );
}
