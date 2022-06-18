import React from "react";

import useGet from "./useGet";

import { API } from "../api/API";

export default function useMealById(id) {
  const [mealById, setMealBId] = React.useState();

  const handleMealById = useGet(API.mealById(id), (data) =>
    setMealBId(data.meals[0])
  );

  React.useEffect(() => {
    handleMealById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mealById;
}
