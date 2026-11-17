
import { Link } from "react-router-dom";
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
  ArrowRight,
  Sparkles,
  Send,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    if (!email) return;

    alert("Thank you for subscribing to EduLearn!");
    e.target.reset();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Courses", path: "/courses" },
    { name: "Contact Us", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  const popularCourses = [
    { name: "Web Development", icon: "💻" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Digital Marketing", icon: "📈" },
    { name: "Data Science", icon: "📊" },
    { name: "Artificial Intelligence", icon: "🤖" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      symbol: "f",
      url: "https://facebook.com",
      hover: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      symbol: "◎",
      url: "https://instagram.com",
      hover: "hover:bg-pink-600",
    },
    {
      name: "Twitter",
      symbol: "𝕏",
      url: "https://twitter.com",
      hover: "hover:bg-sky-500",
    },
    {
      name: "LinkedIn",
      symbol: "in",
      url: "https://linkedin.com",
      hover: "hover:bg-blue-700",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#080d20] text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Newsletter Section */}
        <div className="relative pt-16 pb-14">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-indigo-600 to-purple-700 p-7 shadow-2xl shadow-indigo-950/40 sm:p-10 lg:p-12">

            {/* Decorative Circles */}
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-[35px] border-white/10" />

            <div className="pointer-events-none absolute -bottom-24 right-1/3 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

            <div className="relative flex flex-col items-center justify-between gap-9 lg:flex-row">

              <div className="max-w-xl text-center lg:text-left">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-indigo-100">
                  <Sparkles size={15} />
                  Stay Updated
                </div>

                <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Learn Something New
                  <span className="block text-indigo-200">
                    Every Day!
                  </span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-indigo-100 sm:text-base">
                  Get the latest courses, learning tips, and exclusive
                  educational updates delivered straight to your inbox.
                </p>
              </div>

              {/* Newsletter Form */}
              <form
                onSubmit={handleSubscribe}
                className="flex w-full max-w-lg flex-col gap-3 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md sm:flex-row"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                  <Mail
                    className="shrink-0 text-indigo-100"
                    size={20}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    aria-label="Email address"
                    className="w-full min-w-0 bg-transparent py-3 text-sm text-white outline-none placeholder:text-indigo-200"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-extrabold text-indigo-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-indigo-50"
                >
                  Subscribe
                  <Send size={16} />
                </button>
              </form>

            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Brand Section */}
          <div>

            <Link
              to="/"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-950/40 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                <GraduationCap size={27} strokeWidth={2.2} />
              </div>

              <div className="flex flex-col">
                <h2 className="text-2xl font-black tracking-tight text-white">
                  Edu
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Learn
                  </span>
                </h2>

                <p className="text-[9px] font-semibold uppercase tracking-[3px] text-slate-400">
                  Learn & Grow
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-8 text-slate-400">
              Learn new skills, discover your potential, and build a
              successful future with EduLearn. Your journey to knowledge
              starts here.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg font-bold text-slate-300 transition duration-300 hover:-translate-y-1 hover:text-white ${social.hover}`}
                >
                  {social.symbol}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-7 text-lg font-extrabold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-indigo-400"
                  >
                    <ArrowRight
                      size={14}
                      className="text-indigo-500 transition group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="mb-7 text-lg font-extrabold text-white">
              Popular Courses
            </h3>

            <ul className="space-y-4">
              {popularCourses.map((course) => (
                <li key={course.name}>
                  <Link
                    to="/courses"
                    className="group inline-flex items-center gap-3 text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-indigo-400"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-base transition group-hover:bg-indigo-500/20">
                      {course.icon}
                    </span>

                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-7 text-lg font-extrabold text-white">
              Contact Us
            </h3>

            <div className="space-y-6">

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">
                    Our Location
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Madurai, Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white">
                    Email Address
                  </h4>

                  <a
                    href="mailto:info@edulearn.com"
                    className="mt-2 block break-all text-sm text-slate-400 transition hover:text-indigo-400"
                  >
                    info@edulearn.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                  <Phone size={20} />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">
                    Phone Number
                  </h4>

                  <a
                    href="tel:+919876543210"
                    className="mt-2 block text-sm text-slate-400 transition hover:text-indigo-400"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center md:flex-row md:text-left">

          <p className="text-sm text-slate-500">
            © {currentYear} EduLearn. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-sm text-slate-500">
            Made with
            <Heart
              size={14}
              className="mx-1 fill-pink-500 text-pink-500"
            />
            for learners everywhere.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">

            <Link
              to="/contact"
              className="transition hover:text-indigo-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-indigo-400"
            >
              Terms & Conditions
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 transition hover:text-indigo-400"
            >
              Back to Top
              <ArrowUp size={15} />
            </button>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
