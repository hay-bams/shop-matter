import React from "react";
import { Button } from "components/Button";
import productA from "images/C.jpg";
import "./index.css";

export const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="item-details">
        <h3>{item.name}</h3>
        <img src={productA} className="product-img" />
        <Button label="Add to cart" className="addtoCart" onClick={() => {}} />
      </div>
    </div>
  );
};
