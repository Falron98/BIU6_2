import "./YTLink.css";

export default function YTLink({ strYoutube, label }) {
  return (
    <li className="e-two-yt-link">
      <a href={strYoutube} target="_blank" rel="noreferrer">
        {label}
      </a>
    </li>
  );
}
