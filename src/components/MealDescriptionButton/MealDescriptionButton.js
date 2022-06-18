import "./MealDescriptionButton.css";

export default function MealDescriptionButton({ label, onClick }) {
  return (
    <button className="e-two-meal-description-button" onClick={onClick}>
      {label}
    </button>
  );
}
