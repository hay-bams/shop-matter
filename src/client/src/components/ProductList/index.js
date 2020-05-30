import React from 'react';
import { useGlobalState } from 'hooks/useGlobalState';
import { Product } from 'components/Product';
import './index.css';

export const ProductList = () => {
    const [state, ] = useGlobalState()
    return (
       <div className="product-container">
          {state.products.map((product) => <Product key={product} item={product} />) }
       </div>
    )
}