// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { TodoReadApiResponse } from "../types/todo";
// import axios from "axios";
// import { handleAddTodo } from "../api/todo";

// export const API_URL = "https://www.pre-onboarding-selection-task.shop";

// export const TodoContext = React.createContext<TodosContextType>({
//   addTodo,
//   deleteTodo,
//   modifyTodo,
// });

// type TodosContextType = {
//   // 아래부터 DispatchContext
//   addTodo: (todo: string) => void;
//   deleteTodo: (id: number) => void;
//   modifyTodo: (id: number, todo: string, isCompleted: boolean) => void;
// };

// export interface TodoType {
//   id: number;
//   todo: string;
//   isCompleted: boolean;
//   userId: number;
// }

// export const TodoContextProvider: React.FC<{ children: any }> = (props) => {
//   const [todo, setTodos] = useState<TodoType[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDatas = async () => {
//       const datas = await getTodosHandler();
//       setTodos(datas);
//     };
//     fetchDatas();
//   }, []);

//   const getTodosHandler = async () => {
//     const { data } = await fetchTodos();
//     return data ? data : [];
//   };

//   const contextValue: TodosContextType = {
//     items: todo,
//   };

//   return (
//     <TodoContext.Provider value={contextValue}>
//       {props.children}
//     </TodoContext.Provider>
//   );
// };
export {};
