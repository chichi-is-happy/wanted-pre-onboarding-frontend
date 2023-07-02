import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { fetchTodos } from "../api/todo";
import { handleAddTodo } from "../api/todo";

export const API_URL = "https://www.pre-onboarding-selection-task.shop";

// state Context
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

// dispatch Context
export const dispatchContext = React.createContext<TodoDispatchContextType>({
  addTodo: () => {},
  // deleteTodo,
  // updateTodo,
});

type TodoDispatchContextType = {
  addTodo: (todo: string) => void;
};

// const dispatchContextValue: TodoDispatchContextType = {
//   addTodo: createTodo,
// };

const getTodosHandler = async () => {
  const { data } = await fetchTodos();
  return data ? data : [];
};

export const TodoContextProvider: React.FC<{ children: any }> = (props) => {
  const [todoState, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const datas = await getTodosHandler();
      setTodos(datas);
    };
    fetchDatas();
  }, []);

  const addTodo = useCallback(
    async (todo: string) => {
      const res = await handleAddTodo(todo);
      if (res.status === 201) {
        const newTodos = [...todoState, res.data!];
        setTodos(newTodos);
        console.log(newTodos);
      } else {
        alert(res.status);
      }
    },
    [todoState]
  );

  const memoizedDispatch = useMemo(() => {
    return { addTodo };
  }, [addTodo]);

  const contextValue: TodosContextType = {
    items: todoState,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      <dispatchContext.Provider value={memoizedDispatch}>
        {props.children}
      </dispatchContext.Provider>
    </TodoContext.Provider>
  );
};
