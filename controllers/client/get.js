import { GetAllCustomers } from "../../services/client/get.js";
import { GetCustomerById } from "../../services/client/get.js";

export async function GetAll(req, res) {
  try {
    const customers = await GetAllCustomers();
    res.status(200).json(customers);
  } catch (err) {
    console.error(err); 
    res.status(500).send('Erro interno ao listar clientes');
  }
}

export async function GetById(req, res) {
  try {
    const customer = await GetCustomerById(req.params.id);
    res.status(200).json(customer);
  } catch (err) {
    res.status(err.status || 500).send(err.message || 'Erro ao buscar cliente');
  }
}