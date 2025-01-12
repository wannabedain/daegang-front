import React from "react";

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/2 max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl mb-4">회원가입 페이지</h1>
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
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="p-2 border border-gray-300 rounded"
          />
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
