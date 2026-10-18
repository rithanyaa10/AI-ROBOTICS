import Link from '../../router/Link.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import SpeakerCard from '../common/SpeakerCard.jsx';
import './SpeakersSection.css';

export default function SpeakersSection() {
  const speakerSlots = [1, 2, 3, 4];

  return (
    <section className="speakers-section" id="speakers">
      <div className="section-container">
        <SectionTitle
          badge="DISTINGUISHED FACULTY & LEADERS"
          title="Keynote Speakers &amp; Domain Authorities"
          subtitle="We are assembling an esteemed international roster of AI scientists, robotics researchers, and industrial automation executives."
        />

        {/* Official Status Notice */}
        <div className="speakers-announcement-card">
          <div className="announcement-beacon" aria-hidden="true" />
          <div className="announcement-content">
            <span className="announcement-tag">Curated Lineup In Progress</span>
            <h4 className="announcement-title">Official Speaker Lineup Coming Soon</h4>
            <p className="announcement-text">
              Speaker confirmations, keynote biographies, and technical talk abstracts are currently undergoing review by our conclave academic committee. The verified global speaker faculty will be revealed in upcoming announcements.
            </p>
          </div>
        </div>

        {/* Placeholder Speaker Cards Grid */}
        <div className="speakers-grid">
          {speakerSlots.map((num) => (
            <SpeakerCard key={num} number={num} />
          ))}
        </div>

        {/* Nomination / Inquiry Strip */}
        <div className="speaker-nomination-strip">
          <div className="nomination-text-block">
            <h5 className="nomination-heading">Submit a Keynote or Speaker Proposal</h5>
            <p className="nomination-subtext">
              Are you a researcher, enterprise engineer, or technology innovator interested in presenting cutting-edge AI or robotics research?
            </p>
          </div>
          <Link href="/contact" className="btn-nominate-speaker">
            Inquire About Speaking Opportunities &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
