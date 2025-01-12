import React from "react";
import { useParams } from "react-router-dom";

function VideoPageStudy() {
  const { id } = useParams(); // URL에서 id를 가져옴

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">화상 스터디 페이지 (ID: {id})</h1>
      <p>여기에 ID {id}와 관련된 화상 스터디 콘텐츠를 표시합니다.</p>
    </div>
  );
}

export default VideoPageStudy;
