import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../state/authState";
import { useNavigate, Link } from "react-router-dom";

const adminData = {
  username: "admin",
  password: "123456",
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useRecoilState(authState);
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    console.log("Form submitted:", username);

    // admin 데이터와 비교 & 로그인 상태 설정정
    if (username === adminData.username && password === adminData.password) {
      setAuth({ isAuthenticated: true, user: username });
      alert("로그인 성공");
      navigate("/"); // 홈으로 이동
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 max-w-md h-[50%] bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl mb-4 text-center">로그인 페이지</h1>
        <form onSubmit={onLogin} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="아이디"
            className="p-2 border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            로그인
          </button>
        </form>
        <p className="mt-4 text-center">
          계정이 없으신가요?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
