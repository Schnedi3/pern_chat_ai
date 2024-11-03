import { Router } from "express";

import { callAi } from "../controllers/chatController";

const router = Router();

router.post("/ai", callAi);

export default router;
