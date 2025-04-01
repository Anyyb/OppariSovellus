import express from "express";
import multer from "multer";
import { getUsers, addUser } from '../controllers/usersController.js';

const usersRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

usersRouter.get("/", getUsers);
usersRouter.post("/", addUser);
usersRouter.post("/upload", upload.single("image"), uploadUserImage);

export{usersRouter};
