import { Provider } from "react-redux";
import store from "./features/store";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">📝 Todo App</h1>
          <AddTodoForm />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
