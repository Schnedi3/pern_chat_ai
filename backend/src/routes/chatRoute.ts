import { Router } from "express";

import { addMessage, callAi, createChat } from "../controllers/chatController";

const router = Router();

router.post("/", createChat);
router.post("/message", addMessage);
router.post("/ai", callAi);

export default router;
