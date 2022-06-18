import "./LinkToPage.css";

export default function LinkToPage({ link, label, blank }) {
  return (
    <a
      href={link}
      target={blank && "_blank"}
      rel="noreferrer"
      className="e-two-link-to-page"
    >
      <strong>{label}</strong>
    </a>
  );
}
