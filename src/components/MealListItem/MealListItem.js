import "./MealListItem.css";

export default function MealLayout({
  strMeal,
  strMealThumb,
  children,
}) {
  return (
    <li className="e-two-meal-list-item">
      <picture className="e-two-meal-list-item__picture">
        <img
          className="e-two-meal-list-item__picture--img"
          src={strMealThumb}
          alt={`${strMeal}`}
        />
      </picture>
      <article className="e-two-meal-list-item__description">
        <h3 className="e-two-meal-list-item__description--header">{strMeal}</h3>
        {children}
      </article>
    </li>
  );
}
