import { navItems } from '../../data/navigation.js';
import { contactInfo } from '../../data/contactInfo.js';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-col footer-brand-col">
              <a
                href="#home"
                className="footer-brand"
                onClick={(e) => scrollToSection(e, '#home')}
              >
                <img
                  src="/assets/logos/Screenshot 2026-09-22 142243.png"
                  alt="AI & Robotics Official Emblem"
                  className="footer-emblem"
                  width="40"
                  height="46"
                />
                <div className="footer-brand-text">
                  <span className="footer-title">AI &amp; ROBOTICS</span>
                  <span className="footer-subtitle">INTERNATIONAL CONCLAVE &amp; EXPO 2027</span>
                </div>
              </a>
              <p className="footer-motto">WHERE INTELLIGENCE MEETS INNOVATION.</p>
              <p className="footer-submotto">IMAGINE &bull; INNOVATE &bull; BUILD THE FUTURE</p>

              <div className="footer-organizer">
                <span className="footer-org-label">Organized By</span>
                <p className="footer-org-name">{contactInfo.organizer.name}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-links">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="footer-link"
                      onClick={(e) => scrollToSection(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Info */}
            <div className="footer-col">
              <h3 className="footer-col-title">Event Schedule</h3>
              <div className="footer-info-list">
                <div className="footer-info-item">
                  <span className="footer-info-label">Dates</span>
                  <p className="footer-info-value">5 &amp; 6 February 2027</p>
                </div>
                <div className="footer-info-item">
                  <span className="footer-info-label">Hours</span>
                  <p className="footer-info-value">10:00 AM – 08:00 PM IST</p>
                </div>
                <div className="footer-info-item">
                  <span className="footer-info-label">Venue</span>
                  <p className="footer-info-value">CODISSIA Trade Fair Complex</p>
                  <p className="footer-info-sub">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h3 className="footer-col-title">Contact</h3>
              <div className="footer-contact-list">
                {contactInfo.phones.map((phone, idx) => (
                  <div key={idx} className="footer-phone">
                    <span className="footer-phone-label">{phone.label}</span>
                    <a href={`tel:${phone.tel}`} className="footer-phone-number">{phone.number}</a>
                  </div>
                ))}
              </div>

              <div className="footer-official-site">
                <span className="footer-info-label">Official Website</span>
                <a href="https://expoverse.pro" target="_blank" rel="noopener noreferrer" className="footer-website-link">
                  expoverse.pro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <p className="footer-copyright">
            &copy; {currentYear} AI &amp; Robotics International Conclave &amp; Expo. Organized by {contactInfo.organizer.name}. All rights reserved.
          </p>
          <span className="footer-version">Frontend Prototype v2.0</span>
        </div>
      </div>
    </footer>
  );
}
