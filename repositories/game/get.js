import { db } from "../../database.js";

export async function GetGame() {
  return db.query('SELECT * FROM games;');
}

export async function GetGameById(id) {
  try {
    const result = await db.query('SELECT * FROM games WHERE id = $1', [id]);
    return result.rows[0]; 
  } catch (err) {
    throw err;
  }
}


