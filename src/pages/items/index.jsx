import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { searchItems } from "../../services/searchItemsService";
import MyLayout from "../../components/MyLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProductsList from "../../components/ProductsList";

export default function ProductsIndex() {
  const router = useRouter();

  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    const { search } = router.query;

    if (search) {
      const getItems = async () => {
        try {
          const responseSearch = await searchItems(search);

          setSearchResults(responseSearch);
        } catch (e) {
          console.warn(e);
        }
      };

      getItems();
    }
  }, [router.query.search]);

  return (
    <section className="products-index">
      {searchResults && (
        <>
          <BreadCrumbs categories={searchResults.categories} />
          <ProductsList products={searchResults} />
        </>
      )}
    </section>
  );
}

ProductsIndex.Layout = MyLayout;
