import { Router } from "express";
import { getAllRentals } from "../../controllers/rental/get";
import { createRental, ReturnRental } from "../../controllers/rental/post";
const RentalRoutes = Router();
RentalRoutes.get("/rentals", getAllRentals);
RentalRoutes.post('/rentals', createRental);
RentalRoutes.post('/rentals/:id/return',ReturnRental);
export default RentalRoutes;