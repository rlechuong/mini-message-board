import express from "express";
import path from "node:path";
import { indexRouter } from "./routes/indexRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening On Port ${PORT}`);
});
