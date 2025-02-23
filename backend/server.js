
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/diagnose", async (req, res) => {
   const { symptoms } = req.body;

   if (!symptoms) {
       return res.status(400).json({ error: "Please provide symptoms" });
   }

   try {
       const model = genAI.getGenerativeModel({ model: "gemini-pro" });


       const prompt = `A patient reports the following symptoms: ${symptoms}. What are 3 possible diagnoses and suggestions for each? Respond like you are talking to the patient. Format: {diagnosis, suggestion}`;
      
       console.log("Sending prompt to Gemini:", prompt);

       const result = await model.generateContent(prompt);
       const response = await result.response;
       const diagnosis = response.text();

       res.json({ diagnosis });

   } catch (error) {
       console.error("Error during Gemini API call:", error);
       res.status(500).json({ error: "Failed to process request", details: error.message });
   }
});

// Start Server
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
