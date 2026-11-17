
import { Link } from "react-router-dom";
import {
  Star,
  Clock,
  Users,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  PlayCircle,
} from "lucide-react";

const CourseCard = ({ course }) => {
  if (!course) return null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/60">

      {/* COURSE IMAGE */}
      <div className="relative h-56 overflow-hidden bg-slate-100">

        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

        {/* CATEGORY */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-extrabold text-indigo-700 shadow-lg backdrop-blur-md">
            {course.category || "General"}
          </span>
        </div>

        {/* RATING */}
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-slate-950/75 px-3 py-2 text-sm font-bold text-white backdrop-blur-md">
          <Star size={15} fill="currentColor" className="text-amber-400" />
          {course.rating ?? "New"}
        </div>

        {/* LEVEL */}
        {course.level && (
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold text-white">
            <GraduationCap size={17} />
            {course.level}
          </div>
        )}

        {/* PLAY ICON */}
        <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600">
          <PlayCircle size={24} />
        </div>
      </div>

      {/* COURSE CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* INSTRUCTOR */}
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          <BookOpen size={15} />
          <span>Professional Learning</span>
        </div>

        {/* TITLE */}
        <h3 className="line-clamp-2 min-h-[56px] text-xl font-extrabold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
          {course.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 line-clamp-3 min-h-[66px] text-sm leading-6 text-slate-500">
          {course.description}
        </p>

        {/* COURSE DETAILS */}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-slate-100 py-4 text-sm text-slate-500">

          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Clock size={16} />
            </span>
            <span className="font-semibold">{course.duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
              <Users size={16} />
            </span>
            <span className="font-semibold">
              {course.students} Students
            </span>
          </div>
        </div>

        {/* PRICE AND BUTTON */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">

          <div>
            <p className="text-xs font-semibold text-slate-400">
              Course Price
            </p>

            <p className="mt-1 text-2xl font-extrabold text-indigo-600">
              {Number(course.price) === 0
                ? "Free"
                : `₹${Number(course.price).toLocaleString("en-IN")}`}
            </p>
          </div>

          <Link
            to={`/course/${course.id}`}
            className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-5"
          >
            View Course

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
            />
          </Link>

        </div>
      </div>
    </article>
  );
};

export default CourseCard;
