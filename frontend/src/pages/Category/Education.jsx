import React from "react";
import { Link } from "react-router-dom";

function Education() {
  const lectures = [
    { id: 1, title: "React 강의" },
    { id: 2, title: "JavaScript 강의" },
    { id: 3, title: "CSS 강의" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">교육 페이지</h1>
      <ul>
        {lectures.map((lecture) => (
          <li key={lecture.id}>
            <Link
              to={`/category/education/${lecture.id}`}
              className="text-blue-500 hover:underline"
            >
              {lecture.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
