import "dotenv/config";

import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;
const App = express();

App.use(cors());
App.use(router);
db().then(() => console.log("Conecxión Realizada"));
App.listen(PORT, () => console.log(`Iniciando por el puerto ${PORT}`))