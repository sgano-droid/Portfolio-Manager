import { useState } from "react";
import automatedReelsVideo from "../assets/automated-fb-reels/automated-reels.mp4";
import facebookSkillPostImage from "../assets/codex-skill-fb-post-generator/fb-image.png";
import highImpactNewsFbSample from "../assets/high-impact-news/fb-sample.png";
import highImpactNewsWorkflow from "../assets/high-impact-news/n8n-workflow.png";
import highImpactNewsTelegramSample from "../assets/high-impact-news/tg-sample.png";
import discordConfigDashboard from "../assets/dicord-generator/config-dashboard.png";
import discordLoadingScreen from "../assets/dicord-generator/loading.png";
import discordSampleChannel from "../assets/dicord-generator/sample-dc.png";
import fbPageImage from "../assets/automated-fb-reels/fb-page.png";
import n8nWorkflowImage from "../assets/automated-fb-reels/n8n-workflow.png";
import aralforexHome from "../assets/aralforex/aralforex-home.png";
import aralforexCourse from "../assets/aralforex/aralforex-course.png";
import aralforexDashboard from "../assets/aralforex/aralforex-dashboard.png";

const automatedReelSlides = [
  {
    title: "Sample Facebook reel",
    type: "video",
    media: automatedReelsVideo,
    alt: "Sample automated Facebook reel.",
  },
  {
    title: "Automation workflow",
    type: "image",
    media: n8nWorkflowImage,
    alt: "Automation workflow canvas for the Facebook reel generator.",
  },
  {
    title: "Published Facebook page",
    type: "image",
    media: fbPageImage,
    alt: "AralForex Facebook page showing published reel content.",
  },
];

const facebookSkillSlides = [
  {
    title: "Skill architecture",
    type: "architecture",
  },
  {
    title: "Reusable Codex skill",
    type: "proof",
  },
  {
    title: "Generated Facebook post",
    type: "image",
    media: facebookSkillPostImage,
    alt: "Sample Facebook post generated through the Codex Facebook Page Marketing skill.",
  },
];

const highImpactNewsSlides = [
  {
    title: "Telegram news alert",
    image: highImpactNewsTelegramSample,
    alt: "Telegram post sample for a high impact news alert.",
  },
  {
    title: "Facebook news post",
    image: highImpactNewsFbSample,
    alt: "Facebook post sample for a high impact news event.",
  },
  {
    title: "n8n automation workflow",
    image: highImpactNewsWorkflow,
    alt: "n8n workflow for high impact news posting automation.",
  },
];

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

const discordGeneratorSlides = [
  {
    title: "Configuration dashboard",
    image: discordConfigDashboard,
    alt: "Discord generator configuration dashboard for messages, rules, and authentication.",
  },
  {
    title: "Channel generation loading state",
    image: discordLoadingScreen,
    alt: "Discord channel generator loading screen while creating server channels.",
  },
  {
    title: "Generated Discord channel",
    image: discordSampleChannel,
    alt: "Sample Discord server channel created by the auto generator.",
  },
];

