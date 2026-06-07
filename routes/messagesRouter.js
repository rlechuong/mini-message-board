import { Router } from "express";

const messagesRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

messagesRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
});
messagesRouter.get("/new", (req, res) => {
  res.render("form");
});
messagesRouter.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});
messagesRouter.get("/messages/:id", (req, res) => {
  const message = messages[Number(req.params.id)];

  if (!message) {
    res.status(404).send("Message not found.");
    return;
  }

  res.render("message", { message });
});

export { messagesRouter };
