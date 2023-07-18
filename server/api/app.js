import express from "express";
import cors from "cors";

import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRouter);

export default app;