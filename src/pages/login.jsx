import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.id) {
        const userRes = await fetch(`https://dummyjson.com/users/${data.id}`);
        const userData = await userRes.json();
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    } catch {
      setError("Something went wrong. Try again.");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary py-10">
      <div className="bg-brand rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-white text-sm font-medium mb-1 block">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-1 block">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-white pr-12"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? "👁" : "🙈"}
              </button>
            </div>
          </div>

          {error && <p className="text-red-200 text-sm text-center">{error}</p>}

          <p className="text-white/80 text-xs text-center">
            Demo: username: <strong>emilys</strong> password:{" "}
            <strong>emilyspass</strong>
          </p>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-white text-brand py-3 rounded-lg font-semibold hover:bg-white/90 transition mt-2"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </div>

        <p className="text-center text-sm text-white mt-6">
          Don't have an account?{" "}
          <span className="text-white font-bold cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
