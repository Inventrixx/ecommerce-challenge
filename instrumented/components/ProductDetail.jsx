import React from "react";

import MyLayout from "./MyLayout";

export default function ProductDetail({ productDetail }) {
  return (
    <section className="product-detail-container">
      <section className="product-detail-content">
        <div className="product-detail-img">
          <img src={productDetail.picture} />
        </div>
        <div className="product-detail-header">
          <div className="product-detail-conditions">
            <span>{productDetail.condition == "new" ? "Nuevo" : "Usado"}</span>-
            <span>{productDetail.sold_quantity} vendidos </span>
          </div>
          <h4 className="product-detail-title">{productDetail.title}</h4>
          <h2 className="product-detail-amount">
            $ {productDetail.price.amount}
            {productDetail.price.decimals !== 0 &&
              `, ${productDetail.price.decimals}`}
          </h2>
          <div className="btn-container">
            <button className="product-purchase" type="button">
              Comprar
            </button>
          </div>
        </div>
      </section>
      <section className="product-description">
        <h4 className="product-description-title">Descripcion del producto</h4>
        <div className="product-description-content">
          {productDetail.description}
        </div>
      </section>
    </section>
  );
}

ProductDetail.Layout = MyLayout;
