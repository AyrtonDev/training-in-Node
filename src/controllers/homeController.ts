import { Request, Response } from "express";
import { Skill } from "../models/Skill";
import User from "../models/User";

export const home = async (req: Request, res: Response) => {
  let users = await User.findOne({
    email: "ayrton@gmail.com",
  });
  console.log("USUARIOS", users);

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
