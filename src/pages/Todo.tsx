import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRedirect from "../hooks/useRedirect";
import TodoList from "../components/todo/TodoList";
import TodoCreate from "../components/todo/TodoCreate";
import { TodoContextProvider } from "../context/todoContexts";

const Todo = () => {
  useRedirect();
  const navigate = useNavigate();
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");

  useEffect(() => {
    getCurrentDate();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/signin");
  };

  const getCurrentDate = () => {
    let now: Date = new Date();
    console.log(now);
    let newNow = now.toString().split(" ").slice(0, 3);
    console.log(newNow);
    setDay(newNow[0]);
    setDate(newNow[1]);
    setMonth(newNow[2]);
  };

  return (
    <TodoContextProvider>
      <div className="bg-gradient-to-b to-gray-200 via-gray-100 from-white">
        <main className="base_layout">
          <button
            className="gray_button absolute top-10 right-20"
            onClick={() => handleLogout()}
          >
            로그아웃
          </button>
          <div className="flex h-full w-4/6 items-center justify-center">
            <div className="flex flex-col m-10 p-10 border h-4/5 w-3/5 overflow-auto rounded-xl scrollbar border-gray-200 bg-white">
              <h1 className="text-4xl mt-3">Today's Task</h1>

              <div className="flex">
                {day && <p className="mr-1 text-gray-400">{day}</p>}
                {date && <p className="mr-1 text-gray-400">{date}</p>}
                {month && <p className="text-gray-400">{month}</p>}
              </div>
              <TodoCreate />
              <TodoList />
            </div>
          </div>
        </main>
      </div>
    </TodoContextProvider>
  );
};

export default Todo;
