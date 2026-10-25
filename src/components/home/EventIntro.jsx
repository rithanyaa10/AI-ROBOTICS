import Link from '../../router/Link.jsx';
import { GOOGLE_FORM_URL } from '../../data/navigation.js';
import './EventIntro.css';

export default function EventIntro() {
  return (
    <section className="event-intro-section" id="introduction">
      <div className="section-container">
        <div className="intro-card-wrapper">
          <div className="intro-meta-bar">
            <span className="intro-badge">PREMIER INTERNATIONAL TECHNOLOGY EVENT</span>
            <div className="intro-schedule-tag">
              <span className="schedule-calendar-icon" aria-hidden="true">📅</span>
              5 &amp; 6 February 2027 • CODISSIA, Coimbatore, India
            </div>
          </div>

          <div className="intro-header">
            <h1 className="intro-main-title">
              AI &amp; ROBOTICS <span className="gold-text">INTERNATIONAL CONCLAVE &amp; EXPO 2027</span>
            </h1>
            <p className="intro-tagline">&ldquo;WHERE INTELLIGENCE MEETS INNOVATION.&rdquo;</p>
            <div className="intro-motto-badge">IMAGINE • INNOVATE • BUILD THE FUTURE</div>
          </div>

          <div className="intro-body-text">
            <p>
              The <strong>AI &amp; Robotics International Conclave &amp; Expo 2027</strong> convenes global technology leaders, visionary researchers, forward-looking industrialists, emerging startups, and aspiring student innovators at the prestigious CODISSIA Trade Fair Complex in Coimbatore, Tamil Nadu.
            </p>
            <p>
              Engineered as an expansive collaborative bridge across artificial intelligence, autonomous robotics, intelligent control, and industrial automation, this two-day international conclave catalyzes meaningful convergence between academic research frontiers and scalable industrial applications.
            </p>
          </div>

          <div className="intro-stakeholders-strip">
            <span className="stakeholders-label">Convening Ecosystem Stakeholders:</span>
            <div className="stakeholders-tags">
              <span className="stakeholder-tag">Industry Enterprises</span>
              <span className="stakeholder-tag">Technology Startups</span>
              <span className="stakeholder-tag">Academic Researchers</span>
              <span className="stakeholder-tag">Engineering Students</span>
              <span className="stakeholder-tag">Automation Practitioners</span>
              <span className="stakeholder-tag">Institutional Leaders</span>
            </div>
          </div>

          <div className="intro-actions-row">
            <Link href="/about" className="btn-intro-outline">
              Learn More About Conclave &rarr;
            </Link>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-intro-gold"
            >
              Register Now &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
