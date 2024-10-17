import React, { useState } from "react";
import './signup.css'; // Assuming you move the styles to a separate CSS file

const Signup = () => {
  // State to handle form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log("Form submitted:", { name, email, password });
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="input-box">
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="input-box">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="input-box">
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <i className='bx bx-lock-alt'></i>
        </div>
        <button type="submit" className="btn">Sign Up</button>

        <div className="login-link">
          <p>Already have an account? <a href="/">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
