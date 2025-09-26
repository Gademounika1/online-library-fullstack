import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Make sure index.css is imported

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle login/register
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login
      const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = registeredUsers.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        localStorage.setItem("user", username); // store logged-in user
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } else {
      // Register
      const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
      if (registeredUsers.some((u) => u.username === username)) {
        alert("Username already exists!");
      } else if (password !== confirmPassword) {
        alert("Passwords do not match!");
      } else {
        registeredUsers.push({ username, password });
        localStorage.setItem("users", JSON.stringify(registeredUsers));
        alert(`User ${username} registered successfully!`);
        setIsLogin(true);
        setUsername("");
        setPassword("");
        setConfirmPassword("");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isLogin ? "Login to Your Account" : "Create a New Account"}</h2>

        {/* Toggle buttons */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <button
            onClick={() => setIsLogin(true)}
            style={{
              flex: 1,
              padding: "10px",
              border: "none",
              cursor: "pointer",
              background: isLogin ? "#003366" : "#f0f0f0",
              color: isLogin ? "#fff" : "#333",
            }}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            style={{
              flex: 1,
              padding: "10px",
              border: "none",
              cursor: "pointer",
              background: !isLogin ? "#003366" : "#f0f0f0",
              color: !isLogin ? "#fff" : "#333",
            }}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              borderRadius: "4px",
              border: "1px solid #ccc",
              outline: "none",
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              borderRadius: "4px",
              border: "1px solid #ccc",
              outline: "none",
            }}
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                margin: "10px 0",
                borderRadius: "4px",
                border: "1px solid #ccc",
                outline: "none",
              }}
              required
            />
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#003366",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
