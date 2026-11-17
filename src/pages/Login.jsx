
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  GraduationCap,
  Lock,
  Mail,
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.email.trim() || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const result = login(form.email.trim(), form.password);

      if (result.success) {
        navigate("/profile");
      } else {
        setError(result.message || "Invalid email or password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8">

      <div className="w-full max-w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT SIDE - WELCOME DESIGN */}
        <div className="relative hidden lg:flex flex-col justify-between bg-slate-950 text-white p-12 overflow-hidden">

          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_15%_20%,#6366f1,transparent_35%),radial-gradient(circle_at_85%_80%,#a855f7,transparent_35%)]"></div>

          <div className="relative">

            {/* LOGO */}
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="bg-indigo-600 p-3 rounded-xl">
                <GraduationCap size={29} />
              </div>

              <span className="text-2xl font-extrabold">
                Edu<span className="text-indigo-400">Learn</span>
              </span>
            </Link>

            <div className="mt-20">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-indigo-200 text-sm">
                <Sparkles size={16} />
                Welcome to EduLearn
              </div>

              <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight mt-7">
                Unlock Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Learning
                </span>
                Potential.
              </h1>

              <p className="text-slate-300 text-lg leading-8 mt-6">
                Continue your learning journey with expert instructors,
                practical lessons, and skills that help you build a
                successful future.
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-5 mt-12">
              {[
                "Access your enrolled courses",
                "Learn anytime, anywhere",
                "Track your learning progress",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={21} />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM IMAGE */}
          <div className="relative mt-12">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
              alt="Students learning together"
              className="w-full h-52 object-cover rounded-2xl opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent rounded-2xl"></div>

            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-600 p-3 rounded-xl">
                  <BookOpen size={25} />
                </div>

                <div>
                  <h3 className="font-bold">Keep Growing Every Day</h3>
                  <p className="text-sm text-slate-300">
                    Your future starts with learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - LOGIN FORM */}
        <div className="p-7 sm:p-10 md:p-14 lg:p-12 xl:p-16 flex flex-col justify-center">

          {/* MOBILE LOGO */}
          <Link to="/" className="inline-flex items-center gap-3 lg:hidden mb-10">
            <div className="bg-indigo-600 text-white p-3 rounded-xl">
              <GraduationCap size={27} />
            </div>

            <span className="text-2xl font-extrabold text-slate-900">
              Edu<span className="text-indigo-600">Learn</span>
            </span>
          </Link>

          <div className="max-w-md mx-auto w-full">

            {/* HEADING */}
            <div className="mb-9">
              <div className="bg-indigo-100 text-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap size={30} />
              </div>

              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">
                Student Login
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
                Welcome Back!
              </h2>

              <p className="text-slate-500 mt-3 leading-7">
                Login to your account and continue learning with EduLearn.
              </p>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <div
                role="alert"
                className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-6 text-sm font-medium"
              >
                {error}
              </div>
            )}

            {/* LOGIN FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-bold text-slate-700 mb-2"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor="password"
                    className="font-bold text-slate-700"
                  >
                    Password
                  </label>
                </div>

                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl pl-12 pr-12 py-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff size={21} />
                    ) : (
                      <Eye size={21} />
                    )}
                  </button>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-extrabold py-4 rounded-xl flex justify-center items-center gap-3 shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1"
              >
                {loading ? "Logging In..." : "Login to Account"}
                {!loading && <ArrowRight size={20} />}
              </button>
            </form>

            {/* SIGNUP */}
            <div className="text-center mt-9">
              <p className="text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-indigo-600 font-extrabold hover:text-indigo-800"
                >
                  Create Account
                </Link>
              </p>
            </div>

            {/* SECURITY INFO */}
            <div className="flex justify-center items-center gap-2 mt-8 text-slate-400 text-sm">
              <ShieldCheck size={17} />
              Secure student login
            </div>

            {/* BACK HOME */}
            <div className="text-center mt-7 pt-6 border-t border-slate-100">
              <Link
                to="/"
                className="text-slate-500 hover:text-indigo-600 font-semibold text-sm transition"
              >
                ← Back to Home
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
