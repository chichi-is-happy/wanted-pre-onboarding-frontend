import React, { useState } from "react";

const Sign = () => {
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
              <input data-testid="email-input" />
            </div>

            <div className="flex flex-col input-field-wrapper mb-6">
              <label className="password">비밀번호</label>
              <input data-testid="password-input" />
            </div>

            <button data-testid="signin-button" className="base_button mt-6">
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
