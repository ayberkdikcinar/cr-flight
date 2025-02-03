import express from 'express';
import cors from 'cors';
import process from 'process';
import dotenv from 'dotenv';

dotenv.config();

const serverConfig = {
  port: process.env.BFF_PORT || 3000,
  apiKey: process.env.SKYSCRAPPER_API_KEY,
  host: 'sky-scrapper.p.rapidapi.com',
  baseUrl: 'https://sky-scrapper.p.rapidapi.com/api',
};

const app = express();
const PORT = serverConfig.port || 8000;

app.use(cors());
app.use(express.json());

app.get('/api/scrape/*', async (req, res) => {
  try {
    const apiUrlPath = req.params[0];
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();

    const apiUrl = `${serverConfig.baseUrl}/${apiUrlPath}?${queryString}`;

    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': serverConfig.apiKey,
        'x-rapidapi-host': serverConfig.host,
      },
    });

    const data = await response.json();
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
