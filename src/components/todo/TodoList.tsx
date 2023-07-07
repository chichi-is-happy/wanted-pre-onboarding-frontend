import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/todoContexts";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useContext(TodoContext).items;

  return (
    <React.Fragment>
      <ul>
        {todos.map((todo: any) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            isCompleted={todo.isCompleted}
            todo={todo.todo}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
