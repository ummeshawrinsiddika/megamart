import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-third py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-brand text-center mb-2">
          MegaMart
        </h2>
        <p className="text-primary text-center text-sm mb-8">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-primary text-sm font-medium mb-1 block">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:border-brand"
              required
            />
          </div>

          <div>
            <label className="text-primary text-sm font-medium mb-1 block">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:border-brand"
              required
            />
          </div>

          <div className="text-right">
            <span className="text-brand text-sm cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            className="bg-brand text-white py-3 rounded-lg font-semibold hover:bg-brand/90 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-primary mt-6">
          Don't have an account?{" "}
          <span className="text-brand font-semibold cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
