// src/components/Cart.jsx

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      <h3>Cart</h3>

      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price} × {item.qty}

          <button onClick={() => dispatch({ type: "INCREASE_QTY", payload: item.id })}>
            +
          </button>

          <button onClick={() => dispatch({ type: "DECREASE_QTY", payload: item.id })}>
            -
          </button>

          <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
            Remove
          </button>
        </div>
      ))}

      <h4>Total Price: ₹{totalPrice}</h4>
    </div>
  );
};

export default Cart;
