import db from '../database/db.js';

export async function getAll() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM customers', (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export async function getById(id) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM customers WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

export async function getByCpf(cpf) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM customers WHERE cpf = ?', [cpf], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

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
