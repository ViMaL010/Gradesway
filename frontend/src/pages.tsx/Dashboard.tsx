import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Card } from "../components/ui/card";
import { getQuizzes, deleteQuiz } from "../services/api";
import Button from "../components/Button";

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getQuizzes();
      setQuizzes(data);
    })();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      await deleteQuiz(id);
      //@ts-ignore
      setQuizzes((prev) => prev.filter((quiz) => quiz.id !== id)); // Remove from UI
    }
  };

  return (
    <div>
      <Navbar />
      <h2 className="text-xl font-bold p-4">Your Quizzes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {quizzes.map((quiz: any) => (
          <Card key={quiz.id} className="p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold">{quiz.title}</h3>
              <p className="text-gray-600">{quiz.description}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <Link to={`/quiz/${quiz.id}`}>
                <Button variant="outline" size="sm" className="border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700">
                  View
                </Button>
              </Link>
              <Link to={`/edit-quiz/${quiz.id}`}>
                <Button variant="outline" size="sm" className="border-green-500 text-green-500 hover:border-green-700 hover:text-green-700">
                  Edit
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDelete(quiz.id)}
                className="border-red-500 text-red-500 hover:border-red-700 hover:text-red-700"
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
