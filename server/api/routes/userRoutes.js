import { fetchUserData, fetchAllUsers, alterUserData, signin, signup } from "../controller/userController.js";
// import authentication from "../../middleware/authentication.js";
import express from "express";

const router = express.Router();

router.get("/fetchUserData/:userEmail", fetchUserData);
router.get("/fetchAllUsers/:userEmail", fetchAllUsers);
router.patch("/alterUserData", alterUserData);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;