import db from '../database/db.js';
export async function create(customer) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO customers (name, phone, cpf) VALUES (?, ?, ?)',
      [customer.name, customer.phone, customer.cpf],
      function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      }
    );
  });
}