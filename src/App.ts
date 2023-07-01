import "dotenv/config";

import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3001;
const App = express();

App.use(cors());
App.listen(PORT, () => console.log(`Iniciando por el puerto ${PORT}`))