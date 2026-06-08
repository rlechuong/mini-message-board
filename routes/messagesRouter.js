import { Router } from "express";
import { body } from "express-validator";
import {
  messagesIndexGet,
  createMessageGet,
  createMessagePost,
  messageDetailGet,
} from "../controllers/messagesController.js";

const messagesRouter = Router();

messagesRouter.get("/", messagesIndexGet);

messagesRouter.get("/new", createMessageGet);

messagesRouter.post(
  "/new",
  [
    body("messageUser")
      .trim()
      .notEmpty()
      .withMessage("Username is required.")
      .isLength({ max: 50 })
      .withMessage("Username cannot exceed 50 characters."),
    body("messageText")
      .trim()
      .notEmpty()
      .withMessage("Message is required.")
      .isLength({ max: 500 })
      .withMessage("Message cannot exceed 500 characters."),
  ],
  createMessagePost,
);

messagesRouter.get("/messages/:id", messageDetailGet);

export { messagesRouter };
