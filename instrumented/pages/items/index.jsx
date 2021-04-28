import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { searchItems } from "../../services/searchItemsService";
import MyLayout from "../../components/MyLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProductsList from "../../components/ProductsList";
import Spinner from "../../components/Spinner";

export default function ProductsIndex() {
  const router = useRouter();

  const productsState = {
    INIT: "INIT",
    LOADING: "LOADING",
    SUCESS: "SUCESS",
    ERROR: "ERROR",
  };

  const [searchResults, setSearchResults] = useState(null);

  const [searchState, setSearchState] = useState({
    state: productsState.INIT,
  });
  // const [isError, setIsError] = useState(null);

  useEffect(() => {
    const { search } = router.query;
    if (search) {
      setSearchState((prevState) => ({
        ...prevState,
        state: "LOADING",
      }));
      const getItems = async () => {
        try {
          const responseSearch = await searchItems(search);
          setSearchResults(responseSearch);
          setSearchState((prevState) => ({
            ...prevState,
            state: "SUCESS",
          }));

          if (!responseSearch.items.length) {
            setSearchState((prevState) => ({
              ...prevState,
              state: "ERROR",
              message: "No se encontraron los items!",
            }));
            // setIsLoading(false);
            return;
          }
        } catch (e) {
          setSearchState((prevState) => ({
            ...prevState,
            state: "ERROR",
            message: "Ha ocurrido un error!",
          }));
        }
      };

      getItems();
    }
  }, [router.query.search]);

  const whichToRender = () => {
    switch (searchState.state) {
      case productsState.LOADING:
        return <Spinner />;
      case productsState.SUCESS:
        return (
          searchResults && (
            <>
              <BreadCrumbs categories={searchResults.categories} />
              <ProductsList products={searchResults} />
            </>
          )
        );
      case productsState.ERROR:
        return (
          <div className="error">
            <span>{searchState.message}</span>
            <span>
              Volve al <a href="/">inicio</a> para seguir buscando!
            </span>
          </div>
        );
    }
  };

  return <section className="products-index">{whichToRender()}</section>;
}

ProductsIndex.Layout = MyLayout;
