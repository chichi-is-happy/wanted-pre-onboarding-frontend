import React, { useContext, useState, useRef, ChangeEvent } from "react";
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
  const [isCompletedState, setCompleted] = useState(isCompleted);

  const handleEditButtonClick = () => {
    setEdit(!edit);
  };

  const handleEditSubmit = () => {
    setEdit(!edit);
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      todos.updateTodo(inputValue, isCompleted, id);
      setEdit(false);
    } else alert("수정할 내용을 입력해 주세요.");
  };

  const handleDeleteSubmit = (id: number) => {
    todos.deleteTodo(id);
  };

  const handleCheckSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    setCompleted(e.target.checked);
    todos.updateTodo(todo, e.target.checked, id);
  };

  return (
    <li className="mb-2 list-none text-lg" key={id}>
      <label className="flex w-full items-center">
        <div className="flex items-center flex-grow mr-2">
          <div className="checkContainer mr-3 w-5 h-5 flex">
            <input
              className="appearance-none mr-2 text-lg w-4 h-4 flex-none  
              cursor-pointer rounded-md"
              type="checkbox"
              checked={isCompletedState}
              onChange={(e) => handleCheckSubmit(e)}
            ></input>
            <div className="checkIcon cursor-pointer">
              {isCompletedState && "✔︎"}
            </div>
          </div>
          {edit ? (
            <input
              className="edit_input "
              defaultValue={todo}
              data-testid="modify-input"
              ref={inputRef}
            ></input>
          ) : (
            <span className={isCompleted ? "completed" : ""}>{todo}</span>
          )}
        </div>
        <div className="flex items-center">
          {edit ? (
            <button
              className="base_button w-20 mr-3"
              onClick={() => handleEditSubmit()}
              data-testid="submit-button"
            >
              제출
            </button>
          ) : (
            <button
              className="base_button w-20 mr-3"
              data-testid="modify-button"
              onClick={() => handleEditButtonClick()}
            >
              수정
            </button>
          )}
          {edit ? (
            <button
              className="gray_button w-20"
              data-testid="cancel-button"
              onClick={() => handleEditButtonClick()}
            >
              취소
            </button>
          ) : (
            <button
              className="gray_button w-20"
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
