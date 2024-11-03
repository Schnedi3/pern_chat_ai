import { Request, Response } from "express";
import { openai } from "../index";

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
