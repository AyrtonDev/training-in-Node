import { Request, Response } from "express";
import { Skill } from "../models/Skill";

export const home = (req: Request, res: Response) => {
  let age: number = 16;
  let testingAge: boolean;

  if (age > 18) {
    testingAge = true;
  } else {
    testingAge = false;
  }

  let list = Skill.getAll();

  res.render("pages/home", {
    name: "Ayrton",
    lastName: "Guerra",
    testingAge,
    age,
    skills: list,
  });
};
