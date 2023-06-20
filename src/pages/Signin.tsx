import React from "react";
import Sign from "../components/sign/Sign";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    // 200 응답을 받을 시 로그인을 진행
    // 아닐 경우 텍스트나 alert로 표기, 에러 출력
    navigate("/signin");
  };

  return (
    <React.Fragment>
      <div>로그인 페이지</div>
      <Sign type="signin" handleSubmit={handleSubmit} />
    </React.Fragment>
  );
};

export default SignIn;
