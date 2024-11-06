import { Router } from "express";

import { callAi, createChat } from "../controllers/chatController";

const router = Router();

router.post("/", createChat);
router.post("/ai", callAi);

export default router;
