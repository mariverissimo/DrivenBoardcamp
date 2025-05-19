import { GetAll, GetById } from '../../repositories/client/get.js';

export function isValidCpf(cpf) {
  return typeof cpf === 'string' && /^\d{11}$/.test(cpf);
}
export function isValidPhone(phone) {
  return typeof phone === 'string' && /^\d{10,11}$/.test(phone);
}
export function isValidName(name) {
  return typeof name === 'string' && name.trim() !== '';
}

export async function GetAllCustomers() {
  return await GetAll();
}

export async function GetCustomerById(id) {
  const customer = await GetById(id);
  if (!customer) throw { status: 404, message: 'Cliente não encontrado' };
  return customer;
}

