import { validationResult, matchedData } from "express-validator";
import { getAllMessages, insertMessage, getMessageById } from "../db/queries.js";

const messagesIndexGet = async (req, res) => {
  const messages = await getAllMessages();
  console.log("Messages: ", messages);
  res.render("index", { title: "Mini Message Board", messages });
};

const createMessageGet = (req, res) => {
  res.render("form", { errors: [], data: {} });
};

const createMessagePost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("form", {
      errors: errors.array(),
      data: { messageUser: req.body.messageUser, messageText: req.body.messageText },
    });
  }

  const { messageUser, messageText } = matchedData(req);
  await insertMessage(messageUser, messageText);
  res.redirect("/");
};

const messageDetailGet = async (req, res) => {
  const id = req.params.id;
  const message = await getMessageById(id);
  res.render("message", { message });
};

export { messagesIndexGet, createMessageGet, createMessagePost, messageDetailGet };
