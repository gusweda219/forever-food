import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Recipe = () => {
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    const fetchRecipe = async () => {
      const resp = await axios.get(`/api/recipes/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setRecipe(resp.data);
    };

    fetchRecipe();
  }, []);

  return (
    recipe && (
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <h2 className="text-2xl font-bold mb-5">{recipe.title}</h2>
          <img
            className="w-full object-cover shadow-md rounded-md"
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
        <div>
          <div className="flex flex-row items-start gap-2">
            <button
              className={`flex-1 p-3 font-medium rounded-md  ${
                activeTab === "instructions"
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary"
              }`}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </button>
            <button
              className={`flex-1 p-3 font-medium  ${
                activeTab === "ingredients"
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary"
              }`}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </button>
          </div>
          <div className="my-5 text-justify">
            {activeTab === "instructions" && (
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
                <h3
                  dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                ></h3>
              </div>
            )}
            {activeTab === "ingredients" && (
              <ul>
                {recipe.extendedIngredients.map((ingredients) => (
                  <li key={ingredients.id}>{ingredients.original}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Recipe;
