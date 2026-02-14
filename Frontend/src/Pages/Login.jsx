import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaGoogle,
  FaFacebook,
  FaCoffee,
  FaLeaf,
} from "react-icons/fa6";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      alert("Welcome back! Login successful.");
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert("Account created successfully! Welcome to MYLK Co*");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F2] flex items-center justify-center py-24 px-4">
      <div className="bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT BRAND */}
          <div className="bg-gradient-to-br from-[#3A2720] to-[#5A3A2E] p-10 text-white hidden md:flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-[#E6D3C3] rounded-full flex items-center justify-center mb-6">
                <span className="text-[#2B1D17] font-bold text-3xl">C</span>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Welcome to MYLK Co*
              </h2>

              <p className="text-[#E6D3C3]">
                Experience the finest traditional milk beverages,
                crafted with love and premium ingredients.
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-5 mt-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7B5244] rounded-full flex items-center justify-center transition hover:scale-110">
                  <FaCoffee />
                </div>
                <div>
                  <p className="font-semibold">Premium Quality</p>
                  <p className="text-sm text-[#E6D3C3]">
                    Hand-selected ingredients
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7B5244] rounded-full flex items-center justify-center transition hover:scale-110">
                  <FaLeaf />
                </div>
                <div>
                  <p className="font-semibold">100% Natural</p>
                  <p className="text-sm text-[#E6D3C3]">
                    No artificial additives
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#5A3A2E] mb-2">
                {isLogin ? "Welcome Back!" : "Create Account"}
              </h2>
              <p className="text-[#7B5244]">
                {isLogin
                  ? "Please login to your account"
                  : "Sign up to get started"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-[#5A3A2E] mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7B5244]" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-[#E6D3C3] rounded-xl focus:ring-4 focus:ring-[#E6D3C3] focus:border-[#7B5244]"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-[#5A3A2E] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7B5244]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-[#E6D3C3] rounded-xl focus:ring-4 focus:ring-[#E6D3C3] focus:border-[#7B5244]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5A3A2E] mb-2">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7B5244]" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-[#E6D3C3] rounded-xl focus:ring-4 focus:ring-[#E6D3C3] focus:border-[#7B5244]"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-[#5A3A2E] mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7B5244]" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-[#E6D3C3] rounded-xl focus:ring-4 focus:ring-[#E6D3C3] focus:border-[#7B5244]"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#7B5244] hover:text-[#5A3A2E]"
                  >
                    Forgot Password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#5A3A2E] text-white font-semibold hover:bg-[#3A2720] transition"
              >
                {isLogin ? "Login" : "Create Account"}
              </button>
            </form>

            {/* SOCIAL */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E6D3C3]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#7B5244]">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#E6D3C3] rounded-xl hover:bg-[#FAF6F2]">
                <FaGoogle className="text-[#5A3A2E]" />
                <span className="text-[#5A3A2E]">Google</span>
              </button>

              <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#E6D3C3] rounded-xl hover:bg-[#FAF6F2]">
                <FaFacebook className="text-[#5A3A2E]" />
                <span className="text-[#5A3A2E]">Facebook</span>
              </button>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#7B5244] hover:text-[#5A3A2E] font-medium"
              >
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
