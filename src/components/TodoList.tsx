import React from 'react'

export default function TodoList({ todos, toggleTodo }) {
  return (
    <ul style={{ listStyle: 'none' }} data-testid="todoList">
      {todos &&
      todos.map((t, i) => (
        <li
          onClick={() => toggleTodo(i)}
          style={{
            margin: 10,
            textAlign: 'left',
            opacity: t.completed ? 0.5 : 1,
            cursor: 'pointer',
            listStyleType: t.completed ? 'none' : 'circle',
            textDecoration: t.completed
              ? 'line-through'
              : 'none'
          }}
          key={t.id}
        >
          {t.text}
        </li>
      ))}
    </ul>
  )
}


