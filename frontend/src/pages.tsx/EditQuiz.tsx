import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import Button from "../components/Button";
import { getQuizById, updateQuiz } from "../services/api";

const EditQuiz = () => {
  const { id } = useParams<{ id: string }>(); // Get Quiz ID from URL
  const navigate = useNavigate();
  
  const [quiz, setQuiz] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getQuizById(id);
        setQuiz(data);
      } catch (err) {
        setError("Failed to load quiz.");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateQuiz(id, quiz);
      navigate("/dashboard"); // Redirect to dashboard after successful update
    } catch (err) {
      setError("Failed to update quiz.");
    }
  };

  return (
    <div className="p-6">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <Card className="p-4 max-w-md mx-auto shadow-md">
          <h2 className="text-lg font-bold mb-4">Edit Quiz</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <Input
                type="text"
                name="title"
                value={quiz.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={quiz.description}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit">Update</Button>
              <Button variant="outline" onClick={() => navigate("/dashboard")}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
};

export default EditQuiz;
