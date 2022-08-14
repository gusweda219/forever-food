import React from "react";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="rounded-md shadow-md w-full hover:opacity-80 hover:scale-105 duration-200">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[200px] object-cover rounded-t-md"
        />
        <div className="p-4">
          <h3 className="text-ellipsis whitespace-nowrap overflow-hidden">
            {recipe.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
