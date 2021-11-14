import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const urlDB = process.env.MONGO_URL;

export const mongoConnect = async () => {
  try {
    console.log("Conectando ao MongoDB...");
    await connect(urlDB as string);

    console.log("MongoDB conectado com sucesso!");
  } catch (error) {
    console.log(`Erro de conexão com o DB: ${error}`);
  }
};
