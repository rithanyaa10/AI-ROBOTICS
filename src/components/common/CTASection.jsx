import { GOOGLE_FORM_URL } from '../../data/navigation.js';
import Link from '../../router/Link.jsx';
import './CTASection.css';

export default function CTASection({
  title = 'Be Part of the Future',
  subtitle = 'Registration details and exhibitor opportunities are open. Complete your registration using our official Google Form to secure your presence at South India’s premier international AI & Robotics conclave.',
  primaryBtnText = 'REGISTER NOW',
  primaryBtnLink = GOOGLE_FORM_URL,
  secondaryBtnText = 'BECOME AN EXHIBITOR',
  secondaryBtnLink = GOOGLE_FORM_URL,
}) {
  const isPrimaryExternal = primaryBtnLink.startsWith('http');
  const isSecondaryExternal = secondaryBtnLink.startsWith('http');

  return (
    <section className="cta-banner-section">
      <div className="cta-container">
        <div className="cta-content-box">
          <div className="cta-decor-glow" aria-hidden="true" />
          <span className="cta-badge">EXPO 2027 REGISTRATION</span>
          <h2 className="cta-heading">{title}</h2>
          <p className="cta-subheading">{subtitle}</p>
          <div className="cta-buttons-group">
            {isPrimaryExternal ? (
              <a
                href={primaryBtnLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-primary"
              >
                {primaryBtnText}
              </a>
            ) : (
              <Link href={primaryBtnLink} className="btn-cta-primary">
                {primaryBtnText}
              </Link>
            )}
            {isSecondaryExternal ? (
              <a
                href={secondaryBtnLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-secondary"
              >
                {secondaryBtnText}
              </a>
            ) : (
              <Link href={secondaryBtnLink} className="btn-cta-secondary">
                {secondaryBtnText}
              </Link>
            )}
          </div>
          <div className="cta-footer-note">
            CODISSIA Trade Fair Complex, Coimbatore • 5 &amp; 6 February 2027
          </div>
        </div>
      </div>
    </section>
  );
}

