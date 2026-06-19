import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP LOGIN (replace with backend later)
    const user = {
      email,
      role: "facilitator"
    };

    localStorage.setItem("user", JSON.stringify(user));

    navigate("/facilitator-dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-container">
        <h1>Attendance System</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="auth-link">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>

      <div className="login-footer">
        <p>© 2026 Attendance System</p>
      </div>

    </div>
  );
}

export default Login;