import React, { useContext, useEffect, useState, useRef } from "react";
import { TodoContext } from "../../context/todoContexts";
import { dispatchContext } from "../../context/todoContexts";

interface Props {
  id: number;
  isCompleted: boolean;
  todo: string;
}

const TodoItem = ({ id, isCompleted, todo }: Props): React.ReactElement => {
  const todos = useContext(dispatchContext);
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditButtonClick = () => {
    setEdit(!edit);
  };

  const handleEditSubmit = () => {
    setEdit(!edit);
    const inputValue = inputRef.current?.value;
    console.log("inputValue: ", inputValue);
    if (inputValue) {
      todos.updateTodo(inputValue, isCompleted, id);
      setEdit(false);
    } else alert("수정할 내용을 입력해 주세요.");
  };

  const handleDeleteSubmit = (id: number) => {
    todos.deleteTodo(id);
  };

  return (
    <li className="mb-2 list-none text-lg" key={id}>
      <label className="flex justify-between w-full items-center">
        <div className="flex items-center flex-grow mr-2">
          <input
            className="mr-2 text-lg w-4 h-4"
            type="checkbox"
            defaultChecked={isCompleted}
          />
          {edit ? (
            <input
              className="edit_input "
              defaultValue={todo}
              data-testid="modify-input"
              ref={inputRef}
            ></input>
          ) : (
            <span className={isCompleted ? "line-trough p-2 " : "null"}>
              {todo}
            </span>
          )}
        </div>
        <div className="flex items-center">
          {edit ? (
            <button
              className="border rounded-xl p-2 w-20 mr-3"
              onClick={() => handleEditSubmit()}
              data-testid="submit-button"
            >
              제출
            </button>
          ) : (
            <button
              className="border rounded-xl p-2 w-20 mr-3"
              data-testid="modify-button"
              onClick={() => handleEditButtonClick()}
            >
              수정
            </button>
          )}
          {edit ? (
            <button
              className="border rounded-xl p-2 w-20"
              data-testid="cancel-button"
              onClick={() => handleEditButtonClick()}
            >
              취소
            </button>
          ) : (
            <button
              className="border rounded-xl p-2 w-20"
              data-testid="delete-button"
              onClick={() => handleDeleteSubmit(id)}
            >
              삭제
            </button>
          )}
        </div>
      </label>
    </li>
  );
};

export default TodoItem;
