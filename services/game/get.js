import { GetUserRepo } from "../../repositories/game/get.js";
export async function GetGameService() {
     const result = await GetUserRepo();
          if (!res.status(200)){
            console.log("No games found")
          }
          return result.rows;
}