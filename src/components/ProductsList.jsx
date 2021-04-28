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
            key={product.id}
            id={product.id}
          >
            <div className="product-img-container">
              <img className="product-img" src={product.picture} />
            </div>
            <div className="product-header">
              <div className="product-price">
                <h2>${product.price.amount}</h2>
                {product.free_shipping && (
                  <span className="product-free-shipping">
                    <img src="/icon_free_shipping.png" />
                  </span>
                )}
              </div>
              <h4 className="product-title">{product.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ProductsList.Layout = MyLayout;
