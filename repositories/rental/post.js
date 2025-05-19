import { db } from "../../database.js";
import { GetById } from "../client/get.js";
import { GetGameById } from "../game/get.js";

export async function CreateRental({ customerId, gameId, rentDate, daysRented, originalPrice }) {

  const customer = GetById(customerId);
  if (!customer) {
    throw { status: 404, message: "Cliente não encontrado" };
  }
  const game = await GetGameById(gameId);
  if (!game) {
    throw { status: 404, message: "Jogo não encontrado" };
  }

  const query = `
    INSERT INTO rentals 
    ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee")
    VALUES ($1, $2, $3, $4, NULL, $5, NULL)
    RETURNING id
  `;

  const values = [customerId, gameId, rentDate, daysRented, originalPrice];

  try {
    const result = await db.query(query, values);
    return result.rows[0].id;
  } catch (err) {
    throw err;
  }
}

export async function ReturnRental(id, returnDate, delayFee) {
  const query = `
    UPDATE rentals 
    SET "returnDate" = $1, "delayFee" = $2 
    WHERE id = $3
  `;

  const values = [returnDate, delayFee, id];

  try {
    await db.query(query, values);
  } catch (err) {
    throw err;
  }
}
