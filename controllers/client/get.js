import {
  getAllCustomers,
  getCustomerById,
  createCustomer
} from '../services/client/get.js';

export async function getAll(req, res) {
  try {
    const customers = await getAllCustomers();
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).send('Erro interno ao listar clientes');
  }
}

export async function getById(req, res) {
  try {
    const customer = await getCustomerById(req.params.id);
    res.status(200).json(customer);
  } catch (err) {
    res.status(err.status || 500).send(err.message || 'Erro ao buscar cliente');
  }
}

export async function create(req, res) {
  try {
    await createCustomer(req.body);
    res.status(201).send(); // Created
  } catch (err) {
    res.status(err.status || 500).send(err.message || 'Erro ao criar cliente');
  }
}
