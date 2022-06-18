import "./RecipeModal.css";

export default function RecipeModel({ strMeal, strInstructions, closeModal }) {
  return (
    <>
      <section className="e-two-recipe-modal">
        <h2>{strMeal}</h2>
        <article>
          <h3>Recipe</h3>
          <p className="e-two-recipe-modal__recipe--instructions">{strInstructions}</p>
        </article>
        <button
          className="e-two-recipe-modal__close-button"
          onClick={closeModal}
        >
          Close
        </button>
      </section>
      <div className="e-two-recipe-modal--bg" onClick={closeModal} />
    </>
  );
}
