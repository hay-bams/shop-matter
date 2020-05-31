import React, { useState, useEffect } from "react";
import { Nav } from "components/Nav";
import { ProductList } from "components/ProductList";
import axios from "axios";
import { useGlobalState } from "hooks/useGlobalState";

export const Home = () => {
  const [state, setState] = useGlobalState();
  useEffect(() => {
    Promise.all([axios.get("/products"), axios.get("/carts")])
      .then(([products, carts]) => {
        setState({
          ...state,
          products: products.data.products,
          cart: carts.data,
        });
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <>
      <Nav />
      <ProductList />
    </>
  );
};
