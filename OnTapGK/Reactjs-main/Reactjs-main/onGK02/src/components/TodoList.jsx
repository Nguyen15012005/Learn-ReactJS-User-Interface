import React from 'react'
import './TodoList.css'


const TodoList = ({ data }) => {
    return (
        <div className="list">
            {
                data.map((todo) => {
                    return <div key={todo.id} className='card'>
                        <h2>{todo.name}</h2> <br />
                        <p>{todo.description}</p>
                        <p>{todo.dueDate}</p>
                        <p>{todo.status}</p>
                    </div>
                })
            }
        </div>
    )
}

export default TodoList