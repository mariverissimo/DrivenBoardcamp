import db from '../..database.js';

export async function GetAll() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM customers', (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export async function GetById(id) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM customers WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}
export async function GetByCpf(cpf) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM customers WHERE cpf = ?', [cpf], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}
