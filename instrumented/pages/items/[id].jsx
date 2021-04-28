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

  const [productDetail, setProductDetail] = useState(null);
  const [isError, setIsError] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      const getProduct = async () => {
        try {
          const product = await searchItemId(id);

          if (product) {
            const resp = await searchCategories(product.category);
            setCategories(resp);
          }

          setProductDetail(product);
          setIsLoading(false);
        } catch (e) {
          setIsError((prevError) => ({
            ...prevError,
            message: e.response,
            error: true,
          }));
        }
      };

      getProduct();
    }
  }, [router.query.id]);

  return (
    <div className="product-id-view">
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <BreadCrumbs categories={categories} />
          <ProductDetail productDetail={productDetail} />
        </>
      )}
      {isError && (
        <>
          Oh no! Ocurrio un problema. Volve al <a href="/">inicio</a> para
          seguir buscando!
        </>
      )}
    </div>
  );
}

ProductId.Layout = MyLayout;
