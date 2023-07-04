import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/todoContexts";

const TodoList = () => {
  const todos = useContext(TodoContext).items;
  const [edit, setEdit] = useState(false);

  return (
    <React.Fragment>
      {todos.map((todo: any) => (
        <li className="mb-2 list-none text-lg" key={todo.id}>
          <label className="flex justify-between w-full items-center">
            <div className="flex items-center">
              <input
                className="mr-2 text-lg w-4 h-4"
                type="checkbox"
                defaultChecked={todo.isCompleted}
              />
              {edit ? (
                <input className="edit_input" defaultValue={todo.todo}></input>
              ) : (
                <span
                  className={todo.isCompleted ? "line-trough p-2 " : "null"}
                >
                  {todo.todo}
                </span>
              )}
            </div>
            <div className="flex items-center">
              <button
                className="border rounded-xl p-2 w-20 mr-3"
                onClick={() => setEdit(!edit)}
              >
                수정
              </button>
              <button className="border rounded-xl p-2 w-20">삭제</button>
            </div>
          </label>
        </li>
      ))}
    </React.Fragment>
  );
};

export default TodoList;
