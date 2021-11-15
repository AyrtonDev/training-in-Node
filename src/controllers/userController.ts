import { Request, Response } from "express";
import User from "../models/User";

export const formAction = async (req: Request, res: Response) => {
  try {
    let newUser = await User.create({
      name: {
        firstName: req.body.firstName as string,
        lastName: req.body.lastName as string,
      },
      email: req.body.email as string,
      birthYear: parseInt(req.body.age as string),
      interests: (req.body.interests as string).split(" "),
    });

    res.render("pages/name", { newUser });

    setTimeout(() => {
      res.redirect("/");
    }, 1000);
  } catch (error) {
    alert(`Houve um erro ao cadastrar usuario! ${error}`);
  } finally {
    alert("Usuario cadastradi com sucesso!");
  }

  // let showAge: boolean = false;
  // let name: string = req.body.name as string;
  // let age: number = 0;

  // if (req.body.age) {
  //   let year: number = parseInt(req.body.age as string);
  //   let currentYear: number = new Date().getFullYear();
  //   age = currentYear - year;
  //   showAge = true;
  // }
};

export const formUser = (req: Request, res: Response) => {
  res.render("pages/name");
};
