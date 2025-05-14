import { PostGameService } from "../../services/game/post.js";

export async function PostGame(req, res) {
  const { name, image, stockTotal, pricePerDay } = req.body;

  try {
    const { status, message } = await PostGameService({ name, image, stockTotal, pricePerDay });

    return res.status(status).send(message || null);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}
