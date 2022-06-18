import "./PageLayout.css";

import LinkToPage from "../../components/LinkToPage/LinkToPage";

import { LinkTopPageContent } from "../../consts/linkToPageContent";

export default function PageLayout({ title, exerciseContent, children }) {
  return (
    <section className="e-two-page-layout">
      <h2 className="e-two-page-layout__header">{title}</h2>
      <p className="e-two-page-layout__exercise-content">
        {exerciseContent}&nbsp;
        <LinkToPage
          link={LinkTopPageContent.LINK}
          label={LinkTopPageContent.LABEL}
          blank={true}
        />
      </p>
      {children}
    </section>
  );
}
