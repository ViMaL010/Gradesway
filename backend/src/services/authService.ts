export const authenticateUser = async (email: string, password: string) => {
    try {
        // Dummy authentication logic (replace with real database check)
        if (email === "test@example.com" && password === "password123") {
            return { id: 1, email, name: "Test User" };
        } else {
            console.log("Invalid credentials");
            return null;  // 🔹 Explicitly return null when credentials are incorrect
        }
    } catch (e) {
        console.error("Error in authentication:", e);
        return null;  // 🔹 Return null in case of errors to satisfy the controller condition
    }
};
