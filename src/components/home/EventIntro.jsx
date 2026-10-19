import './EventIntro.css';

export default function EventIntro() {
  return (
    <section className="event-intro-section" id="introduction">
      <div className="section-container">
        <div className="intro-content">
          <div className="intro-left">
            <span className="intro-badge">PREMIER INTERNATIONAL TECHNOLOGY EVENT</span>
            <h2 className="intro-heading">
              Bridging Global Intelligence with Industrial Action
            </h2>
            <p className="intro-text">
              The <strong>AI &amp; Robotics International Conclave &amp; Expo 2027</strong> convenes global technology leaders, visionary researchers, forward-looking industrialists, emerging startups, and aspiring student innovators at the prestigious CODISSIA Trade Fair Complex in Coimbatore, Tamil Nadu.
            </p>
            <p className="intro-text">
              Engineered as an expansive collaborative bridge across artificial intelligence, autonomous robotics, intelligent control, and industrial automation, this two-day international conclave catalyzes meaningful convergence between academic research frontiers and scalable industrial applications.
            </p>
          </div>

          <div className="intro-right">
            <div className="intro-facts-grid">
              <div className="intro-fact-card">
                <div className="intro-fact-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div className="intro-fact-content">
                  <span className="intro-fact-label">DATE</span>
                  <strong className="intro-fact-value">5 &amp; 6 February 2027</strong>
                </div>
              </div>
              <div className="intro-fact-card">
                <div className="intro-fact-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="intro-fact-content">
                  <span className="intro-fact-label">TIME</span>
                  <strong className="intro-fact-value">10:00 AM – 08:00 PM</strong>
                </div>
              </div>
              <div className="intro-fact-card">
                <div className="intro-fact-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="intro-fact-content">
                  <span className="intro-fact-label">VENUE</span>
                  <strong className="intro-fact-value">CODISSIA, Coimbatore</strong>
                  <span className="intro-fact-sub">Tamil Nadu, India</span>
                </div>
              </div>
              <div className="intro-fact-card">
                <div className="intro-fact-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div className="intro-fact-content">
                  <span className="intro-fact-label">ORGANIZER</span>
                  <strong className="intro-fact-value">E-Faws Tech Services Pvt Ltd</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="intro-stakeholders">
          <span className="stakeholders-label">Convening Ecosystem Stakeholders:</span>
          <div className="stakeholders-tags">
            {['Industry Enterprises', 'Technology Startups', 'Academic Researchers', 'Engineering Students', 'Automation Practitioners', 'Institutional Leaders'].map(tag => (
              <span key={tag} className="stakeholder-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
