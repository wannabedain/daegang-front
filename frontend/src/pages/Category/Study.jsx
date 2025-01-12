import React from "react";
import { Link } from "react-router-dom";

function Study() {
  const studyGroups = [
    { id: 1, title: "React 스터디" },
    { id: 2, title: "JavaScript 스터디" },
    { id: 3, title: "CSS 스터디" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">스터디 페이지</h1>
      <ul>
        {studyGroups.map((study) => (
          <li key={study.id}>
            <Link
              to={`/category/study/${study.id}`}
              className="text-blue-500 hover:underline"
            >
              {study.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Study;
