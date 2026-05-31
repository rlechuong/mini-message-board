import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("GET Index Page");
});

export { indexRouter };
