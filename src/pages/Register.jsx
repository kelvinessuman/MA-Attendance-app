import { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("learner");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log({
      name,
      email,
      password,
      role,
    });
  };

  return (
    <div className="register-page">

      <div className="register-container">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </div>

          {/* Role Selection */}
          <div className="input-group">
            <label>Select Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="facilitator">Facilitator</option>
              <option value="learner">Learner</option>
            </select>
          </div>

          {/* Submit */}
          <button type="submit">Register</button>
        </form>

        {/* Login link */}
        <p className="auth-link">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </div>

    </div>
  );
}

export default Register;