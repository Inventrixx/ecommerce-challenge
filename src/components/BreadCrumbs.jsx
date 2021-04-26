import React from "react";

export default function BreadCrumbs({ categories }) {
  return (
    <section className="breadCrumbs">
      <div className="breadCrumbs-content">
        {categories.map((category) => {
          return <span className="category-name">{category}</span>;
        })}
      </div>
    </section>
  );
}
