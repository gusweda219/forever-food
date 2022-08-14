import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Searched = () => {
  const { user } = useSelector((state) => state.user);
  const { search } = useParams();
  const [searchRecipes, setSearchRecipes] = useState(null);

  useEffect(() => {
    const getSearched = async () => {
      const resp = await axios.get(`/api/recipes/search?query=${search}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setSearchRecipes(resp.data.results);
    };

    getSearched();
  }, [search]);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 mb-5">
      {searchRecipes &&
        searchRecipes.map((recipe) => <Card key={recipe.id} recipe={recipe} />)}
    </div>
  );
};

export default Searched;
