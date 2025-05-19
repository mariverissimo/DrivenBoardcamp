import db from '../..database.js';

export function GetAllRentals() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
        rentals.*,
        customers.name AS customerName,
        games.name AS gameName
      FROM rentals
      JOIN customers ON rentals.customerId = customers.id
      JOIN games ON rentals.gameId = games.id
    `;

    db.all(query, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export function GetRentalById(id) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT rentals.*, games.pricePerDay
       FROM rentals 
       JOIN games ON rentals.gameId = games.id 
       WHERE rentals.id = ?`,
      [id],
      (err, row) => {
        if (err) reject(err);
        else resolve(row);
      }
    );
  });
}

export function OpenRentalsByGame(gameId) {
  return new Promise((resolve, reject) => {
    db.get(
      'SELECT COUNT(*) AS count FROM rentals WHERE gameId = ? AND returnDate IS NULL',
      [gameId],
      (err, row) => {
        if (err) reject(err);
        else resolve(row.count);
      }
    );
  });
}
