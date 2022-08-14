import express from "express";
import {
  getRecipes,
  getRecipe,
  searchRecipes,
} from "../controllers/recipeController";
import requireAuth from "../middleware/requireAuth";

const router = express.Router();

router.use(requireAuth);

router.get("/", getRecipes);
router.get("/search", searchRecipes);
router.get("/:id", getRecipe);

export default router;
