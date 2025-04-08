import { Route, Routes } from "react-router";
import HomePage from "./Pages/home";
import LoginPage from "./Auth/Login";
import ExamPage from "./Pages/Exam";
import NotFoundPage from "./Pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
