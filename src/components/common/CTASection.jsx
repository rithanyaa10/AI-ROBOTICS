import './CTASection.css';

export default function CTASection({
  title = 'Be Part of the Future',
  subtitle = 'Registration details and exhibitor opportunities will be announced soon. Secure your presence at the premier international AI & Robotics conclave.',
  primaryBtnText = 'Register Your Interest',
  primaryHref = '#register',
  secondaryBtnText = 'Become an Exhibitor',
  secondaryHref = '#register',
}) {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta-banner-section">
      <div className="section-container">
        <div className="cta-content-box">
          <span className="cta-badge">EXPO 2027 REGISTRATION</span>
          <h2 className="cta-heading">{title}</h2>
          <p className="cta-subheading">{subtitle}</p>
          <div className="cta-buttons-group">
            <a href={primaryHref} className="cta-btn-primary" onClick={(e) => handleClick(e, primaryHref)}>
              {primaryBtnText}
            </a>
            <a href={secondaryHref} className="cta-btn-secondary" onClick={(e) => handleClick(e, secondaryHref)}>
              {secondaryBtnText}
            </a>
          </div>
          <div className="cta-footer-note">
            CODISSIA Trade Fair Complex, Coimbatore &bull; 5 &amp; 6 February 2027
          </div>
        </div>
      </div>
    </section>
  );
}
