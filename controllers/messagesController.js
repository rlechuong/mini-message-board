import { getAllMessages, insertMessage, getMessageById } from "../db/queries.js";

const messagesIndexGet = async (req, res) => {
  const messages = await getAllMessages();
  console.log("Messages: ", messages);
  res.render("index", { title: "Mini Message Board", messages });
};

const createMessageGet = (req, res) => {
  res.render("form");
};

const createMessagePost = async (req, res) => {
  const { messageUser, messageText } = req.body;
  await insertMessage(messageUser, messageText);
  res.redirect("/");
};

const messageDetailGet = async (req, res) => {
  const id = req.params.id;
  const message = await getMessageById(id);
  res.render("message", { message });
};

export { messagesIndexGet, createMessageGet, createMessagePost, messageDetailGet };
