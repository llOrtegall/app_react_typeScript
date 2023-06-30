import "dotenv/config";

import express from "express";
import cors from "cors";

const App = express();

App.use(cors());