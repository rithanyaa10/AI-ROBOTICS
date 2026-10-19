import { contactInfo } from '../../data/contactInfo.js';
import SectionTitle from '../common/SectionTitle.jsx';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <SectionTitle
          badge="CONTACT US"
          title="Get in Touch"
          subtitle="For event inquiries, exhibitor participation, sponsorship opportunities, and general information."
        />

        <div className="contact-grid">
          {/* Phone Contacts */}
          <div className="contact-card">
            <div className="contact-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3 className="contact-card-title">Phone Enquiries</h3>
            {contactInfo.phones.map((phone, idx) => (
              <div key={idx} className="contact-phone-entry">
                <span className="contact-phone-label">{phone.label}</span>
                <a href={`tel:${phone.tel}`} className="contact-phone-number">{phone.number}</a>
              </div>
            ))}
          </div>

          {/* Venue Contact */}
          <div className="contact-card">
            <div className="contact-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 className="contact-card-title">Event Venue</h3>
            <p className="contact-venue-name">{contactInfo.venue.name}</p>
            <p className="contact-venue-address">{contactInfo.venue.city}, {contactInfo.venue.state}, {contactInfo.venue.country}</p>
          </div>

          {/* Organizer */}
          <div className="contact-card">
            <div className="contact-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3 className="contact-card-title">Organizer</h3>
            <p className="contact-org-name">{contactInfo.organizer.name}</p>
            <p className="contact-org-motto">{contactInfo.organizer.motto}</p>
          </div>

          {/* Official Website */}
          <div className="contact-card">
            <div className="contact-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3 className="contact-card-title">Official Website</h3>
            <a href="https://expoverse.pro" target="_blank" rel="noopener noreferrer" className="contact-website-link">
              expoverse.pro
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <p className="contact-website-note">Visit for official updates and announcements</p>
          </div>
        </div>
      </div>
    </section>
  );
}
