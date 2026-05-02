import TodoItem from "./TodoItem";

const TodoList = ({ data, dispatch }) => {
  return (
    <div className="w-1/3 mx-auto my-12">
      <h2 className="text-3xl pb-2 border-b-2 border-gray-400 text-center">
        Danh Sách Việc Cần Làm
      </h2>
      <div className="my-4 space-y-4">
        {data.map((item) => {
          return <TodoItem item={item} key={item.id} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
