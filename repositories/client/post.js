import db from '../..database.js';
export async function Create(customer) {
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