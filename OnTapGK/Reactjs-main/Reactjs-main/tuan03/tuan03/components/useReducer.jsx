import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
};

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}