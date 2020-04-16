import React, { useState } from 'react'

function Todoform({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                className="input"
                value={value}
                placeholder="just write your todos"
                onChange={(e) => setValue(e.target.value)} />
        </form>
    )
}

export default Todoform
