import { Request, Response, Router } from "express";

const router = Router();

/* http://localhost:3002/items [GET] */

router.get("/", (req: Request, res: Response) => {
  res.send({ data: 'AQUI VAN LOS MODELOS' })
});

export { router };