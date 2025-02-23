# Symptom Diagnosis AI App

### This is an AI-powered web app that helps users understand their symptoms using advanced AI analysis and machine learning to provide potential diagnoses and recommendations.

Table of Contents
Project Overview
Frontend Setup
Backend Setup
How to Run the App
Dependencies
Project Overview

We aim to transform healthcare by making it more accessible and personalized. The app leverages AI to analyze symptoms input by users and provide potential diagnoses, helping individuals, clinicians, and researchers with valuable insights. Data privacy and security are paramount, ensuring sensitive information is handled responsibly.

## Frontend Setup
#### 1. Clone the Repository
First, clone the repository to your local machine:

git clone https://github.com/yourusername/symptom-diagnosis-app.git
cd symptom-diagnosis-app

#### 2. Install Dependencies
Navigate to the frontend directory and install the required dependencies:

cd frontend
npm install

#### 3. Run the Frontend
Start the React development server:

npm start
The app should now be running on http://localhost:3001/.

## Backend Setup
#### 1. Install Node.js & Dependencies
Ensure that Node.js (version 18+) is installed. If it's not installed, you can download it from here.
Once Node.js is installed, navigate to the backend directory:
cd backend
#### 2. Install Backend Dependencies
Run the following command to install the necessary dependencies:
npm install
#### 3. Start the Backend
Start the backend server:
npm start
This will start the backend API on http://localhost:3000/.

## How to Run the App
#### Run the Backend:
Navigate to the backend folder and run:
npm start
This will start the backend on http://localhost:3000/.
#### Run the Frontend:
Navigate to the frontend folder and run:
npm start
This will start the frontend on http://localhost:3001/.

## Dependencies
### Frontend (React)
react: React library for building the user interface.
react-dom: React's DOM rendering library.
react-scripts: Scripts and configuration used by Create React App.
axios: HTTP client for making API requests.

### Backend (Node.js & Express)
express: Web framework for Node.js to build the backend API.
cors: Package to enable Cross-Origin Resource Sharing.
body-parser: Middleware for parsing incoming request bodies.
dotenv: Loads environment variables from a .env file.
node-fetch: To make HTTP requests to external APIs (Gemini API).
@google/generative-ai: Google’s Generative AI API for analysis and diagnosis.

## How the App Works
Input Symptoms: The user enters symptoms in the input box on the frontend.
API Request: The frontend sends the input to the backend at http://localhost:3000/api/diagnose.
AI Analysis: The backend analyzes the symptoms using the Gemini API (powered by Google's generative AI) and generates a list of possible diagnoses.
Display Results: The frontend displays the diagnoses and suggestions to the user in a clean format.
Environment Variables
Make sure you have a .env file in the backend directory with the following content:

GEMINI_API_KEY=your-gemini-api-key-here
You can obtain your Gemini API key from Google Cloud's Generative AI.

## Troubleshooting
CORS Errors: Ensure the frontend and backend ports are correctly configured. By default, the frontend runs on http://localhost:3001 and the backend on http://localhost:3000. CORS is enabled on the backend to allow these connections.
Port Issues: If a port is already in use, change the port in the server.mjs file for the backend or frontend as needed.
