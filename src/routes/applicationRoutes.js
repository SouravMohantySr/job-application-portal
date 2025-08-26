import express from "express";
import multer from "multer";
import { applyJob, getApplications } from "../controllers/applicationController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

const upload = multer({ dest: "src/uploads/" });

router.post("/", protect, upload.single("resume"), applyJob);
router.get("/", protect, getApplications);

export default router;
