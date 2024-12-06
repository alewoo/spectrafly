import express from "express";
import {
  getFeeds,
  addFeed,
  updateFeed,
  deleteFeed,
} from "../controllers/feedController";
import { authenticate } from "../middleware/auth";

const router = express.Router();

router.get("/", authenticate, async (req, res, next) => {
  await getFeeds(req, res);
});

router.post("/", authenticate, async (req, res, next) => {
  await addFeed(req, res);
});

router.put("/:id", authenticate, async (req, res, next) => {
  await updateFeed(req, res);
});

router.delete("/:id", authenticate, async (req, res, next) => {
  await deleteFeed(req, res);
});

export const feedRoutes = router;
