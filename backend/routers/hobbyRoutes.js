import express from "express";
import { getHobbies, addHobby } from '../controllers/hobbiesController.js';
const hobbiesRouter = express.Router();

hobbiesRouter.get("/", getHobbies);
hobbiesRouter.post("/", addHobby);

export{hobbiesRouter};
