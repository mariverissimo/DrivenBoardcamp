import { CreateRental } from '../../repositories/rental/post.js';
import { GetById } from '../../repositories/client/get.js';
import { GetGameById } from '../../repositories/game/get.js';
import { OpenRentalsByGame } from '../../repositories/rental/get.js';
import { GetRentalById } from '../../repositories/rental/get.js';
import { ReturnRental } from '../../repositories/rental/post.js';

export async function InsertRental({ customerId, gameId, daysRented }) {

  if (!customerId || !gameId || !daysRented || daysRented <= 0) {
    throw { status: 400, message: 'Dados inválidos' };
  }

  const customer = await GetById(customerId);
  if (!customer) throw { status: 404, message: 'Cliente não encontrado' };

  const game = await GetGameById(gameId);
  if (!game) throw { status: 404, message: 'Jogo não encontrado' };

  const openRentals = await OpenRentalsByGame(gameId);
  if (openRentals >= game.stockTotal) {
    throw { status: 422, message: 'Jogo indisponível no momento' };
  }

  const rentDate = new Date().toISOString().split('T')[0];
  const originalPrice = daysRented * game.pricePerDay;

  await CreateRental({ customerId, gameId, rentDate, daysRented, originalPrice });
}

export async function ReturnRentalService(id) {
  const rental = await GetRentalById(id);
  if (!rental) throw { status: 404, message: 'Aluguel não encontrado' };

  if (rental.returnDate !== null) {
    throw { status: 422, message: 'Aluguel já foi devolvido' };
  }

  const returnDate = new Date();
  const rentDate = new Date(rental.rentDate);
  const expectedReturn = new Date(rentDate);
  expectedReturn.setDate(expectedReturn.getDate() + rental.daysRented);

  const delayInMs = returnDate - expectedReturn;
  const delayDays = Math.max(0, Math.floor(delayInMs / (1000 * 60 * 60 * 24)));

  const delayFee = delayDays * rental.pricePerDay;
  const formattedReturnDate = returnDate.toISOString().split('T')[0];

  await ReturnRental(id, formattedReturnDate, delayFee);
}
