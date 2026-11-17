
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Clock,
  Users,
  Star,
  BookOpen,
  CheckCircle,
  GraduationCap,
  PlayCircle,
  ArrowRight,
  Award,
  BarChart3,
  Globe,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Lock,
  Play,
} from "lucide-react";

import { courses } from "../data";
import { useAuth } from "../context/AuthContext";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, enrollCourse } = useAuth();

  const [expandedLesson, setExpandedLesson] = useState(null);

  const course = courses.find((item) => item.id === Number(id));

  if (!course) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-5 bg-slate-50">
        <div className="text-center bg-white p-10 rounded-3xl shadow-lg max-w-md">
          <div className="bg-indigo-100 text-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
            <BookOpen size={38} />
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 mt-6">
            Course Not Found
          </h2>

          <p className="text-slate-500 mt-3">
            Sorry, the course you are looking for does not exist.
          </p>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-4 rounded-xl font-bold mt-7 transition"
          >
            <ArrowRight size={18} className="rotate-180" />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const isEnrolled = user?.enrolledCourses?.includes(course.id);

  const handleEnroll = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (isEnrolled) return;

    enrollCourse(course.id);
  };

  const outcomes = [
    "Understand the fundamentals of the subject.",
    "Develop practical professional skills.",
    "Complete real-world projects.",
    "Build a professional portfolio.",
    "Improve your career opportunities.",
    "Gain confidence in your knowledge.",
  ];

  const courseIncludes = [
    { icon: PlayCircle, text: "On-demand video lessons" },
    { icon: BookOpen, text: "Structured learning modules" },
    { icon: Globe, text: "Learn anytime, anywhere" },
    { icon: Award, text: "Course completion certificate" },
    { icon: ShieldCheck, text: "Lifetime learning access" },
  ];

  const lessons = Array.isArray(course.lessons) ? course.lessons : [];

  return (
    <div className="bg-white overflow-hidden">

      {/* BREADCRUMB */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="container-custom py-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>

          <span>/</span>

          <Link to="/courses" className="hover:text-indigo-600">
            Courses
          </Link>

          <span>/</span>

          <span className="text-indigo-600 font-semibold">
            {course.title}
          </span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_15%_30%,#6366f1,transparent_35%),radial-gradient(circle_at_85%_70%,#a855f7,transparent_30%)]"></div>

        <div className="container-custom relative grid lg:grid-cols-2 gap-12 items-center">

          {/* COURSE INFORMATION */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 px-4 py-2 rounded-full text-sm font-bold">
                {course.category}
              </span>

              <span className="bg-white/10 text-slate-200 px-4 py-2 rounded-full text-sm">
                {course.level}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mt-7">
              {course.title}
            </h1>

            <p className="text-slate-300 text-lg leading-8 mt-6">
              {course.description}
            </p>

            {/* RATINGS */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Star size={19} className="text-amber-400" fill="currentColor" />
                <strong className="text-white">{course.rating}</strong>
                <span className="text-slate-400">Course Rating</span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Users size={19} />
                <span>{course.students} Students</span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Clock size={19} />
                <span>{course.duration}</span>
              </div>
            </div>

            {/* INSTRUCTOR */}
            <div className="flex items-center gap-4 mt-9 pt-7 border-t border-white/15">
              <div className="bg-indigo-600 p-3 rounded-full">
                <GraduationCap size={28} />
              </div>

              <div>
                <p className="text-slate-400 text-sm">Created by</p>
                <h3 className="font-bold text-white mt-1">
                  {course.instructor}
                </h3>
              </div>
            </div>

            <button
              onClick={handleEnroll}
              disabled={isEnrolled}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-extrabold mt-9 transition-all ${
                isEnrolled
                  ? "bg-green-600 text-white cursor-default"
                  : "bg-indigo-600 hover:bg-indigo-500 text-white hover:-translate-y-1 shadow-lg shadow-indigo-600/30"
              }`}
            >
              {isEnrolled ? (
                <>
                  <CheckCircle size={20} />
                  Already Enrolled
                </>
              ) : (
                <>
                  Enroll in This Course
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </div>

          {/* COURSE IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/20 rounded-3xl blur-2xl"></div>

            <img
              src={course.image}
              alt={course.title}
              className="relative w-full h-[320px] md:h-[440px] object-cover rounded-3xl shadow-2xl border border-white/10"
            />

            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl p-5 text-slate-900 shadow-xl flex justify-between items-center gap-4">
              <div>
                <p className="text-slate-500 text-sm">Course Price</p>
                <h3 className="text-3xl font-extrabold text-indigo-600">
                  {course.price === 0 ? "Free" : `₹${course.price}`}
                </h3>
              </div>

              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-xl">
                <GraduationCap size={30} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COURSE HIGHLIGHTS */}
      <section className="bg-indigo-50 border-b border-indigo-100">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 py-8">

          {[
            { icon: Clock, title: "Duration", value: course.duration },
            { icon: BookOpen, title: "Lessons", value: `${lessons.length} Modules` },
            { icon: BarChart3, title: "Level", value: course.level },
            { icon: Users, title: "Students", value: course.students },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-3">
                <div className="bg-white text-indigo-600 p-3 rounded-xl shadow-sm">
                  <Icon size={23} />
                </div>

                <div>
                  <p className="text-slate-500 text-xs md:text-sm">
                    {item.title}
                  </p>
                  <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                    {item.value}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 md:py-24">
        <div className="container-custom grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            {/* OVERVIEW */}
            <div>
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">
                Course Introduction
              </span>

              <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                About This Course
              </h2>

              <p className="text-slate-600 leading-8 mt-5">
                {course.description} This course is designed to help you build
                practical skills and gain valuable industry knowledge. Learn
                through structured lessons, guided practice, and hands-on
                projects that help you apply what you learn.
              </p>
            </div>

            {/* LEARNING OUTCOMES */}
            <div className="mt-14">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                What You'll Learn
              </h2>

              <p className="text-slate-500 mt-3">
                Skills and knowledge you can gain from this course.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-7">
                {outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={21}
                      className="text-green-500 shrink-0 mt-1"
                    />

                    <p className="text-slate-600 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SYLLABUS */}
            <div className="mt-16">
              <div className="flex flex-wrap justify-between items-end gap-4 mb-7">
                <div>
                  <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">
                    Learning Roadmap
                  </span>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">
                    Course Curriculum
                  </h2>
                </div>

                <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold">
                  {lessons.length} Modules
                </span>
              </div>

              <div className="space-y-4">
                {lessons.map((lesson, index) => {
                  const isOpen = expandedLesson === index;

                  return (
                    <div
                      key={`${course.id}-${index}`}
                      className="border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-200 transition"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedLesson(isOpen ? null : index)
                        }
                        aria-expanded={isOpen}
                        className="w-full flex items-center gap-4 p-5 text-left hover:bg-indigo-50/50 transition"
                      >
                        <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl shrink-0">
                          <BookOpen size={22} />
                        </div>

                        <div className="flex-1">
                          <p className="text-xs text-indigo-600 font-bold">
                            MODULE {String(index + 1).padStart(2, "0")}
                          </p>

                          <h3 className="font-bold text-slate-900 mt-1">
                            {lesson}
                          </h3>
                        </div>

                        {isOpen ? (
                          <ChevronUp className="text-indigo-600 shrink-0" />
                        ) : (
                          <ChevronDown className="text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pl-20">
                          <p className="text-slate-500 leading-7">
                            Explore this module to understand {lesson.toLowerCase()}
                            and develop your practical knowledge through
                            structured learning.
                          </p>

                          <div className="flex items-center gap-2 text-sm text-indigo-600 font-semibold mt-3">
                            <PlayCircle size={17} />
                            Course module
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* COURSE FEATURES */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                This Course Includes
              </h2>

              <div className="grid sm:grid-cols-2 gap-5 mt-7">
                {courseIncludes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl">
                        <Icon size={21} />
                      </div>

                      <p className="text-slate-600 font-medium">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside>
            <div className="lg:sticky lg:top-8 bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">

              <div className="bg-gradient-to-br from-indigo-700 to-purple-700 p-7 text-white">
                <span className="text-indigo-200 text-sm font-semibold">
                  Start Your Learning Journey
                </span>

                <h2 className="text-4xl font-extrabold mt-3">
                  {course.price === 0 ? "Free" : `₹${course.price}`}
                </h2>

                <p className="text-indigo-200 mt-2 text-sm">
                  One-time course enrollment
                </p>

                <button
                  onClick={handleEnroll}
                  disabled={isEnrolled}
                  className={`w-full mt-6 py-4 rounded-xl font-extrabold flex items-center justify-center gap-2 transition ${
                    isEnrolled
                      ? "bg-green-500 text-white cursor-default"
                      : "bg-white text-indigo-700 hover:bg-indigo-50"
                  }`}
                >
                  {isEnrolled ? (
                    <>
                      <CheckCircle size={19} />
                      Enrolled Successfully
                    </>
                  ) : (
                    <>
                      Enroll Now
                      <ArrowRight size={19} />
                    </>
                  )}
                </button>

                {!user && (
                  <p className="text-indigo-200 text-xs text-center mt-4">
                    You will be asked to log in before enrollment.
                  </p>
                )}
              </div>

              <div className="p-7">
                <h3 className="font-extrabold text-lg text-slate-900 mb-6">
                  Course Information
                </h3>

                <div className="space-y-5">
                  {[
                    { icon: Clock, label: "Duration", value: course.duration },
                    { icon: BarChart3, label: "Skill Level", value: course.level },
                    { icon: Users, label: "Students", value: course.students },
                    { icon: Star, label: "Rating", value: `${course.rating}/5` },
                    { icon: BookOpen, label: "Modules", value: lessons.length },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex justify-between items-center gap-3"
                      >
                        <div className="flex items-center gap-3 text-slate-500">
                          <Icon size={19} className="text-indigo-600" />
                          <span>{item.label}</span>
                        </div>

                        <strong className="text-slate-900 text-sm text-right">
                          {item.value}
                        </strong>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-slate-100 mt-7 pt-7">
                  <h3 className="font-extrabold text-slate-900 mb-4">
                    Your Instructor
                  </h3>

                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <GraduationCap size={26} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">
                        {course.instructor}
                      </h4>

                      <p className="text-sm text-slate-500">
                        Professional Instructor
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 text-green-700 rounded-xl p-4 mt-7 flex items-start gap-3">
                  <ShieldCheck size={22} className="shrink-0" />
                  <p className="text-sm leading-6">
                    Learn with confidence and track your progress through
                    your student profile.
                  </p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="relative overflow-hidden bg-slate-950 rounded-3xl p-9 md:p-14 text-center text-white">

            <div className="absolute -top-20 -right-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-indigo-300 font-bold text-sm">
                <Sparkles size={18} />
                Keep Learning, Keep Growing
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold mt-5">
                Ready to Build Your Future?
              </h2>

              <p className="text-slate-400 mt-4 leading-8">
                Explore more courses and discover new opportunities
                with EduLearn.
              </p>

              <Link
                to="/courses"
                className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl font-bold mt-8 transition-all hover:-translate-y-1"
              >
                Explore More Courses
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CourseDetails;
