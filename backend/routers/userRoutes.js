import express from "express";

import { getUsers, addUser } from '../controllers/usersController.js';

const usersRouter = express.Router();



usersRouter.get("/", getUsers);
usersRouter.post("/", addUser);


export{usersRouter};
