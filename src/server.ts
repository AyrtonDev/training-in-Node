import express, { Request, Response, urlencoded } from "express";
import path from "path";
import mustache from "mustache-express";
import dotenv from "dotenv";

import mainRouter from "./routes/mainRoutes";
import newsRouter from "./routes/newsRoutes";
import { mongoConnect } from "./database/mongo";

dotenv.config();

const port = process.env.NODE_PUBLIC_PORT_LISTEN_SERVER;

mongoConnect();

const server = express();

// set the Mustache

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use(urlencoded({ extended: true }));

// Routes

server.use("/", mainRouter);

server.use("/noticias", newsRouter);

server.use((req: Request, res: Response) =>
  res.status(404).send("Página não encontrada!")
);

server.listen(port, () =>
  console.log(`Server is working in the port: ${port}`)
);
