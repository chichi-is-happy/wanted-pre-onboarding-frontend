import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRedirect from "../hooks/useRedirect";
import TodoList from "../components/todo/TodoList";
import TodoCreate from "../components/todo/TodoCreate";
import { TodoContextProvider } from "../context/todoContext";

const Todo = () => {
  return (
    <TodoContextProvider>
      <main className="base_layout">
        <div className="flex h-full items-center justify-center ">
          <div className="flex flex-col m-10 p-10 border h-4/5 w-3/5">
            <TodoCreate />
            <TodoList />
          </div>
        </div>
      </main>
    </TodoContextProvider>
  );
};

export default Todo;
