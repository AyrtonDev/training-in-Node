import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  let age: number = 16;
  let testingAge: boolean;

  if (age > 18) {
    testingAge = true;
  } else {
    testingAge = false;
  }

  res.render("pages/home", {
    name: "Ayrton",
    lastName: "Guerra",
    testingAge,
    age,
    skills: [
      { title: "node", level: "Iniciante" },
      { title: "react", level: "intermediario" },
      { title: "Html/css", level: "intermediario" },
    ],
  });
});

router.get("/Contato", (req: Request, res: Response) =>
  res.render("pages/contato")
);

router.get("/Sobre", (req: Request, res: Response) =>
  res.render("pages/sobre")
);

export default router;
