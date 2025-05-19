import { db } from "../../database.js";

export async function GetAll() {
  try {
    const result = await db.query('SELECT * FROM customers');
    return result.rows;
  } catch (err) {
    throw err;
  }
}

export async function GetById(id) {
   try {
    const result = await db.query("SELECT * FROM customers WHERE id = $1", [id]);
    return result.rows[0];
  } catch (err) {
    throw err;
  }
}

export async function GetByCpf(cpf) {
  try {
    const result = await db.query('SELECT * FROM customers WHERE cpf = $1', [cpf]);
    return result.rows[0]; 
  } catch (err) {
    throw err;
  }
}
