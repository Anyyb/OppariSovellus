import express from "express";
import {MONGODB_URI} from "./config/config.js";
import {info, errorM} from "./utils/logger.js";
import { usersRouter } from "./routers/userRoutes.js";
import { hobbiesRouter} from "./routers/hobbyRoutes.js";
import mongoose from "mongoose";

const app = express();
app.use(express.static('dist'));
app.use(express.json()); 

//mongodb yhteys
mongoose.set('strictQuery', false);
info('connecting to', MONGODB_URI);
mongoose.connect(MONGODB_URI)
  .then(() => {
    info('connected to MongoDB')
  })
  .catch((error) => {
    errorM('error connecting to MongoDB:', error.message)
  });

  app.use("/api/users",usersRouter)
  app.use("/api/hobbies",hobbiesRouter)
  
  export default app;