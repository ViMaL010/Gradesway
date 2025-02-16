import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Input } from "../components/ui/input";
import Button from "../components/Button";
import { createQuiz } from "../services/api";

const QuizForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  //@ts-ignore
  const user = JSON.parse(localStorage.getItem("user")) || "undefined";
  const id = user.user.id;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { title: "", description: "" };
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!description.trim()) newErrors.description = "Description is required.";

    if (newErrors.title || newErrors.description) {
      setErrors(newErrors);
      return;
    }

    //@ts-ignore
    await createQuiz({ title, description, teacherId: id });
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center items-center">
        <div className="p-6 w-full max-w-md bg-white rounded shadow-md">
          <h2 className="text-xl font-bold text-center mb-4">Create Quiz</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Quiz Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setErrors((prev) => ({ ...prev, title: "" }));
                }}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            <div>
              <Input
                type="text"
                placeholder="Quiz Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setErrors((prev) => ({ ...prev, description: "" }));
                }}
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={!title.trim() || !description.trim()}>
              Create
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuizForm;
