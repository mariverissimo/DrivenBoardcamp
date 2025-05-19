import db from '../..database.js';
export function DeleteRental(id) {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM rentals WHERE id = ?', [id], function (err) {
      if (err) reject(err);
      else resolve();
    });
  });
}
