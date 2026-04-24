import { Provider } from "react-redux";
import CounterCard from "./components/CounterCard";
import store from "./features/store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center items-center min-h-screen">
        <CounterCard />
      </div>
    </Provider>
  );
}

export default App;
