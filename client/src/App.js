import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import DashboardPage from "./Dashboard/DashboardPage";
import TopicListPage from "./Topics/TopicsListPage";
import ExamPage from "./Exam/ExamPage";
import ResultPage from "./Exam/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/topics/:subject" element={<TopicListPage />} />
        <Route path="/exam/:subject/:topic" element={<ExamPage />} />
      <Route path="/result/:subject/:topic" element={<ResultPage />} />


      </Routes>
    </Router>
  );
}

export default App;
