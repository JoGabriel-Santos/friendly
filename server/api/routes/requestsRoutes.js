import { createRequest, handleFriendRequest, getPendingRequests } from "../controller/requestsController.js";
import express from "express";

const router = express.Router();

router.post("/createRequest", createRequest);
router.post("/handleFriendRequest", handleFriendRequest);
router.get("/getPendingRequests/:userEmail", getPendingRequests);

export default router;