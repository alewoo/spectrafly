import { Router } from "express";
import {
  getArticles,
  getArticleById,
  streamArticles,
} from "../controllers/articleController";

const router = Router();

router.get("/stream", streamArticles);
router.get("/:id", async (req, res) => {
  await getArticleById(req, res);
});
router.get("/", async (req, res) => {
  await getArticles(req, res);
});

export { router as articleRouter };
