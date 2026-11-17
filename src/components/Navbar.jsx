
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
  GraduationCap,
  LogOut,
  ChevronRight,
  Home,
  BookOpen,
  Info,
  Mail,
  LogIn,
  UserPlus,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation links
  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Us", path: "/about", icon: Info },
    { name: "Courses", path: "/courses", icon: BookOpen },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu and scroll to top after route changes
  useEffect(() => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  // Logout
  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  return (
    <>
      {/* FIXED NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-xl">

        {/* MAIN NAVBAR */}
        <div className="mx-auto flex min-h-[76px] max-w-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

{/* LOGO */}
<Link
  to="/"
  onClick={closeMenu}
  className="group inline-flex shrink-0 items-center gap-2 sm:gap-3"
>
  {/* LOGO ICON */}
  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-2xl">
    <GraduationCap size={26} strokeWidth={2.2} />
  </div>

  {/* BRAND NAME */}
  <div className="flex flex-col">
    <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
      Edu<span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Learn</span>
    </h1>

    <p className="hidden text-[9px] font-semibold uppercase tracking-[3px] text-slate-400 sm:block">
      Learn & Grow
    </p>
  </div>
</Link>


          {/* DESKTOP AND TABLET NAVIGATION */}
          <div className="hidden items-center gap-1 md:flex lg:gap-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-xl px-2.5 py-2.5 text-xs font-bold transition-all duration-300 lg:px-4 lg:text-sm ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP AND TABLET AUTHENTICATION */}
          <div className="hidden shrink-0 items-center gap-2 md:flex lg:gap-3">

            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 rounded-xl px-2 py-2 font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600 lg:px-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </span>

                  <span className="hidden max-w-24 truncate text-sm lg:block">
                    {user?.name?.split(" ")[0] || "Profile"}
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-xl border border-red-200 px-3 py-2.5 text-xs font-bold text-red-500 transition hover:bg-red-500 hover:text-white lg:px-5 lg:text-sm"
                >
                  <span className="hidden lg:inline">Logout</span>
                  <LogOut size={17} className="lg:hidden" />
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="whitespace-nowrap rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600 lg:px-5 lg:text-sm"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:px-5 lg:text-sm"
                >
                  <span className="hidden lg:inline">Get Started</span>
                  <span className="lg:hidden">Sign Up</span>
                </Link>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition hover:bg-indigo-100 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-in-out md:hidden ${
            menuOpen
              ? "max-h-[650px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="mx-auto max-w-full space-y-2 px-4 py-5 sm:px-6">

            {/* MOBILE LINKS */}
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                        : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                    }`
                  }
                >
                  <span className="flex items-center gap-3">
                    <Icon size={19} />
                    {link.name}
                  </span>

                  <ChevronRight size={18} />
                </NavLink>
              );
            })}

            {/* MOBILE AUTHENTICATION */}
            <div className="mt-4 border-t border-slate-100 pt-4">

              {user ? (
                <div className="space-y-3">

                  <Link
                    to="/profile"
                    onClick={closeMenu}
                    tabIndex={menuOpen ? 0 : -1}
                    className="flex items-center gap-3 rounded-xl bg-indigo-50 p-4 text-indigo-700"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 font-bold text-white">
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="font-bold">My Profile</p>
                      <p className="truncate text-xs text-slate-500">
                        {user?.name || "Welcome"}
                      </p>
                    </div>

                    <ChevronRight size={19} />
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-3.5 font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">

                  <Link
                    to="/login"
                    onClick={closeMenu}
                    tabIndex={menuOpen ? 0 : -1}
                    className="flex items-center justify-center gap-2 rounded-xl border border-indigo-200 py-3.5 text-sm font-bold text-indigo-600 transition hover:bg-indigo-50"
                  >
                    <LogIn size={17} />
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    tabIndex={menuOpen ? 0 : -1}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3.5 text-sm font-bold text-white shadow-md"
                  >
                    <UserPlus size={17} />
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* MOBILE FOOTER */}
            <div className="pt-3 text-center">
              <p className="text-xs text-slate-400">
                © {new Date().getFullYear()} EduLearn. Learn & Grow.
              </p>
            </div>

          </div>
        </div>
      </nav>

      {/* NAVBAR SPACING */}
      <div className="h-[76px]" aria-hidden="true" />
    </>
  );
};

export default Navbar;
