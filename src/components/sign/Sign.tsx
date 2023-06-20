import React, { ChangeEvent, useState } from "react";

type signInputType = {
  email: {
    value: string;
    isValid: boolean;
  };
  password: {
    value: string;
    isValid: boolean;
  };
};

const signInitialData: signInputType = {
  email: {
    value: "",
    isValid: false,
  },
  password: {
    value: "",
    isValid: false,
  },
};
const Sign = () => {
  const [signInput, setSignInput] = useState<signInputType>(signInitialData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, label: string) => {
    // 정규표현식
    const emailRegex = /@/;

    const { value } = e.target!;
    if (
      (label === "email" && emailRegex.test(value)) ||
      (label === "password" && value.length >= 8)
    ) {
      setSignInput({
        ...signInput,
        [label]: { value: value, isValid: true },
      });
      console.log("변경 확인", label, signInput);

      return;
    } else {
      setSignInput({
        ...signInput,
        [label]: { value: value, isValid: false },
      });
      console.log("미통과 변경 확인", label, signInput);

      return;
    }
  };

  return (
    <React.Fragment>
      <main className="base_layout">
        <div className="flex h-full items-center">
          <div className="flex flex-col w-2/5 p-10 border-r h-full justify-center ">
            <div className="flex-col">
              <h1 className="text-xl text-red-200">어서오세요</h1>
              <p>로그인이 필요합니다</p>
            </div>
          </div>

          <form className="flex w-3/5 flex-col p-10 h-full justify-center">
            <div className="flex flex-col input-field-wrapper mb-3">
              <label className="username">아이디</label>
              <input
                data-testid="email-input"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, "email")
                }
              />
            </div>

            <div className="flex flex-col input-field-wrapper mb-6">
              <label className="password">비밀번호</label>
              <input
                data-testid="password-input"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, "password")
                }
              />
            </div>

            <button
              data-testid="signin-button"
              className="
              base_button mt-6
              disabled:opacity-50"
              type="submit"
              disabled={!signInput.email.isValid || !signInput.password.isValid}
            >
              로그인
            </button>
            <p className="mt-7">계정이 없으신가요? 지금 바로 만들어보세요</p>
            <button className="base_button"> 회원 가입하기</button>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Sign;
