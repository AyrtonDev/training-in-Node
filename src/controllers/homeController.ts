import { Request, Response } from "express";
import { Skill } from "../models/Skill";
import User from "../models/User";

export const home = async (req: Request, res: Response) => {
  let users = await User.find({ birthYear: { $gt: 1995 } })
    .sort({
      birthYear: -1,
    })
    .skip(0)
    .limit(2);
  console.log("USUARIOS", users);

  /*
  gt = Greater then == Maior que
  gte = Greater or equal == maior ou igual
  lt = Lower then == menor que
  lte = Lower or Equal == menor ou igual
  */

  let age: number = 26;
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
    users,
  });
};
