console.log("Server booting...");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const OpenAI = require("openai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  console.log("🔁 Received message from frontend:", message); // Add this

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You're a friendly chatbot that suggests diabetic-friendly recipe substitutions. Ask engaging questions like: 'Hey! Want to explore something tasty today?'",
        },
        { role: "user", content: message },
      ],
    });

    console.log("✅ GPT Response:", response.choices[0].message.content); // Add this

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("❌ Error with OpenAI API:");
    console.error(error.response?.data || error.message || error);
    res.status(500).json({ error: "ChatGPT failed to respond." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
