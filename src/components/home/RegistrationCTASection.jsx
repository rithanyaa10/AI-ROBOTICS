import { useState } from 'react';
import SectionTitle from '../common/SectionTitle.jsx';
import Icon from '../common/Icon.jsx';
import './RegistrationCTASection.css';

export default function RegistrationCTASection() {
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    category: 'Delegate / Industry Professional',
    fullName: '',
    email: '',
    organization: '',
    phone: '',
    interest: 'Robotics & Automation',
  });
  const [formErrors, setFormErrors] = useState({});

  const categories = [
    'Delegate / Industry Professional',
    'Student / Academic Scholar',
    'Exhibitor / Technology Sponsor',
    'Competition Participant',
  ];

  const interestDomains = [
    'Robotics & Automation',
    'AI & Deep Learning Systems',
    'Industry 4.0 & Smart Factory',
    'Autonomous Mobility & Drones',
    'Healthcare & Bio-Robotics',
    'AgriTech & Precision Farming',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleOpenForm = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.organization.trim()) {
      errors.organization = 'Please enter your organization or institution';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Frontend-only demonstration: do NOT save to backend or localStorage
    setSubmittedData({ ...formData });
    setFormData({
      category: 'Delegate / Industry Professional',
      fullName: '',
      email: '',
      organization: '',
      phone: '',
      interest: 'Robotics & Automation',
    });
    setFormErrors({});
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSubmittedData(null);
  };

  return (
    <section className="registration-cta-section" id="register">
      <div className="section-container">
        <div className="registration-cta-wrapper">
          <div className="cta-glow-backdrop" aria-hidden="true" />
          
          <SectionTitle
            badge="PRIORITY PARTICIPATION"
            title="Be Part of the Global Conclave &amp; Expo 2027"
            subtitle="Official registration and delegate badge issuance will open soon. Express your interest today to receive early access announcements, workshop schedules, and exhibitor prospectuses."
          />

          <div className="cta-action-buttons">
            <button
              type="button"
              className="btn-register-trigger"
              onClick={handleOpenForm}
            >
              <span>Register Your Interest (Demo)</span>
              <Icon name="arrowRight" size={18} />
            </button>
            <a
              href="#about"
              className="btn-learn-more"
            >
              Explore Conclave Details
            </a>
          </div>

          <div className="cta-features-strip">
            <div className="cta-feat-item">
              <Icon name="check" size={16} />
              <span>Priority Notification for Delegate Passes</span>
            </div>
            <div className="cta-feat-item">
              <Icon name="check" size={16} />
              <span>Early Access to Masterclass Schedules</span>
            </div>
            <div className="cta-feat-item">
              <Icon name="check" size={16} />
              <span>Exhibitor Booth &amp; Floorplan Prospectus</span>
            </div>
          </div>
        </div>

        {/* Frontend-Only Interactive Registration Modal */}
        {showModal && (
          <div className="reg-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="reg-modal-backdrop" onClick={handleCloseModal} />
            <div className="reg-modal-card">
              <button
                type="button"
                className="modal-close-button"
                onClick={handleCloseModal}
                aria-label="Close registration modal"
              >
                &times;
              </button>

              {!submittedData ? (
                <div>
                  <div className="modal-header">
                    <span className="modal-badge">FRONTEND DEMONSTRATION</span>
                    <h3 id="modal-title" className="modal-title">Express Your Interest for 2027</h3>
                    <p className="modal-sub">
                      Test the frontend registration workflow. Official portal with payments &amp; credentials will be announced soon.
                    </p>
                  </div>

                  <form className="reg-demo-form" onSubmit={handleSubmit} noValidate>
                    {/* Category Selection */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="category">Select Participation Category</label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="form-select"
                      >
                        {categories.map((cat, idx) => (
                          <option key={idx} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    {/* Name & Email Row */}
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="fullName">Full Name *</label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="e.g. Dr. Rajesh Kumar"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`form-input ${formErrors.fullName ? 'input-error' : ''}`}
                        />
                        {formErrors.fullName && <span className="field-error-text">{formErrors.fullName}</span>}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="rajesh@enterprise.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-input ${formErrors.email ? 'input-error' : ''}`}
                        />
                        {formErrors.email && <span className="field-error-text">{formErrors.email}</span>}
                      </div>
                    </div>

                    {/* Organization & Phone Row */}
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="organization">Organization / College *</label>
                        <input
                          id="organization"
                          name="organization"
                          type="text"
                          placeholder="e.g. Coimbatore Institute of Tech"
                          value={formData.organization}
                          onChange={handleChange}
                          className={`form-input ${formErrors.organization ? 'input-error' : ''}`}
                        />
                        {formErrors.organization && <span className="field-error-text">{formErrors.organization}</span>}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone Number (Optional)</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Domain of Interest */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="interest">Primary Interest Domain</label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="form-select"
                      >
                        {interestDomains.map((dom, idx) => (
                          <option key={idx} value={dom}>{dom}</option>
                        ))}
                      </select>
                    </div>

                    {/* Disclaimer Note */}
                    <div className="modal-privacy-note">
                      <Icon name="check" size={14} />
                      <span>
                        Notice: This is a frontend demonstration. No backend or database is active, and data is not stored in localStorage.
                      </span>
                    </div>

                    <div className="modal-actions-row">
                      <button type="submit" className="btn-submit-reg">
                        Submit Interest Registration &rarr;
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="submission-success-card">
                  <div className="success-icon-badge">
                    <Icon name="check" size={32} />
                  </div>
                  <h4 className="success-title">Interest Expressed Successfully!</h4>
                  <p className="success-message">
                    Thank you, <strong>{submittedData.fullName}</strong>, for registering your interest as <strong>{submittedData.category}</strong> representing <em>{submittedData.organization}</em>.
                  </p>
                  <div className="success-details-box">
                    <div className="detail-row">
                      <span>Email:</span>
                      <strong>{submittedData.email}</strong>
                    </div>
                    <div className="detail-row">
                      <span>Domain:</span>
                      <strong>{submittedData.interest}</strong>
                    </div>
                    <div className="detail-row">
                      <span>Event Date:</span>
                      <strong>5 &amp; 6 February 2027 (CODISSIA)</strong>
                    </div>
                  </div>
                  <div className="success-disclaimer">
                    🔒 Frontend Prototype Notice: No data has been saved to a database or localStorage. Official ticketing and badge credentials will open once partner approvals are finalized.
                  </div>
                  <button
                    type="button"
                    className="btn-success-close"
                    onClick={handleCloseModal}
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
