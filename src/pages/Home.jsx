
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  PlayCircle,
  Code,
  Palette,
  BarChart3,
  Megaphone,
  Star,
  GraduationCap,
  CheckCircle,
  Sparkles,
  Globe,
  Clock,
  Lightbulb,
  Quote,
  TrendingUp,
  Briefcase,
} from "lucide-react";

import CourseCard from "../components/CourseCard";
import { courses } from "../data";

const Home = () => {
  const featuredCourses = courses.slice(0, 3);

  const categories = [
    {
      name: "Development",
      icon: Code,
      color: "bg-blue-100 text-blue-600",
      description: "Build websites and applications",
    },
    {
      name: "Design",
      icon: Palette,
      color: "bg-purple-100 text-purple-600",
      description: "Create beautiful experiences",
    },
    {
      name: "Marketing",
      icon: Megaphone,
      color: "bg-orange-100 text-orange-600",
      description: "Grow brands and businesses",
    },
    {
      name: "Data Science",
      icon: BarChart3,
      color: "bg-emerald-100 text-emerald-600",
      description: "Discover insights from data",
    },
    {
      name: "Business",
      icon: Briefcase,
      color: "bg-amber-100 text-amber-600",
      description: "Develop business skills",
    },
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Expert-Led Courses",
      description:
        "Learn from experienced instructors who make complex topics simple and practical.",
    },
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description:
        "Study whenever and wherever you want with flexible online learning.",
    },
    {
      icon: Award,
      title: "Career-Focused Learning",
      description:
        "Build valuable skills that help you move closer to your career goals.",
    },
    {
      icon: Globe,
      title: "Learn Without Limits",
      description:
        "Explore different subjects and expand your knowledge from anywhere.",
    },
    {
      icon: Users,
      title: "Supportive Community",
      description:
        "Become part of a learning community that inspires growth and creativity.",
    },
    {
      icon: Lightbulb,
      title: "Practical Knowledge",
      description:
        "Turn what you learn into useful skills through real-world examples.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Web Developer",
      image: "https://i.pravatar.cc/100?img=47",
      text: "EduLearn helped me understand web development from the basics. The courses are easy to follow and really useful for building practical skills.",
    },
    {
      name: "Rahul Kumar",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/100?img=12",
      text: "The learning experience is excellent. I improved my design skills and gained confidence to work on real-world projects.",
    },
    {
      name: "Ananya Patel",
      role: "Digital Marketer",
      image: "https://i.pravatar.cc/100?img=44",
      text: "A wonderful platform with helpful content. I recommend EduLearn to anyone who wants to learn new skills and grow professionally.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden">

        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,#3730a3,transparent_35%),radial-gradient(circle_at_90%_80%,#581c87,transparent_35%)] opacity-60"></div>

        <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-white/10 hidden lg:block"></div>
        <div className="absolute top-32 right-24 w-44 h-44 rounded-full border border-white/10 hidden lg:block"></div>

        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 px-4 py-2 rounded-full text-sm font-bold">
                <Sparkles size={17} />
                Learn Today, Lead Tomorrow
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mt-8">
                Build Your Skills.
                <span className="block text-indigo-400">
                  Shape Your Future.
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-8 mt-7 max-w-xl">
                Discover expert-led online courses, learn in-demand skills,
                and take the next step toward your dream career with EduLearn.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-9">

                <Link
                  to="/courses"
                  className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-4 rounded-xl font-bold transition shadow-lg shadow-indigo-900/40 hover:-translate-y-1"
                >
                  Explore Courses
                  <ArrowRight size={19} />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 border border-white/25 hover:bg-white/10 text-white px-7 py-4 rounded-xl font-bold transition"
                >
                  <PlayCircle size={20} />
                  Discover EduLearn
                </Link>

              </div>

              {/* TRUST */}
              <div className="flex flex-wrap items-center gap-5 mt-12">

                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/80?img=47" alt="Student" className="w-10 h-10 rounded-full border-2 border-slate-950" />
                  <img src="https://i.pravatar.cc/80?img=12" alt="Student" className="w-10 h-10 rounded-full border-2 border-slate-950" />
                  <img src="https://i.pravatar.cc/80?img=44" alt="Student" className="w-10 h-10 rounded-full border-2 border-slate-950" />
                  <img src="https://i.pravatar.cc/80?img=32" alt="Student" className="w-10 h-10 rounded-full border-2 border-slate-950" />
                </div>

                <div>
                  <div className="flex gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-300 mt-1">
                    Join our growing learning community
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="relative rounded-[30px] overflow-hidden border border-white/10 shadow-2xl shadow-indigo-950/50">

                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
                  alt="Students learning together"
                  className="w-full h-[350px] sm:h-[450px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                <div className="absolute bottom-7 left-7 right-7">

                  <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full">
                    YOUR JOURNEY STARTS HERE
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold mt-4">
                    Learn Something New Every Day
                  </h3>

                  <p className="text-slate-200 mt-2">
                    Knowledge is your greatest investment.
                  </p>

                </div>
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-7 -left-3 sm:-left-8 bg-white text-slate-900 p-5 rounded-2xl shadow-xl flex items-center gap-4">

                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                  <GraduationCap size={29} />
                </div>

                <div>
                  <h4 className="font-extrabold text-lg">
                    Keep Growing
                  </h4>

                  <p className="text-slate-500 text-sm">
                    One skill at a time
                  </p>
                </div>

              </div>

              {/* FLOATING BADGE */}
              <div className="absolute -top-5 -right-2 sm:-right-5 bg-indigo-600 p-4 rounded-2xl shadow-xl">
                <Sparkles size={27} />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="relative z-10 -mt-1">

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">

            {[
              { value: "10K+", label: "Happy Students", icon: Users },
              { value: "100+", label: "Online Courses", icon: BookOpen },
              { value: "50+", label: "Expert Instructors", icon: GraduationCap },
              { value: "95%", label: "Student Satisfaction", icon: Award },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="text-center p-6 md:p-8">

                  <Icon size={25} className="text-indigo-600 mx-auto mb-3" />

                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm mt-2">
                    {item.label}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24">

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">

            <div>
              <span className="text-indigo-600 font-extrabold uppercase text-sm tracking-widest">
                Explore Subjects
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
                Find Your Learning Path
              </h2>

              <p className="text-slate-500 mt-3 max-w-xl leading-7">
                Explore popular subjects and discover the skills that match your interests.
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all"
            >
              View All Categories
              <ArrowRight size={19} />
            </Link>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  to="/courses"
                  key={category.name}
                  className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition duration-300 hover:-translate-y-2"
                >

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${category.color} group-hover:scale-110 transition`}>
                    <Icon size={27} />
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mt-5">
                    {category.name}
                  </h3>

                  <p className="text-slate-500 text-sm leading-6 mt-2">
                    {category.description}
                  </p>

                  <div className="flex items-center gap-2 text-indigo-600 text-sm font-bold mt-5">
                    Explore
                    <ArrowRight size={16} />
                  </div>

                </Link>
              );
            })}

          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row justify-between md:items-end gap-5 mb-12">

            <div>
              <span className="text-indigo-600 font-extrabold uppercase text-sm tracking-widest">
                Handpicked For You
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
                Popular Courses
              </h2>

              <p className="text-slate-500 mt-3">
                Start learning with our featured online courses.
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition"
            >
              View All Courses
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <span className="text-indigo-600 font-extrabold uppercase text-sm tracking-widest">
              Why EduLearn
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
              Learning Made Simple and Effective
            </h2>

            <p className="text-slate-500 mt-4 leading-7">
              We provide the tools, guidance, and learning experience you need to achieve your goals.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group p-8 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition duration-300"
                >

                  <div className="flex items-center justify-between">

                    <div className="bg-indigo-50 text-indigo-600 p-4 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition">
                      <Icon size={29} />
                    </div>

                    <span className="text-4xl font-extrabold text-slate-100 group-hover:text-indigo-100 transition">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mt-7">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 leading-7 mt-3">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* LEARNING BANNER */}
      <section className="py-20 bg-indigo-50">

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000"
                alt="Student studying with books and laptop"
                className="w-full h-[350px] md:h-[420px] object-cover rounded-3xl shadow-xl"
              />

              <div className="absolute bottom-5 right-5 bg-white p-5 rounded-2xl shadow-lg">

                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                    <TrendingUp size={26} />
                  </div>

                  <div>
                    <h4 className="font-extrabold text-slate-900">
                      Keep Improving
                    </h4>

                    <p className="text-xs text-slate-500">
                      Build your future skills
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <div>

              <span className="text-indigo-600 font-extrabold uppercase text-sm tracking-widest">
                Learn. Practice. Succeed.
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mt-4">
                Your Next Opportunity Starts With
                <span className="text-indigo-600"> Learning.</span>
              </h2>

              <p className="text-slate-600 leading-8 mt-6">
                Whether you are starting your career, changing your profession,
                or improving your existing skills, EduLearn helps you move forward.
              </p>

              <div className="space-y-4 mt-7">

                {[
                  "Flexible online learning",
                  "Practical and useful course content",
                  "Courses for different skill levels",
                  "Learn from anywhere, anytime",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-emerald-500 shrink-0" />
                    <span className="text-slate-700 font-semibold">
                      {text}
                    </span>
                  </div>
                ))}

              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-4 rounded-xl font-bold mt-9 transition"
              >
                About EduLearn
                <ArrowRight size={19} />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">

            <span className="text-indigo-600 font-extrabold uppercase text-sm tracking-widest">
              Student Stories
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
              What Our Students Say
            </h2>

            <p className="text-slate-500 mt-4">
              Hear from learners who are building their future with EduLearn.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-7">

            {testimonials.map((item) => (

              <div
                key={item.name}
                className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-50 transition"
              >

                <div className="flex items-center justify-between mb-6">

                  <div className="flex gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <Quote size={30} className="text-indigo-100" />

                </div>

                <p className="text-slate-600 leading-8 min-h-32">
                  "{item.text}"
                </p>

                <div className="border-t border-slate-100 mt-7 pt-6 flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-extrabold text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-indigo-600 font-semibold mt-1">
                      {item.role}
                    </p>
                  </div>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20">

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative bg-slate-950 rounded-[32px] px-7 py-16 md:px-16 md:py-20 text-center text-white overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#4338ca,transparent_40%),radial-gradient(circle_at_90%_90%,#6b21a8,transparent_40%)] opacity-50"></div>

            <div className="relative max-w-3xl mx-auto">

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-indigo-300 px-4 py-2 rounded-full text-sm font-bold">
                <Sparkles size={17} />
                Your Future Starts Today
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mt-7">
                Ready to Transform Your
                <span className="block text-indigo-400">
                  Future?
                </span>
              </h2>

              <p className="text-slate-300 text-lg leading-8 mt-6">
                Join EduLearn and take the first step toward gaining new skills,
                discovering opportunities, and achieving your dreams.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-9">

                <Link
                  to="/signup"
                  className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-indigo-900/40"
                >
                  Join EduLearn Now
                  <ArrowRight size={19} />
                </Link>

                <Link
                  to="/courses"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition"
                >
                  Browse Courses
                  <BookOpen size={19} />
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
