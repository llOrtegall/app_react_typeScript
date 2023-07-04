import { Response } from "express";

const handleHttp = (res: Response, e: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(500);
  res.send({ e });
}

export { handleHttp };