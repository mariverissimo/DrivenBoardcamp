import { GetAllRentals } from '../../repositories/rental/get.js';

export async function ListRentals() {
  const rentals = await GetAllRentals();

  return rentals.map(r => ({
    id: r.id,
    customerId: r.customerId,
    gameId: r.gameId,
    rentDate: r.rentDate,
    daysRented: r.daysRented,
    returnDate: r.returnDate,
    originalPrice: r.originalPrice,
    delayFee: r.delayFee,
    customer: {
      id: r.customerId,
      name: r.customerName
    },
    game: {
      id: r.gameId,
      name: r.gameName
    }
  }));
}
