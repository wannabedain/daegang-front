import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 max-w-md h-[50%] bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl mb-4 text-center">로그인 페이지</h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="아이디"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="p-2 border border-gray-300 rounded"
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
