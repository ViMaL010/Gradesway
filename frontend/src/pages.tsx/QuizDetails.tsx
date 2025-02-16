import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getQuizById, deleteQuiz } from "../services/api"; // API calls
import Button from "../components/Button";

const QuizDetails = () => {
  const { id } = useParams(); // Get quiz ID from URL
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getQuizById(id); // Fetch quiz details
      setQuiz(data);
    })();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
    //@ts-ignore
      await deleteQuiz(id);
      navigate("/dashboard"); // Redirect after deletion
    }
  };

  if (!quiz) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-xl font-bold mb-2">{quiz.title}</h2>
          <p className="text-gray-700">{quiz.description}</p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Button 
              onClick={() => navigate("/dashboard")}
              className="w-full sm:w-1/3 bg-gray-500 text-white text-sm px-4 py-1.5 rounded-md transition-all duration-300 hover:bg-gray-600"
            >
              Back
            </Button>
            <Button 
              onClick={() => navigate(`/edit-quiz/${id}`)}
              className="w-full sm:w-1/3 bg-green-500 text-white text-sm px-4 py-1.5 rounded-md transition-all duration-300 hover:bg-green-600"
            >
              Edit
            </Button>
            <Button 
              onClick={handleDelete}
              className="w-full sm:w-1/3 bg-red-500 text-white text-sm px-4 py-1.5 rounded-md transition-all duration-300 hover:bg-red-600"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
