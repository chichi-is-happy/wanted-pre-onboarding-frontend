import React from "react";
import Sign from "../components/sign/Sign";
import { useNavigate } from "react-router-dom";
import { SignProp } from "../types/sign";
import { signUp } from "../api/sign";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }: SignProp) => {
    const res = await signUp({
      email,
      password,
    });
    if (res.status === 201) {
      alert("가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      navigate("/signin");
    } else {
      alert("다른 이메일을 입력하세요.");
    }
  };

  return (
    <React.Fragment>
      <div>회원가입페이지</div>
      <Sign type="signup" handleSubmit={handleSubmit} />
    </React.Fragment>
  );
};

export default SignUp;
