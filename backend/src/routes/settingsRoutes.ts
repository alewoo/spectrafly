import express from "express";
import { getSettings, updateSettings } from "../controllers/settingsController";
import { authenticate } from "../middleware/auth";

const router = express.Router();

router.get("/", authenticate, async (req, res, next) => {
  await getSettings(req, res);
});

router.put("/", authenticate, async (req, res, next) => {
  await updateSettings(req, res);
});

export const settingsRoutes = router;
