import React from "react";

const SearchBox = () => {
  return (
    <section className="searchBox">
      <div className="input-container">
        <input
          className="input-item"
          type="text"
          placeholder="Nunca dejes de buscar"
        />
      </div>
    </section>
  );
};

export default SearchBox;
