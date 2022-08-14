import axios from "axios";

export const getRecipes = async (req, res) => {
  const resp = await axios.get(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.API_KEY}`
  );

  res.status(200).json(resp.data);
};

export const searchRecipes = async (req, res) => {
  const { query } = req.query;
  const resp = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?number=10&query=${query}&apiKey=${process.env.API_KEY}`
  );

  res.status(200).json(resp.data);
};

export const getRecipe = async (req, res) => {
  const { id } = req.params;
  const resp = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`
  );

  res.status(200).json(resp.data);
};
