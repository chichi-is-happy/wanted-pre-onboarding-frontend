![login_success2](https://github.com/chichi-is-happy/wanted-pre-onboarding-frontend/assets/107830853/daf101a6-6c7c-44e3-a478-41394dae484e)


- [Wanted - To Do list](https://wanted-pre-onboarding-frontend-jet.vercel.app/)
- TypeScript와 React Context API를 사용, 로그인, 로그아웃, To-Do list를 구현한 프로젝트
- 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.
    - 테스트용 이메일 : [test@login.com](mailto:test@login.com)
    - 테스트용 패스워드 : test1234
- 실행 방법 : 배포된 [링크](https://wanted-pre-onboarding-frontend-jet.vercel.app/) 로 접속하거나 로컬 서버 구동
    - git clone 후 npm install → npm start 실행

<br>
<br>

 ## 🤍 Skills : 개발 환경 및 기술스택

- React
- React Router
- TypeScript
- Axios
- React Context API
- TailwindCSS
- eslint

<br>
<br>


## 🤍 Directory Structure : 디렉토리 구조

```
└─ src
  ├─ api : api 모음 파일
  ├─ components : 컴포넌트 파일
  ├─ context : context 모음 파일
  ├─ hooks : 커스텀 훅 파일
  ├─ pages : 각 페이지
  └─ types : 타입 지정 파일
```

<br>
<br>

## 🤍 Key Features : 주요 기능 소개

### 로그인 / 회원가입

  <table cellspacing="0" cellpadding="0">
  <tr>
  <tr>
    <td>로그인</td>
    <td>회원가입</td>
  </tr>
  <tr>
    <td><img width="300" alt="로그인 성공" src="https://github.com/chichi-is-happy/wanted-pre-onboarding-frontend/assets/107830853/09ce60d3-f129-42d5-b283-a2c44e953fe8"></td>
    <td><img width="300" alt="회원가입" src="https://github.com/chichi-is-happy/wanted-pre-onboarding-frontend/assets/107830853/2289ffe1-6514-437d-ad5d-a7e128f3a280"></td>
  </tr>
</table>

- 서버에 등록된 이메일, 비밀번호로 로그인 해야 To-Do 페이지로 이동
- 이메일 또는 비밀번호를 잘못 입력한 경우
“아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.” 알람 메시지 출력
- 유효성 검사기능 구현
    - 이메일 조건 : @ 포함
    - 비밀번호 조건 : 8자 이상
    - 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 로그인 버튼 비활성화
- 회원가입 시 동일한 이메일이 존재하면 “다른 이메일을 입력하세요.” 알람 메시지 출력
- 회원가입이 정상적으로 완료되면 로그인 페이지로 이동
- 로그인이 정상적으로 완료되면 To-Do 페이지로 이동
- 로컬 스토리지에 토큰이 있는 상태로 로그인 / 회원가입 페이지에 접속하면 To-Do 페이지로 리다이렉트
- 로컬 스토리지에 토큰이 없는 상태로 To-Do 페이지에 접속하면 로그인 페이지로 리다이렉트

<br>
<br>

### TODO LIST

<table cellspacing="0" cellpadding="0">
  <tr>
  <tr>
    <td>TODO 추가</td>
    <td>TODO 수정 / 삭제</td>
  </tr>
  <tr>
    <td><img width="300" alt="TODO 추가" src="https://github.com/chichi-is-happy/wanted-pre-onboarding-frontend/assets/107830853/90c6dbc3-2386-4814-9164-15a36aa41614"></td>
    <td><img width="300" alt="TODO 수정 및 삭제" src="https://github.com/chichi-is-happy/wanted-pre-onboarding-frontend/assets/107830853/6cb833f1-147a-4466-9fc8-1ba032ed7789"></td>
  </tr>
</table>

- To-Do 리스트의 내용과 완료 여부가 표시되는 목록 출력
- 새로운 To-Do 입력 및 추가 가능
  - To-Do를 추가한 뒤 새로고침을 해도 추가한 To-Do가 목록에 출력 
- 삭제 기능 구현
- 수정 기능 구현
    - 수정 모드에서 취소시 수정한 내용을 초기화, 수정 모드 비활성화
    - 수정 모드에서 To-Do의 내용을 변경하고 제출하면 수정됨
    - 체크박스를 통해 완료 여부 수정 가능
 
<br>
<br>
