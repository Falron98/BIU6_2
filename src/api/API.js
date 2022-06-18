export const API = {
  meals: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
  mealById: (id) =>
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
};
