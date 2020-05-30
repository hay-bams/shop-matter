import React, { useState, useEffect } from "react";
import { Nav } from "components/Nav";
import { ProductList } from "components/ProductList";
import axios from "axios";
import { useGlobalState } from "hooks/useGlobalState";

export const Home = () => {
 const [state, setState] = useGlobalState()
 useEffect(() => {
     axios.get('/products').then((products) => {
         setState({...state, products: products.data.products})
     }).catch((err) => console.log(err))
 }, [])

  return (
    <>
      <Nav />
      <ProductList />
    </>
  );
};
