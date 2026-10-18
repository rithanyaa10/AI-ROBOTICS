import Link from '../../router/Link.jsx';
import { knowledgeSessionsData } from '../../data/eventsData.js';
import SectionTitle from '../common/SectionTitle.jsx';
import Icon from '../common/Icon.jsx';
import './KnowledgeSessionsSection.css';

export default function KnowledgeSessionsSection() {
  const sessionIcons = ['lightbulb', 'network', 'factory', 'cpu', 'compass'];

  return (
    <section className="knowledge-sessions-section" id="sessions">
      <div className="section-container">
        <SectionTitle
          badge="CONCLAVE DIALOGUES"
          title={knowledgeSessionsData.title}
          subtitle={knowledgeSessionsData.description}
        />

        {/* Schedule TBA Notice Bar */}
        <div className="sessions-notice-bar">
          <div className="notice-beacon-wrap">
            <span className="beacon-dot" aria-hidden="true" />
            <span className="notice-title">Curated Conclave Agendas:</span>
          </div>
          <span className="notice-message">
            {knowledgeSessionsData.status}. Detailed speaker schedules, panel topics, and paper presentations will be released following academic and industry peer review.
          </span>
          <Link href="/contact" className="btn-sessions-propose">
            Propose a Paper / Talk &rarr;
          </Link>
        </div>

        {/* Session Track Cards */}
        <div className="sessions-grid">
          {knowledgeSessionsData.sessionTracks.map((session, index) => (
            <div key={index} className="session-card">
              <div className="session-card-header">
                <div className="session-icon-box">
                  <Icon name={sessionIcons[index % sessionIcons.length]} size={24} />
                </div>
                <span className="session-track-badge">Track 0{index + 1}</span>
              </div>
              <h4 className="session-title">{session.type}</h4>
              <p className="session-detail">{session.detail}</p>
              <div className="session-footer">
                <span className="session-status-tag">
                  <span className="tba-indicator" aria-hidden="true" />
                  {session.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Themes Strip */}
        <div className="conclave-themes-card">
          <div className="themes-header">
            <h4 className="themes-title">Cross-Cutting Conference Themes</h4>
            <span className="themes-badge">Academic &amp; Industrial Alignment</span>
          </div>
          <div className="themes-tags-list">
            <div className="theme-tag-item">
              <span className="theme-tag-bullet" />
              <span>Ethical AI &amp; Algorithmic Governance</span>
            </div>
            <div className="theme-tag-item">
              <span className="theme-tag-bullet" />
              <span>Edge AI &amp; Real-Time Perception</span>
            </div>
            <div className="theme-tag-item">
              <span className="theme-tag-bullet" />
              <span>Collaborative Robotics &amp; Safety</span>
            </div>
            <div className="theme-tag-item">
              <span className="theme-tag-bullet" />
              <span>Industry 4.0 &amp; Digital Factory Twins</span>
            </div>
            <div className="theme-tag-item">
              <span className="theme-tag-bullet" />
              <span>Workforce Reskilling &amp; STEM Leadership</span>
            </div>
            <div className="theme-tag-item">
              <span className="theme-tag-bullet" />
              <span>Indian Deep-Tech Ecosystem &amp; Patents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
