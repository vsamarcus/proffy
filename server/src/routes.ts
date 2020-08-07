import express from "express";
import classesController from "./controllers/ClassesController";
import connectionsControllers from "./controllers/ConnectionsController";

const routes = express.Router();

const ClassesController = new classesController();
const ConnectioncController = new connectionsControllers();

routes.get("/classes", ClassesController.index);
routes.post("/classes", ClassesController.create);

routes.get("/connections", ConnectioncController.index);
routes.post("/connections", ConnectioncController.create);

export default routes;
