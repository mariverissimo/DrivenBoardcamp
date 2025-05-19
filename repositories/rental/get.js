import { db } from "../../database.js";

export async function GetAllRentals() {
  const query = `
    SELECT 
      rentals.*,
      customers.name AS customerName,
      games.name AS gameName
    FROM rentals
    JOIN customers ON rentals."customerId" = customers.id
    JOIN games ON rentals."gameId" = games.id
  `;

  try {
    const result = await db.query(query);
    return result.rows;
  } catch (err) {
    throw err;
  }
}

export async function GetRentalById(id) {
  const query = `
    SELECT rentals.*, games."pricePerDay"
    FROM rentals 
    JOIN games ON rentals."gameId" = games.id 
    WHERE rentals.id = $1
  `;

  try {
    const result = await db.query(query, [id]);
    return result.rows[0];
  } catch (err) {
    throw err;
  }
}

export async function OpenRentalsByGame(gameId) {
  const query = `
    SELECT COUNT(*) AS count 
    FROM rentals 
    WHERE "gameId" = $1 AND "returnDate" IS NULL
  `;

  try {
    const result = await db.query(query, [gameId]);
    return parseInt(result.rows[0].count);
  } catch (err) {
    throw err;
  }
}

