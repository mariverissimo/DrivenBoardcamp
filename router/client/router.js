import { Router } from "express";
import { CreateCustomer } from "../../controllers/client/post.js";
import { GetAll, GetById } from "../../controllers/client/get.js";
const ClientRoutes = Router();
ClientRoutes.post("/customers", CreateCustomer);
ClientRoutes.get("/customers", GetAll);
ClientRoutes.get("/customers/:id", GetById);
export default ClientRoutes;