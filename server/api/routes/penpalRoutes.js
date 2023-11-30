import { fetchPenpals } from "../controller/penpalController.js";

import express from "express";

const router = express.Router();

router.get("/fetchPenpals/:userId", fetchPenpals);

export default router;