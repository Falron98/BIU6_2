import React from "react";

import useGet from "../hooks/useGet";

import { API } from "../api/API";

export default function useMeals() {
  const [meals, setMeals] = React.useState();

  const handleMealsFromAPI = useGet(API.meals, (data) => setMeals(data.meals));

  React.useEffect(() => {
    handleMealsFromAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return meals;
}
