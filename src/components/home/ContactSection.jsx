import { useState } from 'react';
import { contactInfo } from '../../data/contactInfo.js';
import SectionTitle from '../common/SectionTitle.jsx';
import Icon from '../common/Icon.jsx';
import './ContactSection.css';

export default function ContactSection() {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    subject: 'General Conclave Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const subjects = [
    'General Conclave Inquiry',
    'Exhibition Booth Booking',
    'Sponsorship Opportunities',
    'Keynote / Speaker Nomination',
    'Workshops & Competitions Entry',
    'Academic & Student Delegations',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInquiryData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inquiryData.name.trim() || !inquiryData.email.trim() || !inquiryData.message.trim()) {
      setError('Please fill out all required fields.');
      return;
    }
    if (!inquiryData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    // Frontend-only demo: no backend, no localStorage
    setSubmitted(true);
    setError('');
  };

  const handleReset = () => {
    setSubmitted(false);
    setInquiryData({
      name: '',
      email: '',
      subject: 'General Conclave Inquiry',
      message: '',
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <SectionTitle
          badge="GET IN TOUCH"
          title="Contact the Organizing Committee"
          subtitle="Our conclave secretariat is available to assist you with exhibitor bookings, sponsorships, speaker arrangements, and attendee registration."
        />

        <div className="contact-layout-grid">
          {/* Contact Details Column */}
          <div className="contact-info-col">
            <h3 className="contact-col-heading">Direct Official Channels</h3>
            <p className="contact-col-sub">
              Reach out directly to our dedicated event coordinators for prompt assistance.
            </p>

            <div className="contact-cards-list">
              {/* Phone 1 */}
              <div className="contact-method-card">
                <div className="method-icon-frame">
                  <Icon name="phone" size={22} />
                </div>
                <div className="method-body">
                  <span className="method-label">{contactInfo.phones[0].label}</span>
                  <a href={`tel:${contactInfo.phones[0].tel}`} className="method-val-link">
                    {contactInfo.phones[0].number}
                  </a>
                  <span className="method-note">Available Mon – Sat, 9:00 AM – 6:00 PM IST</span>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="contact-method-card">
                <div className="method-icon-frame">
                  <Icon name="phone" size={22} />
                </div>
                <div className="method-body">
                  <span className="method-label">{contactInfo.phones[1].label}</span>
                  <a href={`tel:${contactInfo.phones[1].tel}`} className="method-val-link">
                    {contactInfo.phones[1].number}
                  </a>
                  <span className="method-note">Exhibition &amp; Sponsorship Inquiries</span>
                </div>
              </div>

              {/* Venue */}
              <div className="contact-method-card">
                <div className="method-icon-frame">
                  <Icon name="mapPin" size={22} />
                </div>
                <div className="method-body">
                  <span className="method-label">Convention Venue</span>
                  <strong className="method-val-text">{contactInfo.venue.name}</strong>
                  <p className="method-address">
                    {contactInfo.venue.address}, {contactInfo.venue.city}, {contactInfo.venue.state} - {contactInfo.venue.pincode}, {contactInfo.venue.country}
                  </p>
                </div>
              </div>

              {/* Organizer */}
              <div className="contact-method-card organizer-card-highlight">
                <div className="method-icon-frame icon-gold">
                  <Icon name="building" size={22} />
                </div>
                <div className="method-body">
                  <span className="method-label label-gold">Organizing Enterprise</span>
                  <strong className="method-val-text">{contactInfo.organizer.name}</strong>
                  <span className="organizer-motto-tag">&ldquo;{contactInfo.organizer.motto}&rdquo;</span>
                  <p className="organizer-trust-note">
                    Supported by {contactInfo.organizer.trust} • <em>{contactInfo.organizer.tagline}</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="social-links-block">
              <span className="social-block-label">Follow Official Updates:</span>
              <div className="social-pills-row">
                {contactInfo.socials.map((s, idx) => (
                  <span key={idx} className="social-pill-item">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Message Form Column */}
          <div className="contact-form-col">
            <div className="form-card-container">
              <span className="form-badge">ENQUIRY SECRETARIAT</span>
              <h3 className="form-card-title">Send Us a Direct Message</h3>
              <p className="form-card-sub">
                Submit your inquiry and our event administration team will get back to you.
              </p>

              {!submitted ? (
                <form className="quick-contact-form" onSubmit={handleSubmit} noValidate>
                  {error && <div className="form-alert-error">{error}</div>}

                  <div className="form-field-group">
                    <label className="field-label" htmlFor="contact-name">Your Full Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="e.g. Anand Sundaram"
                      value={inquiryData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="field-label" htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="anand@example.com"
                      value={inquiryData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="field-label" htmlFor="contact-subject">Inquiry Purpose</label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={inquiryData.subject}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {subjects.map((sub, idx) => (
                        <option key={idx} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label className="field-label" htmlFor="contact-message">Message Details *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      placeholder="Please share details regarding your organization, questions, or requirements..."
                      value={inquiryData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    />
                  </div>

                  <div className="form-notice-strip">
                    <Icon name="check" size={14} />
                    <span>Frontend demo mode: Messages are demonstrated directly in-browser.</span>
                  </div>

                  <button type="submit" className="btn-send-message">
                    <span>Send Message (Frontend Demo)</span>
                    <Icon name="arrowRight" size={16} />
                  </button>
                </form>
              ) : (
                <div className="message-success-box">
                  <div className="success-icon-wrap">
                    <Icon name="check" size={28} />
                  </div>
                  <h4 className="success-heading">Message Sent Successfully!</h4>
                  <p className="success-desc">
                    Thank you, <strong>{inquiryData.name}</strong>. Your inquiry regarding <strong>{inquiryData.subject}</strong> has been received by the conclave secretariat.
                  </p>
                  <div className="success-proto-note">
                    Notice: This is a frontend demonstration. In accordance with guidelines, no backend or database is active, and no message is stored in localStorage.
                  </div>
                  <button
                    type="button"
                    className="btn-send-another"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
