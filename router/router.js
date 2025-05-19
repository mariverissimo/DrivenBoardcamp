import { Router } from "express";
import GameRoutes from "./game/router.js";
import ClientRoutes from "./client/router.js";
import RentalRoutes from "./rental/router.js";
const Routes = Router();
Routes.use(GameRoutes);
Routes.use(ClientRoutes);
Routes.use(RentalRoutes);

export default Routes;