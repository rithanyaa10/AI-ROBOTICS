import SectionTitle from '../common/SectionTitle.jsx';
import './ExhibitorsSection.css';

const exhibitionZones = [
  { title: 'AI & Cognitive Systems', desc: 'Enterprise AI architectures, machine learning models, and language understanding engines.' },
  { title: 'Industrial & Service Robotics', desc: 'Collaborative robots (cobots), autonomous guided vehicles, and articulated arms.' },
  { title: 'Factory & Process Automation', desc: 'PLC systems, SCADA platforms, sensors, and intelligent industrial control networks.' },
  { title: 'Smart Infrastructure & IoT', desc: 'Connected sensors, edge computing hardware, and industrial Internet of Things ecosystems.' },
];

export default function ExhibitorsSection() {
  return (
    <section className="exhibitors-section" id="exhibitors">
      <div className="section-container">
        <SectionTitle
          badge="EXHIBITORS & PARTICIPANTS"
          title="World-Class Technology Showcase"
          subtitle="Explore transformative displays from global technology companies, innovative startups, and pioneering research institutions."
        />

        <div className="exhibitors-zones-grid">
          {exhibitionZones.map((zone, idx) => (
            <div key={idx} className="exhibitor-zone-card">
              <span className="zone-number" aria-hidden="true">Zone {String(idx + 1).padStart(2, '0')}</span>
              <h3 className="zone-title">{zone.title}</h3>
              <p className="zone-desc">{zone.desc}</p>
              <span className="zone-status">Exhibitors Coming Soon</span>
            </div>
          ))}
        </div>

        <div className="exhibitors-cta-block">
          <div className="exhibitors-cta-content">
            <h3 className="exhibitors-cta-title">Interested in Exhibiting?</h3>
            <p className="exhibitors-cta-text">
              Showcase your technology, products, and innovations to a curated audience of industry professionals, researchers, and decision-makers. Exhibitor registration details will be announced soon.
            </p>
          </div>
          <a href="#register" className="exhibitors-cta-btn" onClick={(e) => { e.preventDefault(); document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Register as Exhibitor
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
