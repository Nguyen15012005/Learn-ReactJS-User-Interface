import { useReducer } from "react";
import { CartList } from "./components/CartList";
import { Shop } from "./components/Shop";

const intialValue = {
  cart: [],
  total: 0,
};

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

      if (index === -1) return { ...state };

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
        const updatedCart = state.cart.filter(
          (x) => x.id !== action.payload.id
        );
        return {
          ...state,
          cart: updatedCart,
          total: state.total - item.gia,
        };
      }
    }

    default:
      return { ...state };
  }
};

function App() {
  const [state, dispatch] = useReducer(CartReducer, intialValue);
  console.log(state.cart);
  return (
    <>
      <div className="my-12 w-11/12 mx-auto">
        <CartList data={state.cart} total={state.total} dispatch={dispatch} />
        <Shop dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
