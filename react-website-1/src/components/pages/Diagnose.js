import React, { useState } from 'react';
import '../../App.css';
import '../Diagnose.css';

export default function Diagnose({ hideHeader }) {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState([]);

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
      const response = await fetch('http://localhost:3000/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      
      // Parse response into structured format
      const formattedDiagnosis = parseDiagnosis(data.diagnosis);
      setDiagnosis(formattedDiagnosis);
    } catch (error) {
      console.error('Error fetching diagnosis:', error);
      alert('There was an error retrieving your diagnosis.');
    }
  };

  // Function to parse the diagnosis response
  const parseDiagnosis = (rawText) => {
    return rawText.split("Condition: ").slice(1).map(item => {
      const parts = item.split("Symptoms:");
      const condition = parts[0].trim();
      const symptomsAndSuggestions = parts[1]?.split("Suggestions:") || [];

      return {
        condition,
        symptoms: symptomsAndSuggestions[0]?.trim() || "N/A",
        suggestions: symptomsAndSuggestions[1]?.trim() || "N/A"
      };
    });
  };

  return (
    <div>
      {!hideHeader && <h1 className="diagnose">Get Diagnosed</h1>}
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

          {diagnosis.length > 0 && (
            <div className="diagnosis-result">
              <h2>Most Likely Conditions:</h2>
              {diagnosis.map((item, index) => (
                <div key={index} className="diagnosis-box">
                  <h3>{item.condition}</h3>
                  <p><strong>Symptoms:</strong> {item.symptoms}</p>
                  <p><strong>Suggestions:</strong> {item.suggestions}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
