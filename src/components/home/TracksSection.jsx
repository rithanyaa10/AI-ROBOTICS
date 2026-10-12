import { tracks } from '../../data/tracks.js';
import TrackCard from '../common/TrackCard.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import './TracksSection.css';

export default function TracksSection() {
  return (
    <section className="tracks-section" id="tracks">
      <div className="section-container">
        <SectionTitle
          badge="APPLICATION SECTORS"
          title="From Industry to Everyday Life"
          subtitle="Explore the key technological domains where artificial intelligence and robotics are fundamentally reshaping productivity, safety, and human potential."
        />
        <div className="tracks-grid">
          {tracks.map((track) => (
            <TrackCard
              key={track.id}
              icon={track.icon}
              title={track.title}
              category={track.category}
              description={track.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
