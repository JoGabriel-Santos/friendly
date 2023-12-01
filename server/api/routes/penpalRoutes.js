import { fetchPenpals, sendLetter, lettersBetweenPenpals } from "../controller/penpalController.js";

import express from "express";

const router = express.Router();

router.get("/fetchPenpals/:userId", fetchPenpals);
router.post("/sendLetter", sendLetter);
router.post("/lettersBetweenPenpals", lettersBetweenPenpals);

export default router;