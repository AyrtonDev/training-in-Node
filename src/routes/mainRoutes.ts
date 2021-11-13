import { Router, Request, Response } from "express";
import * as HomeController from "../controllers";

const router = Router();

router.get("/", HomeController.home);

router.get("/contato", HomeController.infoContato);

router.get("/sobre", HomeController.infoSobre);

router.get("/name", HomeController.formUser);

router.post("/name", HomeController.formAction);

export default router;
