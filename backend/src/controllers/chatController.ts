import { Request, Response } from "express";
import { openai } from "../index";

import {
  addMessageDB,
  createChatDB,
  deleteChatDB,
  getOldChatsDB,
} from "../database/chatDB";

export const createChat = async (req: Request, res: Response) => {
  try {
    const result = await createChatDB();

    res.json(result);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const addMessage = async (req: Request, res: Response) => {
  const { chatId, role, content } = req.body;

  try {
    const result = await addMessageDB(chatId, role, content);

    res.json(result);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const callAi = async (req: Request, res: Response) => {
  const { content } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content },
      ],
    });

    const result = completion.choices[0].message;

    res.json(result);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const getOldChats = async (req: Request, res: Response) => {
  try {
    const result = await getOldChatsDB();

    res.json(result);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const deleteChat = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const result = await deleteChatDB(id);

    res.json(result);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
