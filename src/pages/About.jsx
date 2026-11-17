
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/500?img=12",
      bio: "Building a better future through accessible education.",
    },
    {
      name: "Sarah Johnson",
      role: "Lead Instructor",
      image: "https://i.pravatar.cc/500?img=47",
      bio: "Helping learners turn knowledge into real skills.",
    },
    {
      name: "David Wilson",
      role: "Course Director",
      image: "https://i.pravatar.cc/500?img=11",
      bio: "Designing engaging and practical learning experiences.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Students", icon: "🎓" },
    { number: "100+", label: "Online Courses", icon: "📚" },
    { number: "50+", label: "Expert Teachers", icon: "👨‍🏫" },
    { number: "95%", label: "Positive Reviews", icon: "⭐" },
  ];

  const features = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To provide quality education and practical learning opportunities that empower people to achieve their personal and professional goals.",
      color: "bg-blue-50",
      iconColor: "bg-blue-100",
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description:
        "To become a trusted global learning platform where everyone can discover their potential through technology and education.",
      color: "bg-purple-50",
      iconColor: "bg-purple-100",
    },
    {
      icon: "💡",
      title: "Our Values",
      description:
        "We believe in creativity, innovation, accessibility, and lifelong learning to create opportunities for everyone.",
      color: "bg-orange-50",
      iconColor: "bg-orange-100",
    },
  ];

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative bg-slate-50 px-6 py-24 md:py-32">

        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-full items-center gap-14 lg:grid-cols-2">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
              <span>✨</span> Welcome to EduLearn
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
              Knowledge Is The
              <span className="block text-blue-600">
                Key To Success.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              We make learning simple, affordable, and accessible.
              Discover new opportunities, develop your skills, and
              create a brighter future with EduLearn.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Courses →
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border-2 border-slate-200 px-8 py-4 font-bold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {team.map((person) => (
                  <img
                    key={person.name}
                    src={person.image}
                    alt={person.name}
                    className="h-11 w-11 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <div>
                <p className="font-bold text-slate-800">
                  Meet Our Experts
                </p>
                <p className="text-sm text-slate-500">
                  Dedicated to your success
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-blue-300/30 blur-2xl" />

            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000"
              alt="EduLearn team working together"
              className="relative h-[350px] w-full rounded-3xl object-cover shadow-2xl md:h-[470px]"
            />

            <div className="absolute -bottom-7 left-5 rounded-2xl bg-white p-5 shadow-xl md:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                  🏆
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900">
                    Quality Education
                  </h3>
                  <p className="text-sm text-slate-500">
                    Learn without limits
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="relative z-10 mx-auto max-w-full px-6 py-16">

        <div className="grid grid-cols-2 gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-xl md:grid-cols-4 md:p-10">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-5 text-center transition duration-300 hover:-translate-y-2 hover:bg-blue-50"
            >
              <div className="text-4xl">{stat.icon}</div>

              <h2 className="mt-3 text-3xl font-black text-blue-600 md:text-4xl">
                {stat.number}
              </h2>

              <p className="mt-2 text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ABOUT US */}
      <section className="bg-white px-6 py-24">

        <div className="mx-auto grid max-w-full items-center gap-16 lg:grid-cols-2">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000"
              alt="Students learning together"
              className="h-[350px] w-full rounded-3xl object-cover shadow-xl md:h-[460px]"
            />

            <div className="absolute -bottom-7 -right-3 rounded-2xl bg-blue-600 p-7 text-white shadow-xl md:-right-7">
              <h3 className="text-4xl font-black">100%</h3>
              <p className="mt-1 text-sm text-blue-100">
                Learning Focused
              </p>
            </div>
          </div>

          <div>
            <span className="font-bold uppercase tracking-[3px] text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              Making Education
              <span className="text-blue-600">
                {" "}Accessible to Everyone
              </span>
            </h2>

            <p className="mt-7 leading-8 text-slate-600">
              EduLearn is an online education platform dedicated
              to helping learners develop valuable professional
              skills. We provide quality learning resources,
              practical projects, and expert guidance.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our goal is to make learning simple, engaging,
              and accessible to students everywhere.
            </p>

            <div className="mt-8 space-y-5">

              {[
                "Expert-led online courses",
                "Flexible learning experience",
                "Practical projects and skills",
                "Learn anytime, anywhere",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                    ✓
                  </span>
                  <span className="font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <Link
              to="/courses"
              className="mt-9 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Start Learning →
            </Link>
          </div>

        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="bg-slate-50 px-6 py-24">

        <div className="mx-auto max-w-full">

          <div className="mb-16 text-center">
            <span className="font-bold uppercase tracking-[3px] text-blue-600">
              What Drives Us
            </span>

            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">
              Our Purpose & Values
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">
              Our commitment to education inspires everything
              we do at EduLearn.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.color} group rounded-3xl border border-white p-9 shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-xl`}
              >
                <div className={`${feature.iconColor} flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                  {feature.icon}
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-24" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-full">

          <div className="mb-16 text-center">
            <span className="font-bold uppercase tracking-[3px] text-blue-600">
              Meet Our Team
            </span>

            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">
              The People Behind EduLearn
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-500">
              Meet the passionate professionals who make
              our learning platform special.
            </p>
          </div>

          <div className="grid gap-9 md:grid-cols-3">

            {team.map((person, index) => (
              <div
                key={person.name}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-100 transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-blue-600 shadow">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-7 text-center">
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {person.name}
                  </h3>

                  <p className="mt-2 font-bold text-blue-600">
                    {person.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {person.bio}
                  </p>

                  <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-24" />
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-6 pb-24">

        <div className="relative mx-auto max-w-full overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-8 py-16 text-center text-white shadow-2xl md:px-16">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <div className="text-5xl">🚀</div>

            <h2 className="mt-6 text-3xl font-black md:text-5xl">
              Your Learning Journey Starts Here!
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100">
              Join EduLearn today and discover new opportunities.
              Build your skills and create the future you deserve.
            </p>

            <Link
              to="/signup"
              className="mt-9 inline-block rounded-xl bg-white px-9 py-4 font-extrabold text-blue-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Join EduLearn Today →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;
