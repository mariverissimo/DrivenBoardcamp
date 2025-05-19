import { DeleteRental } from "../../repositories/rental/delete.js";
import { GetRentalById } from "../../repositories/rental/get.js";

export async function DeleteRentalService(id) {
  const rental = await GetRentalById(id);
  if (!rental) throw { status: 404, message: 'Aluguel não encontrado' };

  if (rental.returnDate === null) {
    throw { status: 400, message: 'Aluguel ainda não foi devolvido' };
  }

  await DeleteRental(id);
}
