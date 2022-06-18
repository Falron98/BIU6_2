import React from "react";

import useMeals from "./hooks/useMeals";

import PageLayout from "./layouts/PageLayout/PageLayout";
import MealsList from "./components/MealsList/MealsList";
import MealListItem from "./components/MealListItem/MealListItem";
import Description from "./layouts/MealDescription/Description";
import Loading from "./components/Loading/Loading";

import { Content } from "./consts/content";

export default function App() {
    const meals = useMeals();

    return (
        <PageLayout>
            <MealsList title={Content.MEALS_LIST_TITLE}>
                {meals !== undefined ? (
                    <>
                        {meals.map(({ idMeal, strMeal, strMealThumb }) => (
                            <MealListItem
                                key={`${idMeal}-${strMeal}`}
                                strMeal={strMeal}
                                strMealThumb={strMealThumb}
                            >
                                <Description idMeal={idMeal} strMeal={strMeal} />
                            </MealListItem>
                        ))}
                    </>
                ) : (
                    <Loading />
                )}
            </MealsList>
        </PageLayout>
    );
}
