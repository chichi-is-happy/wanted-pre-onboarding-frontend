import React from "react";
import Sign from "../components/sign/Sign";
import { useNavigate } from "react-router-dom";
import { SignProp } from "../types/sign";
import { signIn } from "../api/sign";
import useRedirect from "../hooks/useRedirect";

const SignIn = () => {
  const navigate = useNavigate();

  useRedirect();

  const handleSubmit = async ({ email, password }: SignProp) => {
    try {
      const { status, data } = await signIn({ email, password });
      if (status === 200) {
        localStorage.setItem("access_token", data!.access_token);
        navigate("/todo");
      } else {
        alert(
          "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
        );
      }
    } catch (error) {
      console.error("에러:", error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <React.Fragment>
      <Sign type="signin" handleSubmit={handleSubmit} />
    </React.Fragment>
  );
};

export default SignIn;
