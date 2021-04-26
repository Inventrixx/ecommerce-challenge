import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchBox = ({ value }) => {
  const router = useRouter();
  const [search, setSearch] = useState(value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (search) {
      router.push("/items?search=" + search);
    }
  };

  const handleSearch = () => {
    if (search) {
      router.push("/items?search=" + search);
    }
  };

  const handleOnChangeSearch = (event) => {
    event.preventDefault();

    const search = event.target.value;

    setSearch(search);
  };

  return (
    <section className="navbar-section">
      <div className="logo-container">
        <Link href="/">
          <a>
            <img className="logo-item" src="/Logo_ML_search.png" />
          </a>
        </Link>
      </div>
      <div className="input-container">
        <form className="searchbox-form" onSubmit={handleSubmit}>
          <input
            className="input-item"
            aria-label="Ingresa lo que quieras buscar"
            value={search}
            onChange={handleOnChangeSearch}
            type="text"
            placeholder="Nunca dejes de buscar"
          />
        </form>
        <div className="search-icon-container">
          <button
            type="submit"
            className="search-icon-button"
            onClick={handleSearch}
          >
            <img className="search-icon" src="/search-icon.png" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
