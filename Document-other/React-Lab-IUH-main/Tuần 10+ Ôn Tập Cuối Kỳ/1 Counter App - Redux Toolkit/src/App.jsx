import { Provider } from "react-redux";
import CounterCard from "./components/CounterCard";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <>
        <CounterCard />
      </>
    </Provider>
  );
}

export default App;
