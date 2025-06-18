'use client';

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type LoginProps = {
  onSubmit: (email: string, password: string) => void;
  loginTitle?: string;
  emailLabel?: string;
  passwordLabel?: string;
  loginLabel?: string;
  colorScheme?: string;
};

const LoginWithEmailPassword: React.FC<LoginProps> = (
  { onSubmit,
    loginTitle = "Login",
    emailLabel = "Email",
    passwordLabel = "Password",
    loginLabel = "Login",
    colorScheme = "black",
  }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="card p-4 shadow-sm">
      <h3 className="text-center mb-3">{loginTitle}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">{emailLabel}</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 position-relative">
          <label className="form-label">{passwordLabel}</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {loginLabel}
        </button>
      </form>
    </div>
  );
};

export default LoginWithEmailPassword;