import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening On Port ${PORT}`);
});
