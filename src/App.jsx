import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState("");

  const projects = [
    {
      title: "React Calculator",
      description:
        "A responsive calculator website created using ReactJS. It performs basic arithmetic operations and demonstrates React components, state management, and event handling.",
      image: "🧮",
      link: "https://lising-dcit-26-calculator.vercel.app/",
    },
    {
      title: "React To-Do List",
      description:
        "A functional To-Do List application built with ReactJS and Tailwind CSS. Users can add, complete, and delete tasks using React state and event handling.",
      image: "✅",
      link: "https://lising-todo-list.vercel.app/",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormMessage("Please fill in all fields.");
      return;
    }

    setFormMessage(
      `Thank you, ${formData.name}! Your message has been submitted.`
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* NAVIGATION */}
      <nav
        className={`sticky top-0 z-50 border-b backdrop-blur ${
          darkMode
            ? "border-gray-800 bg-gray-950/95"
            : "border-gray-200 bg-white/95"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-blue-600"
          >
            Carlos Lising
          </button>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link"
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("resume")}
              className="nav-link"
            >
              Resume
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-lg border px-3 py-2 text-sm transition hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border px-3 py-2 md:hidden"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`border-t px-6 py-4 md:hidden ${
              darkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("home")}
                className="mobile-link"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="mobile-link"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="mobile-link"
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection("resume")}
                className="mobile-link"
              >
                Resume
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="mobile-link"
              >
                Contact
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-lg border px-4 py-2"
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HOME */}
      <section
        id="home"
        className="mx-auto flex min-h-[90vh] max-w-6xl items-center px-6 py-20"
      >
        <div className="grid w-full gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 font-semibold text-blue-600">
              WELCOME TO MY E-PORTFOLIO
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Hi, I'm{" "}
              <span className="text-blue-600">Carlos Lising</span>
            </h1>

            <p
              className={`mt-6 max-w-xl text-lg leading-8 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Welcome to my personal e-portfolio. I am a student interested
              in web development, programming, and creating useful digital
              applications using modern technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                View My Projects →
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className={`flex h-72 w-72 items-center justify-center rounded-full text-8xl shadow-xl md:h-96 md:w-96 ${
                darkMode
                  ? "bg-gray-900"
                  : "bg-white"
              }`}
            >
              👨‍💻
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className={`px-6 py-24 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            title="About Me"
            subtitle="Get to know me and my interests."
          />

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Personal Background
              </h3>

              <p
                className={`leading-8 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I am Carlos Lising, a student who is developing my knowledge
                and skills in programming and web development. I enjoy
                learning how websites and applications work and applying what
                I learn through practical projects.
              </p>

              <p
                className={`mt-4 leading-8 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                My goal is to continuously improve my technical skills and
                create websites and applications that are useful,
                responsive, and easy to use.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-2xl font-bold">
                Skills & Interests
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "ReactJS",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Git",
                  "GitHub",
                  "MySQL",
                  "Web Design",
                  "Problem Solving",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            title="Projects / Work Samples"
            subtitle="Some of my ReactJS projects."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`rounded-2xl border p-6 shadow-lg transition hover:-translate-y-2 ${
                  darkMode
                    ? "border-gray-800 bg-gray-900"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="mb-6 flex h-32 items-center justify-center rounded-xl bg-blue-50 text-7xl">
                  {project.image}
                </div>

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p
                  className={`mt-3 leading-7 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Open Project ↗
                </a>
              </div>
            ))}
          </div>

          {/* CONDITIONAL RENDERING */}
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              {showMore ? "Show Less ↑" : "View More Projects ↓"}
            </button>

            {showMore && (
              <div
                className={`mx-auto mt-6 max-w-2xl rounded-xl p-6 ${
                  darkMode ? "bg-gray-900" : "bg-white shadow"
                }`}
              >
                <h3 className="text-xl font-bold">
                  More Work Coming Soon
                </h3>

                <p
                  className={`mt-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  I am continuously learning and developing new projects to
                  improve my programming and web development skills.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section
        id="resume"
        className={`px-6 py-24 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            title="Resume / CV"
            subtitle="My education, experience, and technical skills."
          />

          <div className="grid gap-8 md:grid-cols-3">
            <ResumeCard
              title="Education"
              icon="🎓"
              items={[
                "College Student",
                "Information Technology / Computing Studies",
                "Currently developing skills in programming and web development",
              ]}
            />

            <ResumeCard
              title="Experience"
              icon="💼"
              items={[
                "ReactJS Projects",
                "Web Development Activities",
                "Database / MySQL Activities",
                "Git and GitHub Projects",
              ]}
            />

            <ResumeCard
              title="Technical Skills"
              icon="⚙️"
              items={[
                "ReactJS",
                "JavaScript",
                "Tailwind CSS",
                "HTML & CSS",
                "MySQL",
                "Git & GitHub",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            title="Contact Me"
            subtitle="Have a question or want to connect? Send me a message."
          />

          <div
            className={`rounded-2xl p-8 shadow-xl ${
              darkMode
                ? "bg-gray-900"
                : "bg-white"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block font-semibold">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>

              {formMessage && (
                <p className="rounded-lg bg-blue-50 p-4 text-center font-medium text-blue-700">
                  {formMessage}
                </p>
              )}
            </form>

            <div className="mt-8 border-t pt-6 text-center">
              <p className="font-semibold">Connect with me</p>

              <p className="mt-2 text-gray-500">
                Email: your-email@example.com
              </p>

              <p className="mt-1 text-gray-500">
                GitHub: github.com/carloslising8123-coder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t px-6 py-8 text-center ${
          darkMode
            ? "border-gray-800 bg-gray-950"
            : "border-gray-200 bg-white"
        }`}
      >
        <p className="font-semibold">
          © 2026 Carlos Lising
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Built with ReactJS & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

/* SECTION TITLE COMPONENT */
function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-4xl font-extrabold">{title}</h2>

      <p className="mt-3 text-gray-500">{subtitle}</p>

      <div className="mx-auto mt-5 h-1 w-16 rounded bg-blue-600"></div>
    </div>
  );
}

/* RESUME CARD COMPONENT */
function ResumeCard({ title, icon, items }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-2xl font-bold">{title}</h3>

      <ul className="mt-5 space-y-3 text-gray-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="font-bold text-blue-600">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;