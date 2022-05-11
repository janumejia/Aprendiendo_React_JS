import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo }) { //Los atributos que llegan a la función son llamados "Props"
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  )
}
