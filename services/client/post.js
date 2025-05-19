import { create } from "../../repositories/client/post.js";
export async function createCustomer({ name, phone, cpf }) {
  if (!isValidName(name) || !isValidPhone(phone) || !isValidCpf(cpf)) {
    throw { status: 400, message: 'Dados inválidos' };
  }

  const existing = await getByCpf(cpf);
  if (existing) throw { status: 409, message: 'CPF já existente' };

  await create({ name, phone, cpf });
}