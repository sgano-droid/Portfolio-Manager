import { useState } from "react";
import aralforexHome from "../assets/aralforex/aralforex-home.png";
import aralforexCourse from "../assets/aralforex/aralforex-course.png";
import aralforexDashboard from "../assets/aralforex/aralforex-dashboard.png";

const aralforexSlides = [
  {
    title: "AralForex homepage",
    image: aralforexHome,
    alt: "AralForex homepage with forex learning sections and Filipino beginner-focused course content.",
  },
  {
    title: "Course lesson page",
    image: aralforexCourse,
    alt: "AralForex course lesson interface showing TutorLMS modules and learning content.",
  },
  {
    title: "Student dashboard",
    image: aralforexDashboard,
    alt: "AralForex student dashboard with learning progress and account navigation.",
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = aralforexSlides[activeSlide];

  const showPreviousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? aralforexSlides.length - 1 : current - 1
    );
  };

  const showNextSlide = () => {
    setActiveSlide((current) =>
      current === aralforexSlides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="logo" href="#top">
            Portfolio
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#focus">Focus</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio studio</p>
            <h1 id="hero-title">
              I build practical web platforms, automation tools, and learning systems.
            </h1>
            <p className="hero-text">
              A focused collection of projects built around useful products, clean workflows, and
              real-world implementation.
            </p>
            <a className="button" href="#work">
              View work
            </a>
          </div>
          <aside className="hero-panel" aria-label="Portfolio snapshot">
            <span className="panel-label">Current focus</span>
            <strong>Web platforms</strong>
            <span>LMS setup, site builds, dashboards, and automation systems.</span>
          </aside>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Featured work</p>
            <h2 id="work-title">Projects</h2>
          </div>

          <article className="project-card">
            <div className="project-content">
              <p className="project-type">Learning platform</p>
              <h3>AralForex</h3>
              <p>
                A WordPress-based learning platform I built for Filipino forex beginners, using
                TutorLMS to organize Taglish video lessons, course modules, student access, and
                learning resources in one place.
              </p>

              <div className="project-details">
                <dl>
                  <div>
                    <dt>Role</dt>
                    <dd>Founder, site owner, and full site builder</dd>
                  </div>
                  <div>
                    <dt>Tech</dt>
                    <dd>WordPress, TutorLMS, Google OAuth login</dd>
                  </div>
                </dl>
                <a
                  className="project-link"
                  href="https://aralforex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit aralforex.com
                </a>
              </div>
            </div>

            <div className="project-showcase" aria-label="AralForex screenshots">
              <div className="carousel-frame">
                <img src={currentSlide.image} alt={currentSlide.alt} />
              </div>

              <div className="carousel-controls">
                <button type="button" onClick={showPreviousSlide} aria-label="Previous screenshot">
                  Prev
                </button>
                <p>{currentSlide.title}</p>
                <button type="button" onClick={showNextSlide} aria-label="Next screenshot">
                  Next
                </button>
              </div>

              <div className="carousel-dots" aria-label="Choose screenshot">
                {aralforexSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={index === activeSlide ? "active" : ""}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show ${slide.title}`}
                    aria-pressed={index === activeSlide}
                  />
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="section split-section" id="focus" aria-labelledby="focus-title">
          <div>
            <p className="eyebrow">Focus</p>
            <h2 id="focus-title">Built for practical use</h2>
          </div>
          <p>
            This portfolio will grow as more projects are added, with emphasis on the build
            details, tools used, and the practical problem each project solves.
          </p>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Contact details available on request.</h2>
        </section>
      </main>
    </>
  );
}

export default App;
