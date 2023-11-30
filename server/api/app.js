import express from "express";
import cors from "cors";

import userRouter from "./routes/userRoutes.js";
import requestsRoutes from "./routes/requestsRoutes.js";
import penpalRoutes from "./routes/penpalRoutes.js";

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/requests", requestsRoutes);
app.use("/penpal", penpalRoutes);

export default app;