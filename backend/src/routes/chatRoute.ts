import { Router } from "express";

import {
  addMessage,
  callAi,
  createChat,
  getOldChats,
} from "../controllers/chatController";

const router = Router();

router.post("/", createChat);
router.post("/message", addMessage);
router.post("/ai", callAi);
router.get("/", getOldChats);

export default router;
