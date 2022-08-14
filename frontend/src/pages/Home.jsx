import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const resp = await axios.get("/api/recipes", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setRecipes(resp.data.recipes);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
      {recipes &&
        recipes.map((recipe) => <Card key={recipe.id} recipe={recipe} />)}
    </div>
  );
};

export default Home;