function App() {
  const [activeReelSlide, setActiveReelSlide] = useState(0);
  const [activeSkillSlide, setActiveSkillSlide] = useState(0);
  const [activeHighImpactNewsSlide, setActiveHighImpactNewsSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDiscordGeneratorSlide, setActiveDiscordGeneratorSlide] = useState(0);
  const currentReelSlide = automatedReelSlides[activeReelSlide];
  const currentSkillSlide = facebookSkillSlides[activeSkillSlide];
  const currentHighImpactNewsSlide = highImpactNewsSlides[activeHighImpactNewsSlide];
  const currentSlide = aralforexSlides[activeSlide];
  const currentDiscordGeneratorSlide = discordGeneratorSlides[activeDiscordGeneratorSlide];

  const showPreviousReelSlide = () => {
    setActiveReelSlide((current) =>
      current === 0 ? automatedReelSlides.length - 1 : current - 1
    );
  };

  const showNextReelSlide = () => {
    setActiveReelSlide((current) =>
      current === automatedReelSlides.length - 1 ? 0 : current + 1
    );
  };

  const showPreviousSkillSlide = () => {
    setActiveSkillSlide((current) =>
      current === 0 ? facebookSkillSlides.length - 1 : current - 1
    );
  };

  const showNextSkillSlide = () => {
    setActiveSkillSlide((current) =>
      current === facebookSkillSlides.length - 1 ? 0 : current + 1
    );
  };

  const showPreviousHighImpactNewsSlide = () => {
    setActiveHighImpactNewsSlide((current) =>
      current === 0 ? highImpactNewsSlides.length - 1 : current - 1
    );
  };

  const showNextHighImpactNewsSlide = () => {
    setActiveHighImpactNewsSlide((current) =>
      current === highImpactNewsSlides.length - 1 ? 0 : current + 1
    );
  };

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

  const showPreviousDiscordGeneratorSlide = () => {
    setActiveDiscordGeneratorSlide((current) =>
      current === 0 ? discordGeneratorSlides.length - 1 : current - 1
    );
  };

  const showNextDiscordGeneratorSlide = () => {
    setActiveDiscordGeneratorSlide((current) =>
      current === discordGeneratorSlides.length - 1 ? 0 : current + 1
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
            <div className="nav-dropdown">
              <a href="#work">Projects</a>
              <div className="nav-dropdown-menu" aria-label="Project links">
                <a href="#automated-facebook-reel-generator">Facebook Reel Generator</a>
                <a href="#facebook-page-marketing-automation">Facebook Marketing Skill</a>
                <a href="#high-impact-news-automation">High Impact News</a>
                <a href="#aralforex-project">AralForex</a>
                <a href="#discord-channel-auto-generator">Discord Channel Generator</a>
              </div>
            </div>
            <a href="#focus">Focus</a>
            <a href="#tech-skills">Tech Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">AI automation portfolio</p>
            <h1 id="hero-title">
              I build AI-powered automation systems for content, marketing, and publishing.
            </h1>
            <p className="hero-text">
              A focused collection of workflows that turn APIs, AI tools, and owned media into
              practical business output.
            </p>
            <a className="button" href="#work">
              View work
            </a>
          </div>
          <aside className="hero-panel" aria-label="Portfolio snapshot">
            <span className="panel-label">Current focus</span>
            <strong>AI publishing workflows</strong>
            <span>OpenAI content pipelines, social posting automation, approval gates, and API-driven delivery.</span>
          </aside>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Featured systems</p>
            <h2 id="work-title">AI Automation Work</h2>
          </div>

          <article className="project-card project-card-featured" id="automated-facebook-reel-generator">
            <div className="project-content">
              <p className="project-type">Content automation</p>
              <h3>Automated Facebook Reel Generator</h3>
              <p>
                An automated workflow that gathers market news from RSS feeds, turns it into
                short-form Facebook reel content with OpenAI chat and text-to-speech, sends text
                post versions to Telegram and Discord, then publishes through the Facebook Graph
                API.
              </p>

              <div className="project-details">
                <dl>
                  <div>
                    <dt>Role</dt>
                    <dd>Workflow builder and automation owner</dd>
                  </div>
                  <div>
                    <dt>Tech</dt>
                    <dd>OpenAI API, RSS feeds, Telegram API, Discord API, Facebook Graph API</dd>
                  </div>
                </dl>
                <a
                  className="project-link"
                  href="https://www.facebook.com/aralforex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Facebook page
                </a>
              </div>
            </div>

            <div className="project-showcase" aria-label="Automated reel workflow media">
              <div className="carousel-frame reel-carousel-frame">
                {currentReelSlide.type === "video" ? (
                  <video
                    src={currentReelSlide.media}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={currentReelSlide.alt}
                  />
                ) : (
                  <img src={currentReelSlide.media} alt={currentReelSlide.alt} />
                )}
              </div>

              <div className="carousel-controls">
                <button type="button" onClick={showPreviousReelSlide} aria-label="Previous reel media">
                  Prev
                </button>
                <p>{currentReelSlide.title}</p>
                <button type="button" onClick={showNextReelSlide} aria-label="Next reel media">
                  Next
                </button>
              </div>

              <div className="carousel-dots" aria-label="Choose reel media">
                {automatedReelSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={index === activeReelSlide ? "active" : ""}
                    onClick={() => setActiveReelSlide(index)}
                    aria-label={`Show ${slide.title}`}
                    aria-pressed={index === activeReelSlide}
                  />
                ))}
              </div>
            </div>
          </article>

          <article className="project-card project-card-ai" id="facebook-page-marketing-automation">
            <div className="project-content">
              <p className="project-type">AI workflow skill</p>
              <h3>AI Coding Skill: Facebook Page Marketing Automation</h3>
              <p>
                A reusable AI coding assistant workflow I created for Codex and Claude Code to
                turn Facebook Page posting into a repeatable process: draft content, apply brand
                profiles, approve media, dry-run the payload, then publish through the Meta Graph
                API only after explicit confirmation.
              </p>

              <div className="project-details">
                <dl>
                  <div>
                    <dt>Role</dt>
                    <dd>AI workflow designer and skill builder</dd>
                  </div>
                  <div>
                    <dt>Tech</dt>
                    <dd>Codex, Claude Code, OpenAI-assisted drafting, Python automation, Meta Graph API</dd>
                  </div>
                </dl>
                <a
                  className="project-link"
                  href="https://www.facebook.com/aralforex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See page output
                </a>
              </div>
            </div>

            <div className="project-showcase" aria-label="Codex Facebook marketing skill media">
              <div className="carousel-frame skill-carousel-frame">
                {currentSkillSlide.type === "image" ? (
                  <img src={currentSkillSlide.media} alt={currentSkillSlide.alt} />
                ) : currentSkillSlide.type === "architecture" ? (
                  <div className="skill-diagram" aria-label="Codex skill publishing architecture">
                    <span>Codex</span>
                    <span>Facebook skill</span>
                    <span>Brand profile</span>
                    <span>Draft and media approval</span>
                    <span>Dry-run payload</span>
                    <span>Graph API publish</span>
                  </div>
                ) : (
                  <div className="skill-proof">
                    <p className="skill-proof-label">Reusable skill</p>
                    <h4>facebook-page-marketing</h4>
                    <p>
                      Draft, review, dry-run, and publish personalized Facebook Page feed, image,
                      and reel posts with approval gates and secret-safe environment checks.
                    </p>
                    <ul>
                      <li>Brand profile selection</li>
                      <li>Media approval before use</li>
                      <li>Dry-run before live posting</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="carousel-controls">
                <button type="button" onClick={showPreviousSkillSlide} aria-label="Previous skill media">
                  Prev
                </button>
                <p>{currentSkillSlide.title}</p>
                <button type="button" onClick={showNextSkillSlide} aria-label="Next skill media">
                  Next
                </button>
              </div>

              <div className="carousel-dots" aria-label="Choose skill media">
                {facebookSkillSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={index === activeSkillSlide ? "active" : ""}
                    onClick={() => setActiveSkillSlide(index)}
                    aria-label={`Show ${slide.title}`}
                    aria-pressed={index === activeSkillSlide}
                  />
                ))}
              </div>
            </div>
          </article>

          <article className="project-card project-card-news" id="high-impact-news-automation">
            <div className="project-content">
              <p className="project-type">News automation</p>
              <h3>High Impact News Automation</h3>
              <p>
                An n8n workflow that tracks high impact market news, such as AUD CPI releases at
                9:30 AM Manila time, then turns the alert into ready-to-publish updates for
                Telegram and Facebook.
              </p>

              <div className="project-details">
                <dl>
                  <div>
                    <dt>Role</dt>
                    <dd>Automation workflow builder and publisher</dd>
                  </div>
                  <div>
                    <dt>Tech</dt>
                    <dd>n8n, market news feeds, Telegram API, Facebook Graph API</dd>
                  </div>
                </dl>
                <a
                  className="project-link"
                  href="https://www.facebook.com/aralforex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Facebook page
                </a>
              </div>
            </div>

            <div className="project-showcase" aria-label="High impact news automation media">
              <div className="carousel-frame">
                <img src={currentHighImpactNewsSlide.image} alt={currentHighImpactNewsSlide.alt} />
              </div>

              <div className="carousel-controls">
                <button
                  type="button"
                  onClick={showPreviousHighImpactNewsSlide}
                  aria-label="Previous high impact news media"
                >
                  Prev
                </button>
                <p>{currentHighImpactNewsSlide.title}</p>
                <button
                  type="button"
                  onClick={showNextHighImpactNewsSlide}
                  aria-label="Next high impact news media"
                >
                  Next
                </button>
              </div>

              <div className="carousel-dots" aria-label="Choose high impact news media">
                {highImpactNewsSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={index === activeHighImpactNewsSlide ? "active" : ""}
                    onClick={() => setActiveHighImpactNewsSlide(index)}
                    aria-label={`Show ${slide.title}`}
                    aria-pressed={index === activeHighImpactNewsSlide}
                  />
                ))}
              </div>
            </div>
          </article>

          <article className="project-card" id="aralforex-project">
            <div className="project-content">
              <p className="project-type">Owned media platform</p>
              <h3>AralForex</h3>
              <p>
                The owned brand and learning platform behind these automation experiments, built
                for Filipino forex beginners with TutorLMS lessons, student access, and published
                content channels in one place.
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

          <article className="project-card" id="discord-channel-auto-generator">
            <div className="project-content">
              <p className="project-type">Discord automation</p>
              <h3>Discord Channel Auto Generator</h3>
              <p>
                A Python FastAPI tool that connects to a Discord server, generates channels from
                templates or from scratch, and lets admins configure automated messages, rules, and auth
                for repeatable community setup.
              </p>

              <div className="project-details">
                <dl>
                  <div>
                    <dt>Role</dt>
                    <dd>Backend automation builder and Discord integration owner</dd>
                  </div>
                  <div>
                    <dt>Tech</dt>
                    <dd>Python, FastAPI, Discord API</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="project-showcase" aria-label="Discord channel generator media">
              <div className="carousel-frame discord-carousel-frame">
                <img src={currentDiscordGeneratorSlide.image} alt={currentDiscordGeneratorSlide.alt} />
              </div>

              <div className="carousel-controls">
                <button
                  type="button"
                  onClick={showPreviousDiscordGeneratorSlide}
                  aria-label="Previous Discord generator media"
                >
                  Prev
                </button>
                <p>{currentDiscordGeneratorSlide.title}</p>
                <button
                  type="button"
                  onClick={showNextDiscordGeneratorSlide}
                  aria-label="Next Discord generator media"
                >
                  Next
                </button>
              </div>

              <div className="carousel-dots" aria-label="Choose Discord generator media">
                {discordGeneratorSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={index === activeDiscordGeneratorSlide ? "active" : ""}
                    onClick={() => setActiveDiscordGeneratorSlide(index)}
                    aria-label={`Show ${slide.title}`}
                    aria-pressed={index === activeDiscordGeneratorSlide}
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
            This portfolio highlights AI-assisted systems that connect content generation,
            approval steps, API integrations, and publishing workflows into practical output.
          </p>
        </section>

        <section className="section skills-section" id="tech-skills" aria-labelledby="tech-skills-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 id="tech-skills-title">Tech Skills</h2>
            </div>
          </div>

          <div className="skills-grid">
            <section className="skill-group" aria-labelledby="skills-ai-data">
              <h3 id="skills-ai-data">AI / Data</h3>
              <ul className="skill-list">
                <li>Python</li>
                <li>pandas</li>
                <li>numpy</li>
                <li>scikit-learn</li>
                <li>Machine Learning</li>
                <li>NLP</li>
                <li>Text Classification</li>
              </ul>
            </section>

            <section className="skill-group" aria-labelledby="skills-backend-deployment">
              <h3 id="skills-backend-deployment">Backend / Deployment</h3>
              <ul className="skill-list">
                <li>FastAPI</li>
                <li>Django</li>
                <li>Docker</li>
                <li>AWS ECR</li>
                <li>AWS ECS</li>
                <li>GitHub Actions</li>
                <li>CI/CD</li>
              </ul>
            </section>

            <section className="skill-group" aria-labelledby="skills-automation-apis">
              <h3 id="skills-automation-apis">Automation / APIs</h3>
              <ul className="skill-list">
                <li>n8n</li>
                <li>Web APIs</li>
                <li>OpenAI API</li>
                <li>Discord API</li>
                <li>Telegram API</li>
                <li>Facebook Graph API</li>
                <li>Meta Graph API</li>
                <li>RSS feeds</li>
              </ul>
            </section>

            <section className="skill-group" aria-labelledby="skills-platform-workflow">
              <h3 id="skills-platform-workflow">Platforms / Workflow</h3>
              <ul className="skill-list">
                <li>Appian Low-Code</li>
                <li>Appian Associate Certification</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Agile / Scrum</li>
                <li>WordPress</li>
                <li>TutorLMS</li>
                <li>Codex</li>
                <li>Claude Code</li>
              </ul>
            </section>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">
            Email me at{" "}
            <a href="mailto:sallyjoygano@yahoo.com">sallyjoygano@yahoo.com</a>.
          </h2>
        </section>
      </main>
    </>
  );
}

export default App;
