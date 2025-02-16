import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Change this to your actual backend URL

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    localStorage.setItem("user", JSON.stringify(res.data));
    return true;
  } catch {
    return false;
  }
};

export const getQuizzes = async () => {
  const res = await axios.get(`${API_URL}/quizzes/`);
  return res.data;
};

export const createQuiz = async (quiz: { title: string; description: string, id ?: Number }) => {
  await axios.post(`${API_URL}/quizzes/`, quiz);
};


export const editQuiz = async (quizId: number, title: string, description: string) => {
    try {
        const response = await axios.put(`${API_URL}/quizzes/${quizId}`, { title, description });
        return response.data;
    } catch (error) {
        console.error("Error updating quiz:", error);
        throw error;
    }
};


export const getQuizById = async (id: string | undefined) => {
    const response = await axios.get(`${API_URL}/quizzes/${id}`);
    return response.data;
  };
  
  export const updateQuiz = async (id: string | undefined, updatedData: any) => {
    const response = await axios.put(`${API_URL}/quizzes/${id}`, updatedData);
    return response.data;
  };

  export const deleteQuiz = async (id: string) => {
    const response = await axios.delete(`${API_URL}/quizzes/${id}`);
    return response.data;
  };
  