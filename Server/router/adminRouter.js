// admin Router
import { Router } from "express";
import postEvent from "../controllers/adminControllers.js";

const router=Router();
router.route("/event").post(postEvent);

export default router;
