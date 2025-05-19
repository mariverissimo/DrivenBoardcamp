import db from '../..database.js';

export async function GetUserRepo() {
  return db.query('SELECT * FROM games;');
}
