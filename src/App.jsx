import { Route, Routes } from "react-router";
import HomePage from "./Pages/Home";
import LoginPage from "./Auth/Login";
import ExamPage from "./Pages/Exam";
import NotFoundPage from "./Pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
