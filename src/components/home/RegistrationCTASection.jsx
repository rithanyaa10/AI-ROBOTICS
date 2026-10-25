import { GOOGLE_FORM_URL } from '../../data/navigation.js';
import SectionTitle from '../common/SectionTitle.jsx';
import Icon from '../common/Icon.jsx';
import './RegistrationCTASection.css';

export default function RegistrationCTASection() {
  const handleRegisterClick = (e) => {
    // If handled via JavaScript / React event handler, ensure it opens Google Form in a new tab
    if (!e || e.defaultPrevented) return;
  };

  const registrationCategories = [
    {
      title: 'Industry Delegates & Leaders',
      desc: 'Access all keynote sessions, technology tracks, B2B networking zones, and exhibition halls.',
      badge: 'DELEGATE PASS',
    },
    {
      title: 'Students & Academic Scholars',
      desc: 'Special participant passes for university engineering students, faculties, and research scholars.',
      badge: 'STUDENT / SCHOLAR',
    },
    {
      title: 'Exhibitors & Sponsors',
      desc: 'Showcase your hardware, automated work-cells, and AI solutions to high-intent buyers.',
      badge: 'EXHIBITOR BOOTH',
    },
    {
      title: 'Workshop & Masterclass Attendees',
      desc: 'Hands-on practical training certificates, live demonstrations, and competition entry.',
      badge: 'WORKSHOP & ARENA',
    },
  ];

  return (
    <section className="registration-cta-section" id="register">
      <div className="section-container">
        <div className="registration-cta-wrapper">
          <div className="cta-glow-backdrop" aria-hidden="true" />
          
          <SectionTitle
            badge="OFFICIAL REGISTRATION"
            title="Register for AI &amp; Robotics Conclave &amp; Expo 2027"
            subtitle="Join global industry pioneers, roboticists, enterprise leaders, and student innovators on 5 &amp; 6 February 2027 at CODISSIA, Coimbatore."
          />

          {/* Official Google Form Notice Card */}
          <div className="registration-notice-card">
            <div className="notice-badge-row">
              <span className="notice-pulse-dot" aria-hidden="true" />
              <span className="notice-pill-label">OFFICIAL REGISTRATION PORTAL</span>
            </div>
            <p className="registration-official-message">
              Complete your registration using our official Google Form.
            </p>
            <p className="registration-subnote">
              Please submit your registration details through our official Google Form to secure your delegate pass, workshop seat, or exhibition enquiry.
            </p>
          </div>

          {/* Prominent Action Buttons */}
          <div className="cta-action-buttons">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-register-trigger"
              onClick={handleRegisterClick}
              aria-label="Register Now on Official Google Form"
            >
              <span>Register Now</span>
              <Icon name="arrowRight" size={18} />
            </a>
            <a
              href="#about"
              className="btn-learn-more"
            >
              Explore Conclave Details
            </a>
          </div>

          {/* Registration Categories Grid */}
          <div className="reg-categories-grid">
            {registrationCategories.map((cat, idx) => (
              <div key={idx} className="reg-category-card">
                <div className="reg-card-top">
                  <span className="reg-card-badge">{cat.badge}</span>
                  <div className="reg-check-icon">
                    <Icon name="check" size={14} />
                  </div>
                </div>
                <h4 className="reg-category-title">{cat.title}</h4>
                <p className="reg-category-desc">{cat.desc}</p>
              </div>
            ))}
          </div>

          {/* Features Strip */}
          <div className="cta-features-strip">
            <div className="cta-feat-item">
              <Icon name="check" size={16} />
              <span>Official Delegate Badges</span>
            </div>
            <div className="cta-feat-item">
              <Icon name="check" size={16} />
              <span>Direct Entry to CODISSIA Complex</span>
            </div>
            <div className="cta-feat-item">
              <Icon name="check" size={16} />
              <span>Workshops &amp; Masterclass Access</span>
            </div>
            <div className="cta-feat-item">
              <Icon name="check" size={16} />
              <span>Certificate of Participation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
