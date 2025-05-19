import { db } from "../../database.js";

export async function DeleteRental(id) {
  const query = `DELETE FROM rentals WHERE id = $1`;

  try {
    await db.query(query, [id]);
  } catch (err) {
    throw err;
  }
}
