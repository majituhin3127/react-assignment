// src/context/cartReducer.js

export const initialState = {
  cart: []
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }]
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
      };

    default:
      return state;
  }
};
