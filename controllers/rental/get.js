import { ListRentals } from '../../services/rental/get.js';

export async function getAllRentals(req, res) {
  try {
    const rentals = await ListRentals();
    res.status(200).json(rentals);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar aluguéis');
  }
}
