import React from "react";
import { useNavigate } from "react-router-dom";
import useRedirect from "../hooks/useRedirect";
import TodoList from "../components/todo/TodoList";
import TodoCreate from "../components/todo/TodoCreate";
import { TodoContextProvider } from "../context/todoContexts";

const Todo = () => {
  useRedirect();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/signin");
  };
  return (
    <TodoContextProvider>
      <main className="base_layout">
        <button
          className="gray_button absolute top-10 right-20"
          onClick={() => handleLogout()}
        >
          로그아웃
        </button>

        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col m-10 p-10 border h-4/5 w-3/5 overflow-auto rounded-xl scrollbar">
            <TodoCreate />
            <TodoList />
          </div>
        </div>
      </main>
    </TodoContextProvider>
  );
};

export default Todo;
