import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const urlDB: string | undefined = process.env.MONGO_URL;

// const mongoConnect = async () => {
//   try {
//     console.log("Conectando ao MongoDB...");
//     await connect(urlDB);
//   } catch (error) {
//     console.log(`Erro de conexão com o DB: ${error}`);
//   }
// };
