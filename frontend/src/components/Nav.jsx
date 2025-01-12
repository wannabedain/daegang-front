import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 드롭다운 열기/닫기 토글
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar bg-customGray text-black p-4 flex items-center justify-between">
      {/* 로고 영역 */}
      <div className="logo text-xl font-bold">
        <Link to="/">LOGO</Link>
      </div>

      {/* 카테고리 메뉴 */}
      <div className="relative ml-6">
        <button
          onClick={toggleDropdown}
          className="hover:text-customBlue cursor-pointer focus:outline-none"
        >
          카테고리
        </button>
        {/* 드롭다운 메뉴 */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 bg-white shadow-md rounded">
            <ul className="w-40">
              <li>
                <Link
                  to="/category/education"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)} // 메뉴 클릭 시 드롭다운 닫힘
                >
                  교육
                </Link>
              </li>
              <li>
                <Link
                  to="/category/study"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)} // 메뉴 클릭 시 드롭다운 닫힘
                >
                  스터디
                </Link>
              </li>
              <li>
                <Link
                  to="/category/autonomy"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)} // 메뉴 클릭 시 드롭다운 닫힘
                >
                  자율
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* 커뮤니티 메뉴 */}
      <div className="community ml-6">
        <Link className="hover:text-customBlue" to="/community">
          커뮤니티
        </Link>
      </div>

      {/* 검색창 */}
      <div className="search-bar flex-1 mx-6 flex items-center shadow-md">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="w-full p-2 rounded-l border-t border-l border-b border-gray-300 text-black focus:outline-none"
        />
        <button className="p-2 bg-gray-200 border border-gray-300 rounded-r hover:bg-gray-300">
          🔍
        </button>
      </div>

      {/* 로그인 메뉴 */}
      <div className="login">
        <Link className="hover:text-customBlue" to="/login">
          로그인
        </Link>
      </div>
    </div>
  );
}

export default Nav;
