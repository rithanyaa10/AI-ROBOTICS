import Link from '../../router/Link.jsx';
import { exhibitionsData } from '../../data/eventsData.js';
import SectionTitle from '../common/SectionTitle.jsx';
import EventCard from '../common/EventCard.jsx';
import './ExhibitionsSection.css';

export default function ExhibitionsSection() {
  return (
    <section className="exhibitions-section" id="exhibitions">
      <div className="section-container">
        <SectionTitle
          badge="TECHNOLOGY EXHIBITIONS"
          title="World-Class Automation &amp; AI Showcase"
          subtitle={exhibitionsData.description}
        />

        <div className="exhibitions-status-banner">
          <div className="status-indicator-beacon" aria-hidden="true" />
          <span className="status-banner-text">
            <strong>Exhibitor Notice:</strong> {exhibitionsData.status}. Confirmed exhibitor booths and floor layouts will be published following official curation.
          </span>
          <Link href="/register" className="btn-exhibit-now">
            Become an Exhibitor &rarr;
          </Link>
        </div>

        <div className="exhibitions-categories-grid">
          {exhibitionsData.categories.map((cat, idx) => (
            <EventCard
              key={idx}
              category="Exhibition Zone"
              title={cat.title}
              overview={cat.desc}
              statusNotice={cat.status}
              badge={`Zone 0${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
