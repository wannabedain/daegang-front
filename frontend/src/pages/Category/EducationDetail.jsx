import React from "react";
import { useParams, Link } from "react-router-dom";

function EducationDetail() {
  const { id } = useParams(); // URL에서 id를 가져옴

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">강의 상세 페이지 (ID: {id})</h1>
      <p>여기에 ID {id}와 관련된 강의 정보를 표시합니다.</p>
      <Link
        to={`/category/education/${id}/video`}
        className="text-blue-500 hover:underline"
      >
        화상 강의로 이동
      </Link>
    </div>
  );
}

export default EducationDetail;
