import { Router } from "express";
import citizenControllers from "../controllers/citizenControllers.js"

const router=Router();
router.route("/dashboard/:id").get(citizenControllers.getCitizenDashboard);
router.route("/reportWaste").post(citizenControllers.reportWaste);
// Router.Route("/upvote").patch(upvote);
router.route("/WasteReport/:id").get(citizenControllers.myWasteReport);

export default router;