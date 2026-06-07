import { Router } from "express";
import {
  messagesIndexGet,
  createMessageGet,
  createMessagePost,
  messageDetailGet,
} from "../controllers/messagesController.js";

const messagesRouter = Router();

messagesRouter.get("/", messagesIndexGet);
messagesRouter.get("/new", createMessageGet);
messagesRouter.post("/new", createMessagePost);
messagesRouter.get("/messages/:id", messageDetailGet);

export { messagesRouter };
