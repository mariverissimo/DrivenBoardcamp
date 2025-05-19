import db from '../..database.js';

export async function GetUserRepo() {
  return db.query('SELECT * FROM games;');
}

export function GetGameById(id) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM games WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

