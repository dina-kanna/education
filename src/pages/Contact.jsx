
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Headphones,
  Sparkles,
  Globe,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Thank you! Your message has been submitted successfully.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@edulearn.com",
      description: "Send us your questions anytime.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Talk to our support team.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Madurai, Tamil Nadu, India",
      description: "We would love to meet you.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat: 9 AM - 6 PM",
      description: "We are here to help you.",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      symbol: "f",
      href: "https://facebook.com",
    },
    {
      label: "Instagram",
      symbol: "◎",
      href: "https://instagram.com",
    },
    {
      label: "LinkedIn",
      symbol: "in",
      href: "https://linkedin.com",
    },
    {
      label: "Website",
      symbol: <Globe size={21} />,
      href: "https://example.com",
    },
  ];

  return (
    <div className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,#6366f1,transparent_35%),radial-gradient(circle_at_85%_70%,#a855f7,transparent_30%)] opacity-20" />

        <div className="relative mx-auto max-w-full px-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-indigo-200">
            <Sparkles size={16} />
            We're Here to Help You
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight md:text-6xl">
            Let's Start a
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have questions about our courses, learning programs, or platform?
            Our friendly team is ready to help you take the next step.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-7 py-4 font-bold transition-all hover:-translate-y-1 hover:bg-indigo-500"
            >
              Send a Message
              <ArrowRight size={19} />
            </a>

            <a
              href="mailto:info@edulearn.com"
              className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-semibold transition hover:bg-white/10"
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative z-10 -mt-8">
        <div className="mx-auto max-w-full px-5">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className={`${item.color} flex h-14 w-14 items-center justify-center rounded-xl`}>
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 break-words font-bold text-indigo-600">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM AND INFORMATION */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-full items-start gap-14 px-5 lg:grid-cols-2">

          {/* LEFT INFORMATION */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Get In Touch
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              We'd Love to Hear From You
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Whether you need help choosing a course, have questions about
              enrollment, or want to explore learning opportunities, we're
              always happy to hear from you.
            </p>

            <div className="mt-9 rounded-3xl bg-indigo-50 p-7 md:p-8">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-indigo-600 p-4 text-white">
                  <Headphones size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Need Quick Help?
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Our support team is ready to assist you.
                  </p>
                </div>
              </div>

              <a
                href="tel:+919876543210"
                className="mt-7 inline-flex items-center gap-2 font-extrabold text-indigo-600 transition-all hover:gap-4"
              >
                Call Our Support Team
                <ArrowRight size={18} />
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-10">
              <h3 className="text-lg font-extrabold text-slate-900">
                Connect With Us
              </h3>

              <p className="mt-2 text-slate-500">
                Follow EduLearn and stay updated with our latest courses.
              </p>

              <div className="mt-5 flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 font-extrabold text-slate-600 transition-all hover:-translate-y-1 hover:bg-indigo-600 hover:text-white"
                  >
                    {social.symbol}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div
            id="contact-form"
            className="rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/60 md:p-10"
          >
            <div className="mb-8">
              <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                Contact Form
              </span>

              <h2 className="mt-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
                Send Us a Message
              </h2>

              <p className="mt-2 text-slate-500">
                Fill out the form below and we'll get back to you.
              </p>
            </div>

            {success && (
              <div
                role="status"
                className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700"
              >
                <CheckCircle size={22} className="mt-0.5 shrink-0" />
                <p className="font-medium">{success}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* NAME */}
              <div>
                <label htmlFor="name" className="mb-2 block font-bold text-slate-700">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full rounded-xl border px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 ${
                    errors.name ? "border-red-400" : "border-slate-200"
                  }`}
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="mb-2 block font-bold text-slate-700">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className={`w-full rounded-xl border px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 ${
                    errors.email ? "border-red-400" : "border-slate-200"
                  }`}
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* SUBJECT */}
              <div>
                <label htmlFor="subject" className="mb-2 block font-bold text-slate-700">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className={`w-full rounded-xl border px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 ${
                    errors.subject ? "border-red-400" : "border-slate-200"
                  }`}
                />

                {errors.subject && (
                  <p className="mt-2 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label htmlFor="message" className="mb-2 block font-bold text-slate-700">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`w-full resize-none rounded-xl border px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 ${
                    errors.message ? "border-red-400" : "border-slate-200"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 py-4 font-extrabold text-white shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1 hover:bg-indigo-700"
              >
                Send Message
                <Send size={19} />
              </button>

              <p className="text-center text-xs text-slate-400">
                We respect your privacy and will only use your details to respond.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-20">
        <div className="mx-auto max-w-full px-5">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Find Us
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Visit Our Location
            </h2>

            <p className="mt-3 text-slate-500">
              Find us in the beautiful city of Madurai, Tamil Nadu.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <iframe
              title="EduLearn location in Madurai"
              src="https://maps.google.com/maps?q=Madurai%2C%20Tamil%20Nadu%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              className="block border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute bottom-5 left-5 hidden items-center gap-3 rounded-xl bg-white p-4 shadow-lg sm:flex">
              <div className="rounded-lg bg-indigo-100 p-3 text-indigo-600">
                <MapPin size={23} />
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900">EduLearn</h3>
                <p className="text-sm text-slate-500">
                  Madurai, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-full px-5">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-9 text-center text-white md:p-14">
            <div className="absolute -right-10 -top-20 h-60 w-60 rounded-full bg-indigo-600/20 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300">
                <MessageCircle size={18} />
                We're Always Happy to Help
              </div>

              <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
                Have More Questions?
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                Explore our courses and discover how EduLearn can help
                you build the future you want.
              </p>

              <a
                href="mailto:info@edulearn.com"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-8 py-4 font-bold transition-all hover:-translate-y-1 hover:bg-indigo-500"
              >
                Contact Our Team
                <ArrowRight size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
