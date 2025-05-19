import { Create } from "../../repositories/client/post.js";
import { isValidCpf } from "./get.js";
import { isValidName } from "./get.js";
import { isValidPhone } from "./get.js";
import { GetByCpf } from "../../repositories/client/get.js";
export async function CreateCustomerService({ name, phone, cpf }) {
  if (!isValidName(name) || !isValidPhone(phone) || !isValidCpf(cpf)) {
    throw { status: 400, message: 'Dados inválidos' };
  }

  const existing = await GetByCpf(cpf);
  if (existing) throw { status: 409, message: 'CPF já existente' };

  await Create({ name, phone, cpf });
}