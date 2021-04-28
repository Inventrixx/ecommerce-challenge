import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MyLayout from "../../components/MyLayout";
import ProductDetail from "../../components/ProductDetail";
import { searchItemId } from "../../services/searchItemsService";
import { searchCategories } from "../../services/searchCategories";
import Spinner from "../../components/Spinner";
import BreadCrumbs from "../../components/BreadCrumbs";

export default function ProductId() {
  const router = useRouter();

  const productsState = {
    INIT: "INIT",
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
  };

  const [productDetail, setProductDetail] = useState(null);
  const [searchState, setSearchState] = useState({
    state: productsState.INIT,
  });
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      setSearchState((prevState) => ({
        ...prevState,
        state: "LOADING",
      }));
      const getProduct = async () => {
        try {
          const product = await searchItemId(id);
          setProductDetail(product);

          if (product) {
            const resp = await searchCategories(product.category);
            setCategories(resp);
          }

          setSearchState((prevState) => ({
            ...prevState,
            state: "SUCCESS",
          }));
        } catch (e) {
          setSearchState((prevState) => ({
            ...prevState,
            state: "ERROR",
            message: "Ha ocurrido un error!",
          }));
        }
      };

      getProduct();
    }
  }, [router.query.id]);

  const whichToRender = () => {
    switch (searchState.state) {
      case productsState.LOADING:
        return <Spinner />;
      case productsState.SUCCESS:
        return (
          categories &&
          productDetail && (
            <>
              <BreadCrumbs categories={categories} />
              <ProductDetail productDetail={productDetail} />
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

  return <div className="product-id-view">{whichToRender()}</div>;
}

ProductId.Layout = MyLayout;
