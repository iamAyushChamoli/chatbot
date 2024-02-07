import { Router } from "express";
import { verifyToken } from "../utils/token_manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatCompletion } from "../controllers/chat-controller.js";


//Protected API
const chatRoutes = Router();
chatRoutes.get("/new",validate(chatCompletionValidator), verifyToken, generateChatCompletion as any )

export default chatRoutes;