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

router.get("/contato", (req: Request, res: Response) =>
  res.render("pages/contato")
);

router.get("/sobre", (req: Request, res: Response) =>
  res.render("pages/sobre")
);

router.get("/name", (req: Request, res: Response) => {
  res.render("pages/name");
});

router.post("/name", (req: Request, res: Response) => {
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
});

export default router;
