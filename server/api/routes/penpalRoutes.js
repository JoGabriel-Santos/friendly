import { fetchPenpals, sendLetter } from "../controller/penpalController.js";

import express from "express";

const router = express.Router();

router.get("/fetchPenpals/:userId", fetchPenpals);
router.post("/sendLetter", sendLetter);

export default router;