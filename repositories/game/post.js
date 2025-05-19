import { db } from "../../database.js";

export async function FindGameByNameRepo(name) {
  return db.query('SELECT * FROM games WHERE name = $1;', [name]);
}

export async function InsertGameRepo({ name, image, stockTotal, pricePerDay }) {
  return db.query(
    `INSERT INTO games (name, image, "stockTotal", "pricePerDay") 
     VALUES ($1, $2, $3, $4);`,
    [name, image, stockTotal, pricePerDay]
  );
}
