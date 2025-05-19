import { GetGameService } from "../../services/game/get.js";

export async function GetGame(req, res) {
  try {
    const result = await GetGameService(req, res);

    if (!result || result.length === 0) {
      return res.sendStatus(404);
    }

    return res.status(200).send(result);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}
