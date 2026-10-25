import { GOOGLE_FORM_URL } from '../../data/navigation.js';
import SectionTitle from '../common/SectionTitle.jsx';
import ExhibitorCard from '../common/ExhibitorCard.jsx';
import './ExhibitorsSection.css';

export default function ExhibitorsSection() {
  const exhibitorSlots = [
    { slot: '01', category: 'Industrial Automation & Robotics' },
    { slot: '02', category: 'Enterprise AI & Cognitive Systems' },
    { slot: '03', category: 'Autonomous Vehicles & Mobility' },
    { slot: '04', category: 'IoT & Smart Factory Infrastructure' },
    { slot: '05', category: 'AgriTech & Precision Machinery' },
    { slot: '06', category: 'Bio-Robotics & Healthcare Systems' },
  ];

  return (
    <section className="exhibitors-section" id="exhibitors">
      <div className="section-container">
        <SectionTitle
          badge="INDUSTRY ECOSYSTEM"
          title="Exhibitors &amp; Participating Organizations"
          subtitle="Pioneering technology leaders, robotics OEMs, deep-tech startups, and academic institutions will be presenting at CODISSIA Trade Fair Complex."
        />

        {/* Curation Notice Banner */}
        <div className="exhibitors-curation-notice">
          <div className="curation-indicator-ring">
            <span className="curation-dot" aria-hidden="true" />
          </div>
          <div className="curation-content">
            <span className="curation-badge">Official Review Phase Active</span>
            <h4 className="curation-title">Exhibitor Directory Coming Soon</h4>
            <p className="curation-text">
              In accordance with conclave standards, all participating companies and institutional booths are undergoing administrative review and zone allocation. The official verified directory and interactive floor plan will be published following final approvals.
            </p>
          </div>
        </div>

        {/* Curated Placeholder Cards */}
        <div className="exhibitors-grid">
          {exhibitorSlots.map((item) => (
            <ExhibitorCard
              key={item.slot}
              slot={item.slot}
              category={item.category}
            />
          ))}
        </div>

        {/* Exhibitor Prospectus CTA */}
        <div className="exhibitor-prospectus-card">
          <div className="prospectus-left">
            <span className="prospectus-pill">EXHIBIT AT CODISSIA 2027</span>
            <h4 className="prospectus-heading">Reserve Your Exhibition Booth &amp; Demo Ring</h4>
            <p className="prospectus-desc">
              Connect directly with industrial enterprise buyers, university engineering talents, and institutional procurement teams across Tamil Nadu and international markets.
            </p>
          </div>
          <div className="prospectus-action">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reserve-booth"
            >
              Register as Exhibitor &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
