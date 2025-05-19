import { GetGame } from "../../repositories/game/get.js";
export async function GetGameService(req, res) {
     const result = await GetGame();
          if (!res.status(200)){
            console.log("No games found")
          }
          return result.rows;
}