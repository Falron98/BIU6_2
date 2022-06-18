import React from "react";

import "./MealRecipe.css";

import useFormattedString from "../../hooks/useFormattedString";

import RecipeModel from "../RecipeModal/RecipeModel";

export default function MealRecipe({ strMeal, strInstructions }) {
  const [showModal, setShowModel] = React.useState(false);

  const formattedString = useFormattedString(strInstructions);

  return (
    <div className="e-two-meal-recipe">
      <p className="e-two-meal-recipe__recipe">{formattedString}</p>
      <button
        className="e-two-meal-recipe__read-more"
        onClick={() => setShowModel(true)}
      >
        Read More
      </button>
      {showModal && (
        <RecipeModel
          strMeal={strMeal}
          strInstructions={strInstructions}
          closeModal={() => setShowModel(false)}
        />
      )}
    </div>
  );
}
