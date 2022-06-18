import "./MealsList.css";

export default function MealsList({ title, children }) {
  return (
    <article className="e-two-meals-list">
      <h3 className="e-two-meals-list__header">{title}</h3>
      <ul className="e-two-meals-list__list">{children}</ul>
    </article>
  );
}
