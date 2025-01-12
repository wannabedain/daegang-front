import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Community from "./pages/Community";
import Education from "./pages/Category/Education";
import EducationDetail from "./pages/Category/EducationDetail";
import VideoPageEducation from "./pages/Category/VideoPageEducation";
import Study from "./pages/Category/Study";
import StudyDetail from "./pages/Category/StudyDetail";
import VideoPageStudy from "./pages/Category/VideoPageStudy";
import Autonomy from "./pages/Category/Autonomy"; // 자율 리스트 페이지
import VideoPageAutonomy from "./pages/Category/VideoPageAutonomy"; // 자율 비디오 페이지

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/education" element={<Education />} />
        <Route path="/category/education/:id" element={<EducationDetail />} />
        <Route
          path="/category/education/:id/video"
          element={<VideoPageEducation />}
        />
        <Route path="/category/study" element={<Study />} />
        <Route path="/category/study/:id" element={<StudyDetail />} />
        <Route path="/category/study/:id/video" element={<VideoPageStudy />} />
        <Route path="/category/autonomy" element={<Autonomy />} />
        <Route
          path="/category/autonomy/:id/video"
          element={<VideoPageAutonomy />}
        />
      </Routes>
    </div>
  );
}

export default App;
