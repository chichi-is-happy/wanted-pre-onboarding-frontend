import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/todoContexts";

const TodoList = () => {
  const todos = useContext(TodoContext).items;

  return (
    <React.Fragment>
      {todos.map((todo: any) => (
        <li key={todo.id}>
          <label>
            <input type="checkbox" defaultChecked={todo.isCompleted} />
            <span>{todo.todo}</span>
          </label>
        </li>
      ))}
    </React.Fragment>
  );
};

export default TodoList;
