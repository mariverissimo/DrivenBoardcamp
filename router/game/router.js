import { Router } from "express";
import { GetGame } from "../../controllers/game/get.js";
import { PostGame } from "../../controllers/game/post.js";
const GameRoutes = Router();
GameRoutes.post("/games", PostGame);
GameRoutes.get("/games", GetGame);
export default GameRoutes;