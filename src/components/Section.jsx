import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section className="section" id={id} aria-label={title}>
      <div className="sectionHeader">
        <h2>{title}</h2>
        {subtitle ? <p className="sectionSub">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
