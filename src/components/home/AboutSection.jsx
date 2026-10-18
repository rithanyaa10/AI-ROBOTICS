import Link from '../../router/Link.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import './AboutSection.css';

export default function AboutSection() {
  const connectingGroups = [
    { title: 'Industry Enterprises', desc: 'Deploying automation to modernize operations and scale manufacturing capacity.' },
    { title: 'Innovators & Startups', desc: 'Commercializing breakthroughs in cognitive algorithms, vision, and hardware.' },
    { title: 'Academic Researchers', desc: 'Sharing theoretical discoveries and technological patents with industry peers.' },
    { title: 'Students & Colleges', desc: 'Building practical competencies and connecting with technology employers.' },
    { title: 'Entrepreneurs & Investors', desc: 'Identifying early-stage deep-tech ventures and technology deployment partnerships.' },
    { title: 'Academic Institutions', desc: 'Aligning future curricula with rapid industrial automation transformation.' },
  ];

  return (
    <section className="about-conclave-section" id="about">
      <div className="section-container">
        <SectionTitle
          badge="ABOUT THE CONCLAVE"
          title="Bridging Global Intelligence with Industrial Action"
          subtitle="A dedicated forum uniting foundational science, applied engineering, and commercial enterprise in Coimbatore."
        />

        <div className="about-split-grid">
          <div className="about-narrative-card">
            <h3 className="narrative-heading">
              Why AI &amp; Robotics Matter Now
            </h3>
            <p className="narrative-text">
              The Fourth Industrial Revolution is defined by the convergence of physical automation and digital cognitive intelligence. Across global supply chains, healthcare diagnostics, precision agriculture, and smart infrastructures, organizations that integrate intelligent systems achieve exponential resilience, safety, and operational precision.
            </p>
            <p className="narrative-text">
              Coimbatore, as an internationally recognized engineering and industrial capital in Tamil Nadu, stands at the nexus of India’s smart manufacturing transformation. The <strong>AI &amp; Robotics International Conclave &amp; Expo 2027</strong> delivers the strategic ecosystem platform where international technology leaders interface with Indian industrial demand.
            </p>

            <div className="about-cta-subrow">
              <Link href="/register" className="about-readmore-link">
                Join As An Ecosystem Participant &rarr;
              </Link>
            </div>
          </div>

          <div className="about-ecosystem-card">
            <h4 className="ecosystem-title">Connecting the Complete Technology Ecosystem</h4>
            <div className="ecosystem-list">
              {connectingGroups.map((group, index) => (
                <div key={index} className="ecosystem-item">
                  <div className="ecosystem-bullet" aria-hidden="true" />
                  <div>
                    <strong className="ecosystem-item-title">{group.title}</strong>
                    <p className="ecosystem-item-desc">{group.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
