import { Router } from "express";
import GameRoutes from "./game/router";
import ClientRoutes from "./client/router";
import RentalRoutes from "./rental/router";
const Routes = Router();
Routes.use(GameRoutes);
Routes.use(ClientRoutes);
Routes.use(RentalRoutes);

export default Routes;