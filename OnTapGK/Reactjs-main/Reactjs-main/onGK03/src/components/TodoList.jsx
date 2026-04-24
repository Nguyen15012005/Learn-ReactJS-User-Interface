import React from "react";
import './TodoList.css';

// Nhận thêm onDelete từ props
const TodoList = ({ data, onDelete }) => {
    return (
        <div className="list">
            {data.map((todo) => {
                return (
                    <div key={todo.id} className="card">
                        <h2>{todo.name}</h2>
                        <p><b>Mô tả:</b> {todo.description}</p>
                        <p><b>Hạn chót:</b> {todo.dueDate}</p>
                        <p><b>Trạng thái:</b> {todo.status}</p>
                        
                        {/* NÚT XÓA Ở CUỐI MỖI CARD */}
                        <button 
                            className="delete-btn" 
                            onClick={() => onDelete(todo.id)}
                            style={{
                                backgroundColor: '#ff4d4f',
                                color: 'white',
                                border: 'none',
                                padding: '8px 15px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginTop: '10px'
                            }}
                        >
                            Xóa công việc
                        </button>
                    </div>
                );
            })}
        </div>
    )
}

export default TodoList;