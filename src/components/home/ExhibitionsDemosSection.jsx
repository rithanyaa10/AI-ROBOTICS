import { useState } from 'react';
import Link from '../../router/Link.jsx';
import { exhibitionsData, liveDemosData } from '../../data/eventsData.js';
import SectionTitle from '../common/SectionTitle.jsx';
import EventCard from '../common/EventCard.jsx';
import Icon from '../common/Icon.jsx';
import './ExhibitionsDemosSection.css';

export default function ExhibitionsDemosSection() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'exhibitions' | 'demos'

  return (
    <section className="exhibitions-demos-section" id="events">
      <div className="section-container">
        <SectionTitle
          badge="EXPERIENCE & DISCOVERY"
          title="Exhibitions &amp; Live Demonstrations"
          subtitle="Explore hands-on exhibits, live automated work-cells, and interactive AI showcases deployed across dedicated zones at CODISSIA."
        />

        {/* Tab Filter Controls */}
        <div className="filter-tab-bar" role="tablist" aria-label="Exhibitions and Demonstrations Filter">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'all'}
            className={`filter-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Showcases
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'exhibitions'}
            className={`filter-tab-btn ${activeTab === 'exhibitions' ? 'active' : ''}`}
            onClick={() => setActiveTab('exhibitions')}
          >
            Exhibition Zones ({exhibitionsData.categories.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'demos'}
            className={`filter-tab-btn ${activeTab === 'demos' ? 'active' : ''}`}
            onClick={() => setActiveTab('demos')}
          >
            Live Demo Arenas ({liveDemosData.categories.length})
          </button>
        </div>

        {/* Section 1: Technology Exhibitions */}
        {(activeTab === 'all' || activeTab === 'exhibitions') && (
          <div className="showcase-block" id="exhibitions">
            <div className="showcase-header-row">
              <div className="showcase-title-group">
                <span className="showcase-badge">EXHIBITION PAVILION</span>
                <h3 className="showcase-heading">{exhibitionsData.title}</h3>
                <p className="showcase-subtext">{exhibitionsData.description}</p>
              </div>
              <div className="showcase-status-badge">
                <span className="status-pulse-dot" aria-hidden="true" />
                <span>{exhibitionsData.status}</span>
              </div>
            </div>

            <div className="showcase-cards-grid">
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

            <div className="showcase-footer-action">
              <span className="action-hint">Interested in showcasing your technology or industrial solutions?</span>
              <Link href="/register" className="btn-showcase-action">
                Become an Exhibitor &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* Section 2: Live Demonstrations */}
        {(activeTab === 'all' || activeTab === 'demos') && (
          <div className="showcase-block demos-block" id="demos">
            <div className="showcase-header-row">
              <div className="showcase-title-group">
                <span className="showcase-badge badge-cyan">INTERACTIVE DEMO RINGS</span>
                <h3 className="showcase-heading">{liveDemosData.title}</h3>
                <p className="showcase-subtext">{liveDemosData.description}</p>
              </div>
              <div className="showcase-status-badge">
                <span className="status-pulse-dot" aria-hidden="true" />
                <span>{liveDemosData.status}</span>
              </div>
            </div>

            <div className="demos-cards-grid">
              {liveDemosData.categories.map((demo, idx) => (
                <div key={idx} className="demo-arena-card">
                  <div className="demo-card-top">
                    <span className="demo-badge">{demo.badge}</span>
                    <span className="demo-slot">Ring 0{idx + 1}</span>
                  </div>
                  <div className="demo-icon-wrap">
                    <Icon name="demos" size={26} />
                  </div>
                  <h4 className="demo-arena-name">{demo.name}</h4>
                  <p className="demo-arena-focus">{demo.focus}</p>
                  <div className="demo-card-status">
                    <span className="demo-live-dot" aria-hidden="true" />
                    <span>Real-time Operational Demos</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="showcase-footer-action">
              <span className="action-hint">Experience cutting-edge systems running live in Coimbatore.</span>
              <Link href="/register" className="btn-showcase-action-cyan">
                Register as Attendee &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
