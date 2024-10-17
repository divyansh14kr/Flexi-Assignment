import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import 'boxicons/css/boxicons.min.css'; // Ensure this is installed via npm or use a CDN

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Form submitted:", { email, password });
    navigate('/form');
  };

  return (
    <div className="wrapper">
        <main>
        <form onSubmit={handleSubmit}><h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me</label>
              <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="btn" name="login">Login</button>
          <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
        </form>
        </main>
    </div>
  );
};

export default LoginPage;
