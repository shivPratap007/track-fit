import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Navbar from "../navbar/navbar.jsx";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[login,setLogin]=useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
    let data = { email, password };
    let result = await checkLogin(data);
    setEmail("");
    setPassword("");
  };

  async function checkLogin(data) {
    try {
      console.log(data);
      const response = await axios.post("http://localhost:5111/v1/login", {
        email: data.email,
        password: data.password,
      });

      const token = response.data;
      // setLogin(token);
      console.log(token.status);
      setLogin(token.status);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  console.log("===",login);
  useEffect(()=>{
    if(login){
      alert("Login successfully");
      navigate('/')
    }
  },[login])
  return (
    <>
    <div className="asli">
    <Navbar />
    <div className="main">
    <div className="container main-container">
      <div className="content">
        <h2 className="titleContainer">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 inputContainer">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control inputBox"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 inputContainer">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control inputBox"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default LoginPage;
