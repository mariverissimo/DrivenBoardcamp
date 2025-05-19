import { getAll, getById, getByCpf, create } from '../repositories/client/get.js';

function isValidCpf(cpf) {
  return typeof cpf === 'string' && /^\d{11}$/.test(cpf);
}
function isValidPhone(phone) {
  return typeof phone === 'string' && /^\d{10,11}$/.test(phone);
}
function isValidName(name) {
  return typeof name === 'string' && name.trim() !== '';
}

export async function getAllCustomers() {
  return await getAll();
}

export async function getCustomerById(id) {
  const customer = await getById(id);
  if (!customer) throw { status: 404, message: 'Cliente não encontrado' };
  return customer;
}

