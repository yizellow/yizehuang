require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post('/api/chat', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      req.body,
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


