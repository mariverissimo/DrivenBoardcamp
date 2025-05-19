import { CreateCustomerService } from "../../services/client/post.js";
export async function CreateCustomer(req, res) {
  try {
    await CreateCustomerService(req.body);
    res.status(201).send();
  } catch (err) {
    res.status(err.status || 500).send(err.message || 'Erro ao criar cliente');
  }
}
