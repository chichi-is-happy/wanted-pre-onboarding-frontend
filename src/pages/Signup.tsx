import React from "react";
import Sign from "../components/sign/Sign";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    // 버튼을 클릭시 회원가입을 진행
    // 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동
    navigate("/signin");
  };

  return (
    <React.Fragment>
      <div>회원가입페이지</div>
      <Sign type="signup" handleSubmit={handleSubmit} />
    </React.Fragment>
  );
};

export default SignUp;
