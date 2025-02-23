import React, { useState } from 'react';
import '../../App.css';
import '../Diagnose.css';

export default function Diagnose({ hideHeader }) {
  const [symptoms, setSymptoms] = useState('');

  // Handle input changes
  const handleInputChange = (event) => {
    setSymptoms(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!symptoms.trim()) {
      alert('Enter your symptoms.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms }),
      });

      const data = await response.json();
      alert(`Possible Conditions: ${data.prediction}`);
    } catch (error) {
      console.error('Error fetching diagnosis:', error);
      alert('There was an error retrieving your diagnosis.');
    }
  };

  return (
    <div>
      {!hideHeader && <h1 className="diagnose">Get Diagnosed</h1>} {/* Matches Contact.js */}
      <div className="diagnosis-container">
        <div className="diagnosis-card">
          <p className="diagnosis-description">
            Please describe any current symptoms below, and our AI will suggest possible conditions!
          </p>
          <textarea
            className="diagnosis-input"
            placeholder="Enter your symptoms here..."
            value={symptoms}
            onChange={handleInputChange}
            rows="4"
          ></textarea>
          <button className="diagnosis-submit" onClick={handleSubmit}>
            Get Diagnosis
          </button>
        </div>
      </div>
    </div>
  );
}
