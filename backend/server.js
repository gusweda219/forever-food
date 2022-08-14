import dotenv from "dotenv";

import express, { json } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user";
import recipeRoutes from "./routes/recipe";

dotenv.config();

const app = express();

// midlleware
app.use(json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/user", userRoutes);
app.use("/api/recipes", recipeRoutes);

// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
