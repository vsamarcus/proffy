import express from "express";
import classesController from "./controllers/ClassesController";

const routes = express.Router();

const ClassesController = new classesController();

routes.get("/classes", ClassesController.index);
routes.post("/classes", ClassesController.create);

export default routes;
