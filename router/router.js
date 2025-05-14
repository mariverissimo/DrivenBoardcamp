import { Router } from "express";
import GameRoutes from "./game/router";
const Routes = Router();
Routes.use(GameRoutes);


export default Routes;