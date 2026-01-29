// import { Router } from "express";
import express from "express";
import * as wineController from "../controllers/wine.controller.js";

const router = express.Router();

router.get("/wines", wineController.getAllWines);
router.get("/wines/:id", wineController.getAllWines);

export default router;