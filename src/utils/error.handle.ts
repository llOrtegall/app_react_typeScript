import { Response } from "express";

const handleHttp = (res: Response, e: string) => {
  res.status(500);
  res.send({ e });
}

export { handleHttp };