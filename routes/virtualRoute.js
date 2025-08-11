import express from "express";
import { virtualAssistant } from "../controllers/assistantController.js";

const router = express.Router();

router.post('/virtualAssistant', virtualAssistant);

export default router;