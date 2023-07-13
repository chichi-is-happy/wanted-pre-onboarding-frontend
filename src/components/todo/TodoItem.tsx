import React, { useContext, useState, ChangeEvent, useEffect } from "react";
import { dispatchContext } from "../../context/todoContexts";
import { LuEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
interface Props {
  id: number;
  isCompleted: boolean;
  todo: string;
}

const TodoItem = ({ id, isCompleted, todo }: Props): React.ReactElement => {
  const todos = useContext(dispatchContext);
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState<string>("");
  const [isCompletedState, setCompleted] = useState(isCompleted);
  const [isHovered, setIsHover] = useState(false);

  const handleEditButtonClick = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    console.log("isHovered: ", isHovered);
  }, [isHovered]);

  const handleEditSubmit = () => {
    if (editTodo) {
      todos.updateTodo(editTodo, isCompleted, id);
      setEditMode(false);
      setEditTodo("");
    } else alert("수정할 내용을 입력해 주세요.");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
    console.log("editTodo: ", editTodo);
  };

  const handleDeleteSubmit = (id: number) => {
    todos.deleteTodo(id);
  };

  const handleCheckSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    setCompleted(e.target.checked);
    todos.updateTodo(todo, e.target.checked, id);
  };

  const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      handleEditSubmit();
      console.log("submitOnEnter 작동");
    }
  };

  return (
    <li
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="mb-2 list-none text-lg"
      key={id}
    >
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
          {editMode ? (
            <input
              className="edit_input "
              defaultValue={todo}
              data-testid="modify-input"
              onKeyDown={submitOnEnter}
              onChange={(e) => handleChange(e)}
            ></input>
          ) : (
            <span className={isCompleted ? "completed" : ""}>{todo}</span>
          )}
        </div>
        <div className="flex items-center w-20 h-10">
          {editMode ? (
            <button
              className="base_button w-20 mr-3  border-gray-50  bg-blue-200 hover:bg-blue-200 "
              onClick={() => handleEditSubmit()}
              data-testid="submit-button"
            >
              <BsCheck2Circle />
            </button>
          ) : (
            <button
              className={`${
                isHovered ? "" : "hidden"
              } gray_button w-20 mr-3 flex items-center justify-center`}
              data-testid="modify-button"
              onClick={() => handleEditButtonClick()}
            >
              <LuEdit />
            </button>
          )}
          {editMode ? (
            <button
              className="gray_button w-20 border-gray-50 hover:bg-gray-50 bg-gray-200 "
              data-testid="cancel-button"
              onClick={() => handleEditButtonClick()}
            >
              <AiOutlineClose />
            </button>
          ) : (
            <button
              className={`${
                isHovered ? "" : "hidden"
              } gray_button w-20 hover:bg-red-400 hover:text-white flex items-center justify-center`}
              data-testid="delete-button"
              onClick={() => handleDeleteSubmit(id)}
            >
              <span className="hover:text-white text-white">
                <MdDelete className="hover:text-white text-white" />
              </span>
            </button>
          )}
        </div>
      </label>
    </li>
  );
};

export default TodoItem;
