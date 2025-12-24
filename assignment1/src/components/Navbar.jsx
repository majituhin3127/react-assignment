// src/components/Navbar.jsx

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div style={{ padding: "10px", background: "#eee" }}>
      🛒 Cart Items: <b>{totalItems}</b>
    </div>
  );
};

export default Navbar;
