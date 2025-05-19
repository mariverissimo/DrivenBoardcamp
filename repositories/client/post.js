import { db } from "../../database.js";

export async function Create(customer) {
  const query = `
    INSERT INTO customers (name, phone, cpf) 
    VALUES ($1, $2, $3)
    RETURNING id
  `;
  const values = [customer.name, customer.phone, customer.cpf];

  try {
    const result = await db.query(query, values);
    return result.rows[0].id;
  } catch (err) {
    throw err;
  }
}
