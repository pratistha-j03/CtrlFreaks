import {Router} from "express";
import getWorkerDashboard from "../controllers/workerControllers";

const router=Router();

// router.route("/checkList").get(getCheckList);
// router.route("/updateCheckList").post(updateCheckList);
router.route("/dashboard/:id").get(getWorkerDashboard);

export default router;