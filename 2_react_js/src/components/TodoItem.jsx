import React from 'react'

export function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;

  const handleTodoClick = () => { //Modifica el estado de "completed"
    toggleTodo(id);
  }; 

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleTodoClick} />
      {task}
    </li>
  );
}
