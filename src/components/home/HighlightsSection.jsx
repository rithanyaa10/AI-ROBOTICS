import { highlights } from '../../data/highlights.js';
import HighlightCard from '../common/HighlightCard.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import './HighlightsSection.css';

export default function HighlightsSection() {
  return (
    <section className="highlights-section" id="highlights">
      <div className="section-container">
        <SectionTitle
          badge="EVENT HIGHLIGHTS"
          title="Five Pillars of Conclave &amp; Expo 2027"
          subtitle="Explore the multifaceted dimensions designed to inspire, educate, and drive commercial innovation across two days at CODISSIA."
        />
        <div className="highlights-grid">
          {highlights.map((item) => (
            <HighlightCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              tag={item.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
