import db from '../..database.js';

export function CreateRental({ customerId, gameId, rentDate, daysRented, originalPrice }) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO rentals 
      (customerId, gameId, rentDate, daysRented, returnDate, originalPrice, delayFee)
      VALUES (?, ?, ?, ?, NULL, ?, NULL)`,
      [customerId, gameId, rentDate, daysRented, originalPrice],
      function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      }
    );
  });
}

export function ReturnRental(id, returnDate, delayFee) {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE rentals SET returnDate = ?, delayFee = ? WHERE id = ?`,
      [returnDate, delayFee, id],
      function (err) {
        if (err) reject(err);
        else resolve();
      }
    );
  });
}
