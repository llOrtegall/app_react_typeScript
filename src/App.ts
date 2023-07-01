import "dotenv/config";

import express from "express";
import cors from "cors";
import { router } from "./routes";

const PORT = process.env.PORT || 3001;
const App = express();

App.use(cors());
App.use(router);
App.listen(PORT, () => console.log(`Iniciando por el puerto ${PORT}`))