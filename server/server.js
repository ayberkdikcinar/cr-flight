import express from "express";
import cors from "cors";
import process from "process";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const serverConfig = {
  port: process.env.BFF_PORT || 8000,
  apiKey: process.env.SKYSCRAPPER_API_KEY,
  host: "sky-scrapper.p.rapidapi.com",
  baseUrl: "https://sky-scrapper.p.rapidapi.com/api",
};

const proxyMiddleware = createProxyMiddleware({
  target: serverConfig.baseUrl,
  changeOrigin: true,
  on: {
    proxyReq: (proxyReq) => {
      proxyReq.setHeader("x-rapidapi-key", serverConfig.apiKey);
      proxyReq.setHeader("x-rapidapi-host", serverConfig.host);
    },
  },
});

const app = express();

const PORT = serverConfig.port || 8000;

app.use(cors());
app.use(express.json());

app.use("/api", proxyMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
