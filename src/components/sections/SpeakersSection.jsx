import SectionTitle from '../common/SectionTitle.jsx';
import './SpeakersSection.css';

const speakerSlots = [
  { number: 1, role: 'Keynote Speaker', topic: 'AI & Robotics Keynote' },
  { number: 2, role: 'Industry Leader', topic: 'Industrial Automation' },
  { number: 3, role: 'Research Expert', topic: 'Autonomous Systems' },
  { number: 4, role: 'Technology Visionary', topic: 'Future of AI in India' },
];

export default function SpeakersSection() {
  return (
    <section className="speakers-section" id="speakers">
      <div className="section-container">
        <SectionTitle
          badge="SPEAKERS & SESSIONS"
          title="Meet the Thought Leaders"
          subtitle="Distinguished global experts from industry, academia, and research will share insights on the future trajectory of AI, robotics, and automation."
        />

        <div className="speakers-announcement">
          <div className="speakers-announcement-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div className="speakers-announcement-content">
            <h3 className="speakers-announcement-title">Speaker Announcements Coming Soon</h3>
            <p className="speakers-announcement-text">
              Official speaker confirmations and session details are being finalized. Distinguished experts from international AI research, robotics engineering, industrial automation, and technology policy will be announced in the coming weeks.
            </p>
          </div>
        </div>

        <div className="speakers-grid">
          {speakerSlots.map((slot) => (
            <div key={slot.number} className="speaker-card">
              <div className="speaker-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="speaker-info">
                <span className="speaker-status">To Be Announced</span>
                <h4 className="speaker-role">{slot.role}</h4>
                <div className="speaker-meta">
                  <span className="speaker-meta-label">Topic:</span>
                  <span className="speaker-meta-value">{slot.topic}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="speakers-session-tracks">
          <h3 className="session-tracks-title">Planned Session Tracks</h3>
          <div className="session-tracks-grid">
            {[
              { type: 'Keynote Sessions', detail: 'Visionary perspectives on AI and robotics transformation' },
              { type: 'Expert Discussions', detail: 'Deep dives on safety, ethics, workforce impact, and technological readiness' },
              { type: 'Industry Insights', detail: 'Real-world case studies of automation in Indian manufacturing and services' },
              { type: 'Technology Talks', detail: 'Cutting-edge engineering presentations on hardware, sensors, and algorithms' },
              { type: 'Innovation Sessions', detail: 'Showcase of disruptive deep-tech ventures and institutional patents' },
            ].map((session, idx) => (
              <div key={idx} className="session-track-item">
                <span className="session-track-number" aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span>
                <div>
                  <strong className="session-track-type">{session.type}</strong>
                  <p className="session-track-detail">{session.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
