import { fetchUserData, signin, signup } from "../controller/userController.js";
import authentication from "../../middleware/authentication.js";
import express from "express";

const router = express.Router();

router.get("/fetchUserData", fetchUserData);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;