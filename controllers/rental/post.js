import { insertRental } from '../services/rentalService.js';
import { ReturnRentalService } from '../../services/rental/post.js';

export async function CreateRental(req, res) {
  try {
    await insertRental(req.body);
    res.status(201).send(); 
  } catch (err) {
    res.status(err.status || 500).send(err.message || 'Erro ao criar aluguel');
  }
}
export async function ReturnRental(req, res) {
  const { id } = req.params;

  try {
    await ReturnRentalService(id);
    return res.sendStatus(200);
  } catch (err) {
    return res.status(err.status || 500).send(err.message || 'Erro ao devolver aluguel');
  }
}
