import React, {useEffect} from "react";
import axios from 'axios';
import { Button } from "components/Button";
import productA from "images/C.jpg";
import { useGlobalState } from "hooks/useGlobalState";
import "./index.css";

export const Product = ({ item }) => {
    const [state, setState] = useGlobalState();
    // console.log(item, '++')
    const addToCart  = (e) => {
        e.preventDefault();
        
        axios.post('/carts/products', {product: item._id})
        .then((response) => {
            setState({...state, cart: response.data})
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="product">
      <div className="item-details">
        <h3>{item.name}</h3>
        <img src={productA} className="product-img" />
        <Button label="Add to cart" className="addtoCart" onClick={(e) => addToCart(e)} />
      </div>
    </div>
  );
};
