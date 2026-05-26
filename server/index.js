import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

// Resolve paths for local file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'messages.json');

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Allow Vite frontend
  credentials: true
}));
app.use(express.json());

// API Health Check
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'Simple Portfolio API is running. Saving messages locally to messages.json file.',
    timestamp: new Date()
  });
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields (name, email, subject, message) are required.' 
    });
  }

  try {
    let messages = [];

    // 1. Read existing messages from local JSON file
    try {
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      messages = JSON.parse(data);
    } catch (err) {
      // If file doesn't exist, start with an empty list
      if (err.code !== 'ENOENT') {
        throw err;
      }
    }

    // 2. Append new message entry
    const newEntry = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString()
    };
    messages.push(newEntry);

    // 3. Write back to local JSON file
    await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2), 'utf-8');
    console.log(`💾 Saved message from ${name} to messages.json`);

    return res.status(201).json({
      success: true,
      message: 'Your message has been saved successfully!'
    });

  } catch (error) {
    console.error('❌ Error saving message:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to save message. Server error occurred.'
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});
