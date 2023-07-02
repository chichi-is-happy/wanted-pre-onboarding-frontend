import React, { useContext, useRef } from "react";
import { dispatchContext } from "../../context/todoContexts";

const TodoCreate = () => {
  const todos = useContext(dispatchContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      todos.addTodo(inputValue);
      inputRef.current.value = "";
    } else alert("할 일을 입력해주세요!");
  };

  const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div>
      <input
        data-testid="new-todo-input"
        onKeyDown={submitOnEnter}
        ref={inputRef}
      />
      <button data-testid="new-todo-add-button" onClick={handleButtonClick}>
        추가
      </button>
    </div>
  );
};

export default TodoCreate;