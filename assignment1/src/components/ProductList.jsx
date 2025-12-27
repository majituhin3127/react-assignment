// src/components/ProductList.jsx

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Mobile", price: 10000 },
  { id: 2, name: "Laptop", price: 50000 }
];

const ProductList = () => {
  const { cart, dispatch } = useContext(CartContext);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (!exists) {
      dispatch({ type: "ADD_ITEM", payload: product });
    } else {
      dispatch({ type: "INCREASE_QTY", payload: product.id });
    }
  };

  return (
    <div>
      <h3>Products</h3>

      {products.map(product => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
          <button onClick={() => addToCart(product)}> Add </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
