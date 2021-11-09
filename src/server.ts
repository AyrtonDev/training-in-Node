import express, { Request, Response } from "express";
import path from "path";
import mustache from "mustache-express";
require("dotenv").config();

import mainRouter from "./routes/mainRoutes";
import newsRouter from "./routes/newsRoutes";

const port = process.env.NODE_PUBLIC_PORT_LISTEN_SERVER;

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use("/", mainRouter);

server.use("/noticias", newsRouter);

server.use((req: Request, res: Response) =>
  res.status(404).send("Página não encontrada!")
);

server.listen(port, () =>
  console.log(`Server is working in the port: ${port}`)
);
