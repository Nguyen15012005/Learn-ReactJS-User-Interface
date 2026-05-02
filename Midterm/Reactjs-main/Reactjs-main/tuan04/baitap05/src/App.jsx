import React, { useEffect, useState } from 'react'
import axios from 'axios'
 
const url ="https://jsonplaceholder.typicode.com/todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchToDos = async () => {
      try {
        const res = await axios.get(`${url}?_limit=100`);
        setTodos(res.data);
      } catch (err) {
        setError("Không tải được danh sách!");
      } finally {
        setLoading(false);
      }
    };
    fetchToDos();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setSubmitting(true);
    try {
      const res = await axios.post(url, {
        title: newTitle,
        completed: false,
        userId: 1
      });
      const newTodoWithUniqueId = {
      ...res.data,
      id: Date.now() // Dùng timestamp để ID luôn là duy nhất
    };

    setTodos([newTodoWithUniqueId, ...todos]);
      setNewTitle("");
    } catch (err) {
      alert("Thêm mới thất bại!");
    } finally {
      setSubmitting(false);
    }
  };

  const deleteTodo = async (id) => {
    const oldTodos = [...todos];
    setTodos(todos.filter (t => t.id !== id));

    try{
      await axios.delete(`${url}/${id}`);
    } catch (err) {
      alert("Xóa thất bại!")
      setTodos(oldTodos);
    }
  }
  return (
      <div>
        <h2>CRUD</h2>

        <form onSubmit={addTodo} style={{marginBottom: '20px'}}>
          <input type="text"
                 value={newTitle}
                 onChange={(e) => setNewTitle(e.target.value)}
                 disabled = {submitting}
          />
          <button type='submit' disabled ={submitting || !newTitle}>
            {submitting ? "Đang thêm..." : "Thêm"}
          </button>
        </form>
        
        {loading && <p>Đang tải dữ liệu</p>}

        {error && <p style={{color: 'red'}}>{error}</p>}

        <ul>
          {todos.map(todo=> (
            <li key={todo.id} style={{listStyle: 'none', 
            padding: '10px', 
            borderBottom: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between'}}>
              <span>{todo.title}</span>
              <button onClick={() => deleteTodo(todo.id)}
              style={{color: 'red', cursor: 'pointer'}} >
                Xóa
              </button>
            </li>
          ))}
        </ul>
      </div>
  )
}
  export default App