// src/context/cartReducer.js

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { ...action.payload, qty: 1 }];

    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload);

    case "INCREASE_QTY":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item
      );

    case "DECREASE_QTY":
      return state.map(item =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );

    default:
      return state;
  }
};
