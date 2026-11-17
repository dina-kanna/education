
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  GraduationCap,
  User,
  Mail,
  Lock,
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const getPasswordStrength = () => {
    const password = form.password;

    if (!password) return 0;

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const passwordStrength = getPasswordStrength();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (Object.values(form).some((value) => !value.trim())) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const result = signup(
        form.name.trim(),
        form.email.trim(),
        form.password
      );

      if (result.success) {
        navigate("/profile");
      } else {
        setError(result.message || "Unable to create your account.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8">

      <div className="w-full max-w-full bg-white rounded-[30px] shadow-2xl shadow-slate-200/70 overflow-hidden grid lg:grid-cols-2 min-h-[700px]">

        {/* LEFT SIDE DESIGN */}
        <div className="hidden lg:flex flex-col justify-between bg-slate-950 text-white p-12 relative overflow-hidden">

          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#4338ca,transparent_35%),radial-gradient(circle_at_90%_80%,#7e22ce,transparent_35%)] opacity-60"></div>

          <div className="absolute -right-24 top-40 w-80 h-80 border border-white/10 rounded-full"></div>
          <div className="absolute -right-12 top-52 w-56 h-56 border border-white/10 rounded-full"></div>

          <div className="relative z-10">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 w-fit">
              <div className="bg-indigo-600 p-3 rounded-xl">
                <GraduationCap size={28} />
              </div>

              <span className="text-2xl font-extrabold tracking-tight">
                Edu<span className="text-indigo-400">Learn</span>
              </span>
            </Link>

            {/* MAIN CONTENT */}
            <div className="mt-24">

              <span className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-bold border border-indigo-400/20">
                <Sparkles size={16} />
                Start Something Amazing
              </span>

              <h1 className="text-5xl font-extrabold leading-tight mt-7">
                Unlock Your
                <span className="block text-indigo-400">
                  Learning
                </span>
                Potential.
              </h1>

              <p className="text-slate-400 text-lg leading-8 mt-6 max-w-md">
                Join our growing community and discover courses designed to help you build skills, achieve goals, and shape your future.
              </p>

              {/* FEATURE CARDS */}
              <div className="mt-12 space-y-5">

                {[
                  {
                    icon: BookOpen,
                    title: "Learn at Your Own Pace",
                    text: "Access courses whenever you want.",
                  },
                  {
                    icon: Users,
                    title: "Join a Learning Community",
                    text: "Grow and learn with other students.",
                  },
                  {
                    icon: Zap,
                    title: "Build Real Skills",
                    text: "Learn practical skills for your career.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-center gap-4">

                      <div className="bg-white/10 p-3 rounded-xl text-indigo-300">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h3 className="font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="text-sm text-slate-400 mt-1">
                          {item.text}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="relative z-10 border-t border-white/10 pt-7 flex items-center justify-between">

            <p className="text-sm text-slate-400">
              © 2026 EduLearn. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <ShieldCheck size={17} />
              Secure Registration
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">

          {/* MOBILE LOGO */}
          <Link to="/" className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="bg-indigo-600 text-white p-2 rounded-xl">
              <GraduationCap size={25} />
            </div>

            <span className="text-xl font-extrabold text-slate-900">
              Edu<span className="text-indigo-600">Learn</span>
            </span>
          </Link>

          {/* HEADING */}
          <div className="mb-8">

            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Sparkles size={15} />
              Create Your Free Account
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-5">
              Create Account
            </h2>

            <p className="text-slate-500 mt-3 leading-6">
              Sign up today and take the first step toward your future.
            </p>

          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div
              role="alert"
              className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-5 text-sm font-medium"
            >
              {error}
            </div>
          )}

          {/* SIGNUP FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* FULL NAME */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-slate-700 mb-2"
              >
                Full Name
              </label>

              <div className="relative">

                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
                />

              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-slate-700 mb-2"
              >
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
                />

              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-slate-700 mb-2"
              >
                Password
              </label>

              <div className="relative">

                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-12 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>

              </div>

              {/* PASSWORD STRENGTH */}
              {form.password && (
                <div className="mt-3">

                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1.5 flex-1 rounded-full transition ${
                          passwordStrength >= level
                            ? passwordStrength <= 1
                              ? "bg-red-500"
                              : passwordStrength <= 2
                              ? "bg-amber-500"
                              : passwordStrength === 3
                              ? "bg-blue-500"
                              : "bg-emerald-500"
                            : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-xs text-slate-500 mt-2">
                    {passwordStrength <= 1
                      ? "Weak password"
                      : passwordStrength === 2
                      ? "Fair password"
                      : passwordStrength === 3
                      ? "Good password"
                      : "Strong password"}
                  </p>

                </div>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-bold text-slate-700 mb-2"
              >
                Confirm Password
              </label>

              <div className="relative">

                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-12 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>

              </div>

              {form.confirmPassword && (
                <p className={`text-xs mt-2 ${
                  form.password === form.confirmPassword
                    ? "text-emerald-600"
                    : "text-red-500"
                }`}>
                  {form.password === form.confirmPassword
                    ? "Passwords match"
                    : "Passwords do not match"}
                </p>
              )}
            </div>

            {/* TERMS INFO */}
            <div className="flex items-start gap-3 text-sm text-slate-500">
              <CheckCircle size={18} className="text-indigo-600 shrink-0 mt-0.5" />

              <p>
                By creating an account, you agree to use EduLearn responsibly and keep your login details secure.
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-extrabold flex items-center justify-center gap-3 shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5"
            >
              {loading ? "Creating Account..." : "Create My Account"}

              {!loading && <ArrowRight size={20} />}
            </button>

          </form>

          {/* LOGIN LINK */}
          <div className="mt-8 text-center">

            <p className="text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-600 font-extrabold hover:text-indigo-800 transition"
              >
                Login Now
              </Link>
            </p>

          </div>

          {/* BOTTOM INFO */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck size={16} className="text-emerald-500" />
            Your account information is protected.
          </div>

        </div>
      </div>
    </section>
  );
};

export default Signup;
