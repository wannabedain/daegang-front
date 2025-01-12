import React from "react";
import { useParams } from "react-router-dom";

function VideoPageEducation() {
  const { id } = useParams(); // URL에서 id를 가져옴

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">교육 비디오 페이지 (ID: {id})</h1>
      <p>여기에 ID {id}와 관련된 교육 비디오 콘텐츠를 표시합니다.</p>
    </div>
  );
}

export default VideoPageEducation;
