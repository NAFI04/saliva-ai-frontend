import React, { useState } from 'react';
import axios from 'axios';

function UploadForm({ setPredictions }) {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState('csv'); // 'csv' or 'image'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const endpoint = fileType === 'csv'
        ? 'http://localhost:8000/predict'
        : 'http://localhost:8000/upload-image';

      const response = await axios.post(endpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (fileType === 'csv') {
        setPredictions(response.data); // Contains predictions & probabilities
      } else {
        alert(response.data.message); // Just image received confirmation
      }
    } catch (error) {
      console.error(error);
      alert("Upload failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <h3>Upload Saliva Data</h3>

      <label>
        Select File Type:
        <select value={fileType} onChange={(e) => setFileType(e.target.value)}>
          <option value="csv">CSV</option>
          <option value="image">Image</option>
        </select>
      </label>
      <br /><br />

      <input
        type="file"
        accept={fileType === 'csv' ? '.csv' : 'image/*'}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UploadForm;
