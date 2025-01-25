import { Router } from "express";
import { addUser, getUsers } from "./controller.js";

// routes to manage to
export const toDoRouter = Router();


toDoRouter.route('/getUser').get(getUsers);
toDoRouter.route('/addUser').post(addUser);





