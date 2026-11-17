
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Code,
  Palette,
  Megaphone,
  BarChart3,
  Briefcase,
  BookOpen,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  X,
  GraduationCap,
  TrendingUp,
  Star,
} from "lucide-react";

import CourseCard from "../components/CourseCard";
import { courses } from "../data";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { name: "All", icon: BookOpen },
    { name: "Development", icon: Code },
    { name: "Design", icon: Palette },
    { name: "Marketing", icon: Megaphone },
    { name: "Data Science", icon: BarChart3 },
    { name: "Business", icon: Briefcase },
  ];

  // Search, filter and sort courses
  const filteredCourses = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    const result = courses.filter((course) => {
      const matchesSearch =
        course.title?.toLowerCase().includes(searchText) ||
        course.description?.toLowerCase().includes(searchText) ||
        course.instructor?.toLowerCase().includes(searchText) ||
        course.category?.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || course.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "popular") {
      result.sort((a, b) => b.students - a.students);
    }

    return result;
  }, [search, category, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSortBy("popular");
  };

  return (
    <div className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,#6366f1,transparent_35%),radial-gradient(circle_at_85%_70%,#a855f7,transparent_30%)] opacity-20" />

        <div className="container-custom relative mx-auto max-w-full px-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-indigo-200">
            <Sparkles size={16} />
            Discover Your Potential
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Explore Our
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Online Courses
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Discover expert-led courses, learn valuable skills,
            and take the next step toward your dream career with EduLearn.
          </p>

          <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <div>
              <h3 className="text-3xl font-extrabold">
                {courses.length}+
              </h3>
              <p className="mt-2 text-sm text-slate-400">Courses</p>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold">10K+</h3>
              <p className="mt-2 text-sm text-slate-400">Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold">50+</h3>
              <p className="mt-2 text-sm text-slate-400">Mentors</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTER SECTION */}
      <section className="border-b border-indigo-100 bg-indigo-50 py-12">
        <div className="container-custom mx-auto px-5">

          <div className="mx-auto mb-9 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Find Your Course
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
              What Do You Want to Learn?
            </h2>
          </div>

          {/* SEARCH BAR */}
          <div className="relative mx-auto max-w-2xl">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              size={22}
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses, skills, instructors..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-5 pl-14 pr-14 shadow-lg shadow-indigo-100/50 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500"
              >
                <X size={21} />
              </button>
            )}
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mt-9">
            <div className="mb-5 flex items-center justify-center gap-2 font-semibold text-slate-600">
              <SlidersHorizontal size={18} />
              Browse Categories
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((item) => {
                const Icon = item.icon;
                const active = category === item.name;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setCategory(item.name)}
                    aria-pressed={active}
                    className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ${
                      active
                        ? "-translate-y-1 bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
                    }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* COURSE LIST */}
      <section className="py-20 md:py-24">
        <div className="container-custom mx-auto px-5">

          {/* SECTION HEADER */}
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                Learn Something New
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                {category === "All" ? "All Courses" : `${category} Courses`}
              </h2>

              <p className="mt-3 text-slate-500">
                Explore our carefully designed learning programs.
              </p>
            </div>

            {/* SORT */}
            <div className="flex flex-wrap items-center gap-3">
              <label
                htmlFor="course-sort"
                className="text-sm font-semibold text-slate-500"
              >
                Sort by:
              </label>

              <select
                id="course-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* RESULT INFO */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <p className="text-slate-600">
              Showing{" "}
              <strong className="text-indigo-600">
                {filteredCourses.length}
              </strong>{" "}
              of{" "}
              <strong className="text-slate-900">{courses.length}</strong>{" "}
              courses
            </p>

            {(search || category !== "All" || sortBy !== "popular") && (
              <button
                type="button"
                onClick={clearFilters}
                className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-700"
              >
                <X size={17} />
                Clear Filters
              </button>
            )}
          </div>

          {/* COURSES GRID */}
          {filteredCourses.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="transition-all duration-300 hover:-translate-y-2"
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            /* EMPTY STATE */
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-5 py-20 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <Search size={35} />
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-slate-900 md:text-3xl">
                No Courses Found
              </h3>

              <p className="mx-auto mt-3 max-w-md leading-7 text-slate-500">
                We couldn't find any courses matching your search.
                Try another keyword or select a different category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-indigo-700"
              >
                Reset All Filters
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* WHY LEARN WITH US */}
      <section className="bg-slate-950 py-20">
        <div className="container-custom mx-auto px-5">

          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-400">
              The EduLearn Advantage
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              Learn Skills That Matter
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Get everything you need to move forward in your learning journey.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                <GraduationCap size={29} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Expert Instructors
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Learn from knowledgeable instructors with practical
                industry experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                <TrendingUp size={29} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Career Growth
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Develop in-demand skills and prepare yourself for
                new professional opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                <Star size={29} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Quality Learning
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Enjoy structured lessons and practical learning
                designed to help you succeed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20">
        <div className="container-custom mx-auto px-5">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 to-purple-700 p-9 text-center text-white md:p-16">

            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                <Sparkles size={16} />
                Start Your Journey
              </div>

              <h2 className="mt-6 text-3xl font-extrabold md:text-5xl">
                Your Next Big Opportunity Starts Here
              </h2>

              <p className="mt-5 text-lg leading-8 text-indigo-100">
                Choose a course, develop your skills, and build the
                future you have always imagined.
              </p>

              <Link
                to="/signup"
                className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-extrabold text-indigo-700 transition-all hover:-translate-y-1 hover:bg-indigo-50"
              >
                Join EduLearn
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Courses;
