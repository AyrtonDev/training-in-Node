import { Request, Response } from "express";

export const infoSobre = (req: Request, res: Response) =>
  res.render("pages/sobre");

export const infoContato = (req: Request, res: Response) =>
  res.render("pages/contato");
