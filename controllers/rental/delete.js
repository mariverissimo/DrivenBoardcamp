import { DeleteRentalService } from '../../services/rental/delete.js';

export async function DeleteRental(req, res) {
  const { id } = req.params;

  try {
    await DeleteRentalService(id);
    return res.sendStatus(200);
  } catch (err) {
    return res.status(err.status || 500).send(err.message || 'Erro ao excluir aluguel');
  }
}
