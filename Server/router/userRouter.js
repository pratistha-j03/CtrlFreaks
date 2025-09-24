import { Router } from "express";
import userControllers from "../controllers/userControllers.js";

const router = Router();

// router.route("/leaderboard").get(getLeaderboard);
router.route("/event").get(userControllers.getEvents);
router.route("/greenchampions").get(userControllers.getGreenChampions);
router.route("/community").get(userControllers.getCommunityPost);
router.route("/login").post(userControllers.login);
router.route("/signup").post(userControllers.signup);

export default router;