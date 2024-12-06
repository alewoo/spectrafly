import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import {
  articleRouter,
  authRouter,
  feedRouter,
  settingsRouter,
} from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/articles", articleRouter);
app.use("/api/auth", authRouter);
app.use("/api/feeds", feedRouter);
app.use("/api/settings", settingsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
