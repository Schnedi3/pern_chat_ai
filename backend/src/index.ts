import express from "express";
import cors from "cors";
import OpenAI from "openai";

import { OPENAI_API_KEY, PORT } from "./config/config";
import chatRoutes from "./routes/chatRoute";

export const app = express();
export const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/chat", chatRoutes);

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
