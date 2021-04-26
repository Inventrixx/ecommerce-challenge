import React from "react";

import MyLayout from "./MyLayout";

export default function ProductDetail({ productDetail }) {
  return (
    <>
      <section className="product-detail-content">
        <div className="product-detail-img">
          <img src={productDetail.picture} />
        </div>
        <div className="product-detail-header">
          <div className="product-detail-conditions">
            <span>{productDetail.condition == "new" ? "Nuevo" : "Usado"}</span>-
            <span>{productDetail.sold_quantity} vendidos </span>
          </div>
          <span className="product-detail-title">{productDetail.title}</span>
          <span className="product-detail-amount">
            $ {productDetail.price.amount}
          </span>
          <div className="btn-container">
            <button className="product-purchase" type="button">
              Comprar
            </button>
          </div>
        </div>
      </section>
      <section className="product-description">
        <h4 className="product-description-title">Descripcion del producto</h4>
        <div className="product-description-text">
          {productDetail.description}
        </div>
      </section>
    </>
  );
}

ProductDetail.Layout = MyLayout;
