import React from "react";
import { Link } from "react-router-dom";

function Autonomy() {
  const autonomyItems = [
    { id: 1, title: "자율 게임 방" },
    { id: 2, title: "자율 토킹어바웃 방" },
    { id: 3, title: "자율 인천짱 방" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">자율 페이지</h1>
      <ul>
        {autonomyItems.map((item) => (
          <li key={item.id}>
            <Link
              to={`/category/autonomy/${item.id}/video`}
              className="text-blue-500 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Autonomy;
