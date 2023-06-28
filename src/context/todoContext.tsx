import React, { createContext, useState, useEffect } from "react";
import { fetchTodos } from "../api/todo";

export const API_URL = "https://www.pre-onboarding-selection-task.shop";

export const TodoContext = React.createContext<TodosContextType>({
  items: [],
});

type TodosContextType = {
  items: TodoType[];
};

export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const TodoContextProvider: React.FC<{ children: any }> = (props) => {
  const [todo, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const datas = await getTodosHandler();
      setTodos(datas);
    };
    fetchDatas();
  }, []);

  const getTodosHandler = async () => {
    const { data } = await fetchTodos();
    return data ? data : [];
  };

  const contextValue: TodosContextType = {
    items: todo,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};
