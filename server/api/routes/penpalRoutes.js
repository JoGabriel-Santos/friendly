import { fetchPenpals, sendLetter, lettersBetweenPenpals, removePenpalById } from "../controller/penpalController.js";

import express from "express";

const router = express.Router();

router.get("/fetchPenpals/:userId", fetchPenpals);
router.post("/sendLetter", sendLetter);
router.post("/lettersBetweenPenpals", lettersBetweenPenpals);
router.post("/removePenpalById", removePenpalById);

export default router;