import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is stored in localStorage
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user); // Convert string/null to boolean
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from storage
    setIsAuthenticated(false); // Update state
    navigate("/"); // Redirect to login
  };

  return (
    <nav className="flex justify-between items-center bg-primary text-primary-foreground p-4 shadow">
      <h1 className="text-lg font-bold">Quiz App</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/create-quiz" className="hover:underline">Create Quiz</Link>
        {isAuthenticated && (
          <Button variant="destructive" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
