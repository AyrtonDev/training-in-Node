import { Request, Response } from "express";

export const formAction = (req: Request, res: Response) => {
  let showAge: boolean = false;
  let name: string = req.body.name as string;
  let age: number = 0;

  if (req.body.age) {
    let year: number = parseInt(req.body.age as string);
    let currentYear: number = new Date().getFullYear();
    age = currentYear - year;
    showAge = true;
  }

  res.render("pages/name", {
    name,
    age,
    showAge,
  });
};

export const formUser = (req: Request, res: Response) => {
  res.render("pages/name");
};
