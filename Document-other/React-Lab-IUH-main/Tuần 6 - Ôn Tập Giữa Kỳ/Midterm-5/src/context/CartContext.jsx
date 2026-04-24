import { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext({
  state: {
    cart: [],
    total: 0,
  },
  dispatch: () => {},
});

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const index = state.cart.findIndex((x) => x.id === action.payload.id);

      if (index !== -1) {
        const item = state.cart[index];
        const updatedCart = [...state.cart];
        updatedCart[index] = { ...item, quantity: item.quantity + 1 };

        return {
          ...state,
          cart: updatedCart,
          total: state.total + action.payload.gia,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.gia,
        };
      }
    }
    case "REMOVE": {
      const index = state.cart.findIndex((x) => x.id === action.payload.id);

      if (index === -1) return;
      const item = state.cart[index];

      if (item.quantity > 1) {
        const updatedCart = [...state.cart];
        updatedCart[index] = { ...item, quantity: item.quantity - 1 };

        return {
          ...state,
          cart: updatedCart,
          total: state.total - item.gia,
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((x) => x.id !== action.payload.id),
          total: state.total - item.gia,
        };
      }
    }
    case "DELETE": {
      const index = state.cart.findIndex((x) => x.id === action.payload.id);

      if (index === -1) return;
      const item = state.cart[index];

      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload.id),
        total: state.total - item.gia * item.quantity,
      };
    }

    default: {
      return { ...state };
    }
  }
};

const initialState = {
  cart: [],
  total: 0,
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
