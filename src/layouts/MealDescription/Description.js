import React from "react";

import "./Description.css";

import useMealById from "../../hooks/useMealById";

import MealDetailsList from "../../components/MealDetailsList/MealDetailsList";
import MealDescriptionButton from "../../components/MealDescriptionButton/MealDescriptionButton";
import MealRecipe from "../../components/MealRecipe/MealRecipe";
import Loading from "../../components/Loading/Loading";

const MealDescriptionState = {
  DETAILS: "DETAILS",
  RECIPE: "RECIPE",
};

export default function Description({ idMeal, strMeal }) {
  const [showContent, setShowContent] = React.useState(
    MealDescriptionState.DETAILS
  );

  const mealById = useMealById(idMeal);

  const ingredientsArray = React.useCallback(() => {
    if (mealById) {
      Object.entries(mealById).forEach((value) =>
        console.log(value)
      );
    }
  }, [mealById]);

  React.useEffect(() => {
    ingredientsArray();
  }, [ingredientsArray]);

  return (
    <li className="e-two-meal-description">
      {mealById && mealById.idMeal === idMeal ? (
        <>
          <div className="e-two-meal-description__button-wrapper">
            <MealDescriptionButton
              label={`Details`}
              onClick={() => setShowContent(MealDescriptionState.DETAILS)}
            />
            <MealDescriptionButton
              label={`Recipe`}
              onClick={() => setShowContent(MealDescriptionState.RECIPE)}
            />
          </div>
          <div className="e-two-meal-description__content-wrapper">
            {showContent === MealDescriptionState.DETAILS && (
              <MealDetailsList
                strArea={mealById.strArea}
                strCategory={mealById.strCategory}
                strTags={mealById.strTags}
                strYoutube={mealById.strYoutube}
              />
            )}

            {showContent === MealDescriptionState.RECIPE && (
              <MealRecipe
                strMeal={mealById.strMeal}
                strInstructions={mealById.strInstructions}
              />
            )}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </li>
  );
}
