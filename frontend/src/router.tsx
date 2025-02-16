import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages.tsx/Login";
import Dashboard from "./pages.tsx/Dashboard";
import QuizForm from "./pages.tsx/QuizForm";
import EditQuiz from "./pages.tsx/EditQuiz";
import QuizDetails from "./pages.tsx/QuizDetails";


const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-quiz" element={<QuizForm />} />
      <Route path="/quiz/:id" element={<QuizDetails />} />
      <Route path="/edit-quiz/:id" element={<EditQuiz />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
