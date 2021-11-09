import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) =>
  res.send("Esta é a página de Noticia")
);

router.get("/:slug", (req: Request, res: Response) => {
  let slug = req.params.slug;
  res.send(`Notícia: ${slug}`);
});

router.get("/pesquisa/:dateInitial-:dateEnd", (req: Request, res: Response) => {
  let startDate: string = req.params.dateInitial;
  let endDate: string = req.params.dateEnd;
  res.send(`Procurando noticias de ${startDate} até ${endDate}`);
});

export default router;
