import { useState, useCallback } from 'react';
import SectionTitle from '../common/SectionTitle.jsx';
import './RegistrationSection.css';

const participationCategories = [
  { value: '', label: 'Select participation type' },
  { value: 'visitor', label: 'General Visitor / Attendee' },
  { value: 'exhibitor', label: 'Exhibitor / Organization' },
  { value: 'speaker', label: 'Speaker / Session Proposal' },
  { value: 'student', label: 'Student / Academic Participant' },
  { value: 'startup', label: 'Startup / Innovation Showcase' },
];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  category: '',
  message: '',
};

function validate(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (form.phone && !/^[+]?[\d\s()-]{7,18}$/.test(form.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!form.category) errors.category = 'Please select a participation type.';
  return errors;
}

export default function RegistrationSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    setErrors(prev => {
      if (prev[name]) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return prev;
    });
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setErrors({});

    // Simulate form processing (frontend prototype)
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 1500);
  }, [form]);

  const handleReset = useCallback(() => {
    setStatus('idle');
    setForm(initialForm);
    setErrors({});
  }, []);

  return (
    <section className="registration-section" id="register">
      <div className="section-container">
        <SectionTitle
          badge="REGISTRATION"
          title="Register Your Interest"
          subtitle="Express your interest in attending, exhibiting, speaking, or participating at the AI & Robotics International Conclave & Expo 2027."
        />

        <div className="registration-layout">
          {/* Info Sidebar */}
          <div className="registration-info">
            <div className="reg-info-card">
              <h3 className="reg-info-title">Event Details</h3>
              <div className="reg-info-item">
                <span className="reg-info-label">Dates</span>
                <span className="reg-info-value">5 &amp; 6 February 2027</span>
              </div>
              <div className="reg-info-item">
                <span className="reg-info-label">Time</span>
                <span className="reg-info-value">10:00 AM – 08:00 PM IST</span>
              </div>
              <div className="reg-info-item">
                <span className="reg-info-label">Venue</span>
                <span className="reg-info-value">CODISSIA, Coimbatore</span>
              </div>
              <div className="reg-info-item">
                <span className="reg-info-label">Organizer</span>
                <span className="reg-info-value">E-Faws Tech Services Pvt Ltd</span>
              </div>
            </div>

            <div className="reg-prototype-notice">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <p>This is a <strong>frontend prototype</strong>. Submissions are not sent to a live server. Official registration channels will be announced on the <a href="https://expoverse.pro" target="_blank" rel="noopener noreferrer">official event website</a>.</p>
            </div>
          </div>

          {/* Form */}
          <div className="registration-form-wrapper">
            {status === 'success' ? (
              <div className="reg-success-state">
                <div className="reg-success-icon" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="reg-success-title">Interest Registered</h3>
                <p className="reg-success-text">
                  Thank you for expressing your interest. This is a frontend prototype — your submission has not been sent to a server. Official registration details will be available at <a href="https://expoverse.pro" target="_blank" rel="noopener noreferrer">expoverse.pro</a>.
                </p>
                <button type="button" className="reg-reset-btn" onClick={handleReset}>
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form className="registration-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className={`form-group ${errors.fullName ? 'has-error' : ''}`}>
                    <label htmlFor="reg-fullName" className="form-label">
                      Full Name <span className="required" aria-label="required">*</span>
                    </label>
                    <input
                      id="reg-fullName"
                      type="text"
                      name="fullName"
                      className="form-input"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      disabled={status === 'submitting'}
                    />
                    {errors.fullName && <span className="form-error" role="alert">{errors.fullName}</span>}
                  </div>

                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="reg-email" className="form-label">
                      Email Address <span className="required" aria-label="required">*</span>
                    </label>
                    <input
                      id="reg-email"
                      type="email"
                      name="email"
                      className="form-input"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      autoComplete="email"
                      disabled={status === 'submitting'}
                    />
                    {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="reg-phone" className="form-label">Phone Number</label>
                    <input
                      id="reg-phone"
                      type="tel"
                      name="phone"
                      className="form-input"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="tel"
                      disabled={status === 'submitting'}
                    />
                    {errors.phone && <span className="form-error" role="alert">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="reg-organization" className="form-label">Organization / Institution</label>
                    <input
                      id="reg-organization"
                      type="text"
                      name="organization"
                      className="form-input"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Your organization or institution"
                      autoComplete="organization"
                      disabled={status === 'submitting'}
                    />
                  </div>
                </div>

                <div className={`form-group ${errors.category ? 'has-error' : ''}`}>
                  <label htmlFor="reg-category" className="form-label">
                    Participation Type <span className="required" aria-label="required">*</span>
                  </label>
                  <select
                    id="reg-category"
                    name="category"
                    className="form-select"
                    value={form.category}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                  >
                    {participationCategories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                  {errors.category && <span className="form-error" role="alert">{errors.category}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="reg-message" className="form-label">Message or Area of Interest</label>
                  <textarea
                    id="reg-message"
                    name="message"
                    className="form-textarea"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest in the conclave (optional)"
                    rows={4}
                    disabled={status === 'submitting'}
                  />
                </div>

                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="submit-spinner" aria-hidden="true" />
                      Processing...
                    </>
                  ) : (
                    'Register Interest'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
