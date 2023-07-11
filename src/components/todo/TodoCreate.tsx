import React, { useContext, useRef, useState, ChangeEvent } from "react";
import { dispatchContext } from "../../context/todoContexts";
const TodoCreate = () => {
  const [inputTodo, setInput] = useState("");
  const [isComposing, setComposing] = useState(false);
  const todos = useContext(dispatchContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(inputTodo);
  };

  const handleButtonClick = () => {
    if (inputTodo) {
      todos.addTodo(inputTodo);
      setInput("");
    } else {
      alert("할 일을 입력해주세요!");
    }
  };

  const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isComposing) return;
    if (e.key === "Enter") {
      handleButtonClick();
      console.log("submitOnEnter 작동");
    }
  };

  return (
    <div className="flex w-full mb-8">
      <>
        <input
          type="text"
          className="flex-grow mr-2"
          data-testid="new-todo-input"
          onKeyDown={submitOnEnter}
          onCompositionStart={() => setComposing(true)}
          onCompositionEnd={() => setComposing(false)}
          value={inputTodo}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="button"
          className="w-1/5 base_button"
          data-testid="new-todo-add-button"
          onClick={handleButtonClick}
        >
          추가
        </button>
      </>
    </div>
  );
};

export default TodoCreate;
