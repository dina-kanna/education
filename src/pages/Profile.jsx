
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Award,
  Edit,
  LogOut,
  Save,
  X,
  GraduationCap,
  ArrowRight,
  Clock,
  Star,
  Settings,
  ShieldCheck,
  Sparkles,
  PlayCircle,
  BookMarked,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import { courses } from "../data";

const Profile = () => {
  const { user, logout, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    location: user?.location || "",
    bio: user?.bio || "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        phone: user.phone || "",
        location: user.location || "",
        bio: user.bio || "",
      });
    }
  }, [user]);

  const enrolledCourses = courses.filter((course) =>
    user?.enrolledCourses?.includes(course.id)
  );

  const handleSave = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setMessage("Please enter your full name.");
      return;
    }

    updateProfile({
      ...form,
      name: form.name.trim(),
    });

    setEditing(false);
    setMessage("Profile updated successfully!");

    setTimeout(() => setMessage(""), 3000);
  };

  const handleCancel = () => {
    setForm({
      name: user.name || "",
      phone: user.phone || "",
      location: user.location || "",
      bio: user.bio || "",
    });

    setEditing(false);
    setMessage("");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center max-w-md w-full">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <User size={32} />
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-5">
            Login Required
          </h2>

          <p className="text-slate-500 mt-2">
            Please login to view your student profile.
          </p>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
          >
            Go to Login <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  const firstLetter = user.name?.charAt(0)?.toUpperCase() || "S";

  const stats = [
    {
      title: "Enrolled Courses",
      value: enrolledCourses.length,
      icon: BookOpen,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Completed Courses",
      value: 0,
      icon: Award,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Learning Hours",
      value: enrolledCourses.length * 5,
      icon: Clock,
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50">

      {/* TOP PROFILE HERO */}
      <div className="bg-slate-950 relative overflow-hidden">

        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_15%_20%,#6366f1,transparent_35%),radial-gradient(circle_at_85%_80%,#a855f7,transparent_35%)]"></div>

        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">

          {/* TOP NAVIGATION */}
          <div className="flex items-center justify-between mb-12">

            <Link to="/" className="flex items-center gap-3 text-white">
              <div className="bg-indigo-600 p-3 rounded-xl">
                <GraduationCap size={27} />
              </div>

              <span className="text-xl font-extrabold">
                Edu<span className="text-indigo-400">Learn</span>
              </span>
            </Link>

            <Link
              to="/courses"
              className="hidden sm:flex items-center gap-2 text-slate-300 hover:text-white transition font-medium"
            >
              <BookOpen size={18} />
              Explore Courses
            </Link>
          </div>

          {/* PROFILE INFORMATION */}
          <div className="flex flex-col md:flex-row items-center gap-7">

            <div className="relative">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl font-extrabold border-4 border-white/20 shadow-2xl">
                {firstLetter}
              </div>

              <div className="absolute -bottom-2 -right-2 bg-emerald-500 border-4 border-slate-950 w-8 h-8 rounded-full"></div>
            </div>

            <div className="text-center md:text-left flex-1">

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Student Account
                </span>

                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-bold">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
                  Active Learner
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                Welcome, {user.name}!
              </h1>

              <p className="text-slate-400 mt-3 flex flex-wrap items-center justify-center md:justify-start gap-2">
                <Mail size={17} />
                {user.email}
              </p>

              <p className="text-slate-400 mt-2">
                Your learning journey starts here. Keep growing every day!
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/10 hover:bg-red-500 text-white border border-white/20 px-5 py-3 rounded-xl font-bold transition"
            >
              <LogOut size={19} />
              Logout
            </button>

          </div>
        </div>
      </div>

      {/* MAIN DASHBOARD */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 pb-20">

        {/* STATISTICS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/60 border border-slate-100 flex items-center gap-5 hover:-translate-y-1 transition"
              >
                <div className={`p-4 rounded-2xl ${item.color}`}>
                  <Icon size={27} />
                </div>

                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900">
                    {item.value}
                  </h2>

                  <p className="text-slate-500 text-sm mt-1">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

        {/* SUCCESS MESSAGE */}
        {message && (
          <div
            role="status"
            className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-xl mb-7 font-medium"
          >
            {message}
          </div>
        )}

        {/* DASHBOARD CONTENT */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* PERSONAL INFORMATION */}
          <div className="lg:col-span-1">

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">

              <div className="p-6 border-b border-slate-100 flex items-center justify-between">

                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    Personal Details
                  </h2>

                  <p className="text-sm text-slate-400 mt-1">
                    Manage your information
                  </p>
                </div>

                {!editing && (
                  <button
                    onClick={() => setEditing(true)}
                    className="bg-indigo-50 text-indigo-600 p-3 rounded-xl hover:bg-indigo-100 transition"
                    aria-label="Edit profile"
                  >
                    <Edit size={19} />
                  </button>
                )}

              </div>

              <div className="p-6">

                {editing ? (
                  <form onSubmit={handleSave} className="space-y-5">

                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                        Full Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="Enter phone number"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-bold text-slate-700 mb-2">
                        Location
                      </label>

                      <input
                        id="location"
                        type="text"
                        value={form.location}
                        onChange={(e) =>
                          setForm({ ...form, location: e.target.value })
                        }
                        placeholder="Enter your location"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="bio" className="block text-sm font-bold text-slate-700 mb-2">
                        About Me
                      </label>

                      <textarea
                        id="bio"
                        rows="4"
                        value={form.bio}
                        onChange={(e) =>
                          setForm({ ...form, bio: e.target.value })
                        }
                        placeholder="Write something about yourself..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition resize-none"
                      />
                    </div>

                    <div className="flex gap-3">

                      <button
                        type="submit"
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2 transition"
                      >
                        <Save size={18} />
                        Save
                      </button>

                      <button
                        type="button"
                        onClick={handleCancel}
                        className="px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition"
                        aria-label="Cancel editing"
                      >
                        <X size={20} />
                      </button>

                    </div>

                  </form>
                ) : (

                  <div className="space-y-6">

                    {[
                      {
                        label: "Email Address",
                        value: user.email,
                        icon: Mail,
                      },
                      {
                        label: "Phone Number",
                        value: user.phone || "Not added yet",
                        icon: Phone,
                      },
                      {
                        label: "Location",
                        value: user.location || "Not added yet",
                        icon: MapPin,
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl">
                            <Icon size={19} />
                          </div>

                          <div className="min-w-0">
                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                              {item.label}
                            </p>

                            <p className="text-slate-700 font-semibold mt-1 break-all">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                    <div className="border-t border-slate-100 pt-6">
                      <h3 className="font-extrabold text-slate-900 mb-3">
                        About Me
                      </h3>

                      <p className="text-slate-500 text-sm leading-7">
                        {user.bio || "You haven't added a bio yet. Tell us something about yourself!"}
                      </p>
                    </div>

                  </div>
                )}

              </div>
            </div>

            {/* ACCOUNT CARD */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 text-white mt-6 relative overflow-hidden">

              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <ShieldCheck size={24} />
                  </div>

                  <h3 className="font-extrabold text-lg">
                    Your Account
                  </h3>
                </div>

                <p className="text-indigo-100 text-sm leading-6">
                  Keep your profile updated to make your learning experience better.
                </p>

                <div className="mt-5 pt-5 border-t border-white/20 flex items-center justify-between text-sm">
                  <span className="text-indigo-100">
                    Account Status
                  </span>

                  <span className="font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Active
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* MY LEARNING */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">

              {/* HEADER */}
              <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={20} className="text-indigo-600" />

                    <span className="text-indigo-600 text-xs font-extrabold uppercase tracking-widest">
                      Your Journey
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                    My Learning
                  </h2>

                  <p className="text-slate-500 text-sm mt-1">
                    Your enrolled courses in one place.
                  </p>
                </div>

                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-5 py-3 rounded-xl font-bold text-sm transition"
                >
                  Browse Courses
                  <ArrowRight size={17} />
                </Link>

              </div>

              {/* COURSE LIST */}
              <div className="p-6 md:p-8">

                {enrolledCourses.length > 0 ? (

                  <div className="space-y-6">

                    {enrolledCourses.map((course) => (

                      <div
                        key={course.id}
                        className="group border border-slate-100 hover:border-indigo-200 rounded-2xl p-4 transition hover:shadow-lg hover:shadow-indigo-50"
                      >

                        <div className="flex flex-col sm:flex-row gap-5">

                          {/* COURSE IMAGE */}
                          <div className="relative sm:w-40 h-40 sm:h-32 shrink-0 overflow-hidden rounded-xl">

                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-slate-950/10"></div>

                            <div className="absolute bottom-2 left-2 bg-white/95 text-slate-800 text-xs font-bold px-3 py-1 rounded-lg">
                              {course.category}
                            </div>

                          </div>

                          {/* COURSE DETAILS */}
                          <div className="flex-1 min-w-0">

                            <div className="flex flex-wrap items-center gap-2 mb-2">

                              <span className="text-xs text-indigo-600 font-bold uppercase tracking-wide">
                                {course.level || "All Levels"}
                              </span>

                              <span className="text-slate-300">•</span>

                              <span className="text-xs text-slate-500 flex items-center gap-1">
                                <Clock size={13} />
                                {course.duration}
                              </span>

                            </div>

                            <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                              {course.title}
                            </h3>

                            <div className="flex items-center gap-1 mt-2 text-amber-500">
                              <Star size={15} fill="currentColor" />

                              <span className="text-sm font-bold text-slate-700">
                                {course.rating}
                              </span>

                              <span className="text-xs text-slate-400 ml-1">
                                Course Rating
                              </span>
                            </div>

                            {/* PROGRESS */}
                            <div className="mt-5">

                              <div className="flex justify-between items-center text-sm mb-2">
                                <span className="font-semibold text-slate-600">
                                  Course Progress
                                </span>

                                <span className="font-extrabold text-indigo-600">
                                  0%
                                </span>
                              </div>

                              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-0 bg-indigo-600 rounded-full"></div>
                              </div>

                            </div>

                            <Link
                              to={`/course/${course.id}`}
                              className="inline-flex items-center gap-2 mt-5 text-indigo-600 font-bold text-sm hover:text-indigo-800 transition"
                            >
                              <PlayCircle size={17} />
                              Continue Learning
                              <ArrowRight size={16} />
                            </Link>

                          </div>
                        </div>
                      </div>

                    ))}

                  </div>

                ) : (

                  /* EMPTY STATE */
                  <div className="text-center py-14 px-4">

                    <div className="w-24 h-24 bg-indigo-50 text-indigo-500 rounded-3xl flex items-center justify-center mx-auto">
                      <BookMarked size={43} />
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900 mt-7">
                      Your Learning Journey Awaits!
                    </h3>

                    <p className="text-slate-500 max-w-md mx-auto mt-3 leading-7">
                      You haven't enrolled in any courses yet. Explore our courses and start building new skills today.
                    </p>

                    <Link
                      to="/courses"
                      className="inline-flex items-center gap-3 mt-7 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-indigo-200 transition hover:-translate-y-1"
                    >
                      Explore Courses
                      <ArrowRight size={19} />
                    </Link>

                  </div>

                )}

              </div>
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-7 bg-slate-950 rounded-3xl p-7 md:p-9 text-white relative overflow-hidden">

              <div className="absolute -right-10 -bottom-16 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">

                <div>
                  <div className="flex items-center gap-2 text-indigo-400 text-sm font-bold mb-3">
                    <Sparkles size={17} />
                    KEEP LEARNING
                  </div>

                  <h3 className="text-2xl font-extrabold">
                    Invest in Your Future
                  </h3>

                  <p className="text-slate-400 mt-2 text-sm">
                    Discover new skills and reach your goals with EduLearn.
                  </p>
                </div>

                <Link
                  to="/courses"
                  className="shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-4 rounded-xl font-bold transition"
                >
                  Find Courses
                  <ArrowRight size={18} />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
