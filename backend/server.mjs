import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch"; // Correct way for ES modules
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3001", "http://localhost:5173"],  // Allow both frontend ports
    methods: "POST",
    allowedHeaders: ["Content-Type"]
  }));
  

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/diagnose", async (req, res) => {
   const { symptoms } = req.body;
   console.log("Received symptoms:", symptoms);

   if (!symptoms) {
       return res.status(400).json({ error: "Please provide your symptoms" });
   }

   try {
       const model = genAI.getGenerativeModel({ model: "gemini-pro" });

       const prompt = `A patient reports the following symptoms: ${symptoms}.
        Provide exactly three possible conditions most closely aligned with their symptoms and treatment suggestions.
        Format your response as follows:

        Condition: [Condition Name] / [Any additional names commonly known by]
        Symptoms: [Comma-separated symptoms]
        Suggestions: [Comma-separated specific treatment suggestions]

        Ensure the output is formatted exactly as requested.`;

       console.log("Sending prompt to Gemini:", prompt);

       const result = await model.generateContent(prompt);
       const response = await result.response;
       const diagnosis = await response.text();

       console.log("Extracted diagnosis:", diagnosis);

       res.json({ diagnosis });

   } catch (error) {
       console.error("Error during Gemini API call:", error);
       res.status(500).json({ error: "Failed to process request", details: error.message });
   }
});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
