import Calculator from "./components/Calculator";
import HelloButton from "./components/HelloButton";
import PlusCalculator from "./components/PlusCalculator";
import Tab from "./components/Tab";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">CÂU 1</h1>
      <HelloButton />
      <hr />

      <h1 className="text-3xl font-bold">CÂU 2</h1>
      <PlusCalculator />
      <hr />

      <h1 className="text-3xl font-bold">CÂU 3</h1>
      <Calculator />
      <hr />

      <h1 className="text-3xl font-bold">CÂU 4</h1>
      <Tab />
      <hr />

      <h1 className="text-3xl font-bold">CÂU 5</h1>
      <TodoList />
      <hr />
    </>
  );
}

export default App;
