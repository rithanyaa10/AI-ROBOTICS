import Link from '../../router/Link.jsx';
import { navItems } from '../../data/navigation.js';
import { contactInfo } from '../../data/contactInfo.js';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Col 1: Brand & Tagline */}
            <div className="footer-col brand-col">
              <Link href="/" className="footer-brand">
                <img
                  src="/assets/logos/Screenshot 2026-09-22 142243.png"
                  alt="AI & Robotics Official Emblem"
                  className="footer-emblem"
                  width="44"
                  height="50"
                />
                <div className="footer-brand-text">
                  <span className="footer-title">AI &amp; ROBOTICS</span>
                  <span className="footer-subtitle">INTERNATIONAL CONCLAVE &amp; EXPO 2027</span>
                </div>
              </Link>
              <p className="footer-motto">WHERE INTELLIGENCE MEETS INNOVATION.</p>
              <p className="footer-submotto">IMAGINE • INNOVATE • BUILD THE FUTURE</p>

              <div className="footer-organizer-box">
                <span className="organizer-label">Organized By</span>
                <p className="organizer-name">{contactInfo.organizer.name}</p>
                <span className="organizer-tag">{contactInfo.organizer.motto}</span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="footer-col">
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-links-list">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link href={item.path} className="footer-nav-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Event Information */}
            <div className="footer-col">
              <h3 className="footer-col-title">Event Schedule</h3>
              <div className="footer-info-block">
                <div className="info-item">
                  <span className="info-title">Dates</span>
                  <p className="info-detail">5 &amp; 6 February 2027</p>
                </div>
                <div className="info-item">
                  <span className="info-title">Hours</span>
                  <p className="info-detail">10:00 AM – 08:00 PM IST</p>
                </div>
                <div className="info-item">
                  <span className="info-title">Venue</span>
                  <p className="info-detail">CODISSIA Trade Fair Complex</p>
                  <p className="info-subdetail">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Col 4: Contact & Support */}
            <div className="footer-col">
              <h3 className="footer-col-title">Contact Enquiries</h3>
              <div className="footer-contact-list">
                {contactInfo.phones.map((phone, idx) => (
                  <div key={idx} className="footer-phone-entry">
                    <span className="phone-role">{phone.label}:</span>
                    <a href={`tel:${phone.tel}`} className="phone-number">
                      {phone.number}
                    </a>
                  </div>
                ))}
                <div className="footer-social-wrapper">
                  <span className="social-label">Follow Event Announcements:</span>
                  <div className="social-placeholder-row">
                    {contactInfo.socials.map((s, idx) => (
                      <span key={idx} className="social-tag" title={s.name}>
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container bottom-flex">
          <p className="copyright-text">
            &copy; {currentYear} AI &amp; Robotics International Conclave &amp; Expo. Organized by {contactInfo.organizer.name}. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <span className="proto-notice">Frontend Prototype v1.0 • Official Conclave Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
