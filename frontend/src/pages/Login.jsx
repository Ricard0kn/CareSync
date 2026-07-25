import "./Login.css";

import { HeartHandshake, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import api from '../api/axios';
import { useAuth } from "../auth/AuthProvider" 
//TODO: Add a invalid credentials message when loging in
export default function Login() {

    // Authentication
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { login } = useAuth();
    
    async function AuthUser(e) {

      e.preventDefault();

      try {
    
        const userData = await login(email, password)

        console.log("Button clicked! Sending details:", email, password);

        navigate('/dashboard')

      } catch (error){
        console.error('Error fetching data', error.message);
      }
    }

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Left Side */}
        <div className="login-left">

          <div className="logo">
            <HeartHandshake size={42} color="#6D4AFF" />
            <div>
              <h2>CareConnect EHR</h2>
              <p>Community Behavioral Health EHR</p>
            </div>
          </div>

          <h3>Sign in to your account</h3>

          <form>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="password-input">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <Eye size={18} />
              </div>
            </div>

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="forgot"
              >
                Forgot Password?
              </button>
            </div>

            <button className="signin-btn" onClick={AuthUser}>
              Sign In
            </button>

          </form>

          <p className="copyright">
            © 2024 CareConnect EHR. All rights reserved.
          </p>

        </div>

        {/* Right Side */}
        <div className="login-right">

          <div className="overlay">
            <h1>
              Better care.
              <br />
              Stronger communities.
            </h1>

            <p>
              Empowering behavioral health
              professionals to make a difference.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}