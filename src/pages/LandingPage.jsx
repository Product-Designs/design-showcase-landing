import React, { useState } from 'react';
import '../styles/LandingPage.css';

/**
 * LandingPage - Product design showcase landing page
 *
 * Features an editorial-style layout with asymmetric hero section,
 * featured work showcase, and process overview. Fully accessible
 * with keyboard navigation and ARIA support.
 */
function LandingPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Urban Transit App',
      category: 'mobile',
      description: 'Real-time navigation for city commuters',
      image: '/assets/project-transit.jpg',
      year: '2025'
    },
    {
      id: 2,
      title: 'Financial Dashboard',
      category: 'web',
      description: 'Enterprise analytics platform',
      image: '/assets/project-finance.jpg',
      year: '2024'
    },
    {
      id: 3,
      title: 'Health Tracker',
      category: 'mobile',
      description: 'Personal wellness monitoring',
      image: '/assets/project-health.jpg',
      year: '2024'
    },
    {
      id: 4,
      title: 'Design System',
      category: 'system',
      description: 'Component library for enterprise software',
      image: '/assets/project-system.jpg',
      year: '2025'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-container">
          <a href="/" className="nav-logo" aria-label="Home">
            <span className="logo-text">Studio</span>
          </a>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="nav-cta">Let's talk</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-label">Product Design Studio</p>
            <h1 className="hero-title">
              We craft digital
              <span className="hero-title-highlight">experiences</span>
              that solve real problems
            </h1>
            <p className="hero-description">
              From research to launch, we partner with ambitious teams
              to design products people actually want to use. No vanity
              metrics, just thoughtful solutions.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Products launched</span>
              </div>
              <div className="stat">
                <span className="stat-number">12</span>
                <span className="stat-label">Years experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client satisfaction</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-stack">
              <div className="hero-image-card hero-image-card-1" aria-hidden="true"></div>
              <div className="hero-image-card hero-image-card-2" aria-hidden="true"></div>
              <div className="hero-image-card hero-image-card-3" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Work */}
      <section id="work" className="work-section">
        <div className="work-container">
          <div className="section-header">
            <h2 className="section-title">Selected Work</h2>
            <div
              className="work-filters"
              role="group"
              aria-label="Filter projects by category"
            >
              <button
                className={`filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
                onClick={() => setActiveFilter('all')}
                aria-pressed={activeFilter === 'all'}
              >
                All
              </button>
              <button
                className={`filter-btn ${activeFilter === 'mobile' ? 'is-active' : ''}`}
                onClick={() => setActiveFilter('mobile')}
                aria-pressed={activeFilter === 'mobile'}
              >
                Mobile
              </button>
              <button
                className={`filter-btn ${activeFilter === 'web' ? 'is-active' : ''}`}
                onClick={() => setActiveFilter('web')}
                aria-pressed={activeFilter === 'web'}
              >
                Web
              </button>
              <button
                className={`filter-btn ${activeFilter === 'system' ? 'is-active' : ''}`}
                onClick={() => setActiveFilter('system')}
                aria-pressed={activeFilter === 'system'}
              >
                Systems
              </button>
            </div>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <a href={`/projects/${project.id}`} className="project-link">
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={`${project.title} interface preview`}
                      loading="lazy"
                    />
                    <span className="project-year" aria-hidden="true">
                      {project.year}
                    </span>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <span className="project-cta">
                      View case study
                      <svg
                        className="project-arrow"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8h10m0 0L8 3m5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process-section">
        <div className="process-container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <span className="process-number" aria-hidden="true">01</span>
              <h3 className="process-step-title">Discover</h3>
              <p className="process-step-description">
                We start by understanding your users, business goals, and
                technical constraints through research and stakeholder interviews.
              </p>
            </div>
            <div className="process-step">
              <span className="process-number" aria-hidden="true">02</span>
              <h3 className="process-step-title">Define</h3>
              <p className="process-step-description">
                Synthesize insights into clear problem statements and design
                principles that guide all decisions moving forward.
              </p>
            </div>
            <div className="process-step">
              <span className="process-number" aria-hidden="true">03</span>
              <h3 className="process-step-title">Design</h3>
              <p className="process-step-description">
                Create and validate solutions through rapid prototyping,
                user testing, and iterative refinement.
              </p>
            </div>
            <div className="process-step">
              <span className="process-number" aria-hidden="true">04</span>
              <h3 className="process-step-title">Deliver</h3>
              <p className="process-step-description">
                Ship production-ready designs with detailed specs, design
                systems, and ongoing support for your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to build something great?</h2>
          <p className="cta-description">
            Let's talk about your project and explore how we can help.
          </p>
          <a href="mailto:hello@studio.com" className="cta-button">
            Start a conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <span className="footer-logo">Studio</span>
              <p className="footer-tagline">
                Design studio focused on crafting exceptional digital products.
              </p>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Connect</h4>
              <ul className="footer-links">
                <li><a href="https://twitter.com/studio">Twitter</a></li>
                <li><a href="https://dribbble.com/studio">Dribbble</a></li>
                <li><a href="https://linkedin.com/company/studio">LinkedIn</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-links">
                <li><a href="mailto:hello@studio.com">hello@studio.com</a></li>
                <li><a href="tel:+15555551234">+1 (555) 555-1234</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
