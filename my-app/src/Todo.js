import React from 'react'

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            {todo.text}

            <div >
                <button style={{ color: 'blue' }} onClick={() => completeTodo(index)}>Complete</button>
            </div>
            <div>
                <button style={{ color: 'red' }} onClick={() => removeTodo(index)}>X</button>
            </div>

        </div>
    )
}

export default Todo
