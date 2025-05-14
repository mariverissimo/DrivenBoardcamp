import { FindGameByNameRepo, InsertGameRepo } from "../../repositories/game/post.js";

export async function PostGameService({ name, image, stockTotal, pricePerDay }) {
  if (
    !name ||
    typeof name !== 'string' ||
    name.trim() === '' ||
    !stockTotal ||
    !pricePerDay ||
    typeof stockTotal !== 'number' ||
    typeof pricePerDay !== 'number' ||
    stockTotal <= 0 ||
    pricePerDay <= 0
  ) {
    return { status: 400 };
  }

  const existingGame = await FindGameByNameRepo(name);
  if (existingGame.rowCount > 0) {
    return { status: 409 };
  }

  await InsertGameRepo({ name, image, stockTotal, pricePerDay });

  return { status: 201 };
}
