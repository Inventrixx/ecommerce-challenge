import React from "react";
import { useRouter } from "next/router";

import MyLayout from "./MyLayout";

export default function ProductsList({ products }) {
  const router = useRouter();

  const onClickToItemId = (e, itemId) => {
    e.preventDefault();
    router.push(`/items/${itemId}`);
  };

  return (
    <div className="products-list-container">
      {products.items.map((product) => {
        return (
          <div
            className="product-content"
            onClick={(e) => onClickToItemId(e, product.id)}
          >
            <div className="product-img-container">
              <img className="product-img" src={product.picture} />
            </div>
            <div className="product-header">
              <h2 className="product-price">${product.price.amount}</h2>
              <h4 className="product-title">{product.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ProductsList.Layout = MyLayout;
