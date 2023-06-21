import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRedirect from "../hooks/useRedirect";

const Todo = () => {
  const navigate = useNavigate();
  useRedirect();

  return (
    <React.Fragment>
      <div>투두페이지</div>
    </React.Fragment>
  );
};

export default Todo;
