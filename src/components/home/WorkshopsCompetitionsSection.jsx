import Link from '../../router/Link.jsx';
import { workshopsData, competitionsData } from '../../data/eventsData.js';
import SectionTitle from '../common/SectionTitle.jsx';
import Icon from '../common/Icon.jsx';
import './WorkshopsCompetitionsSection.css';

export default function WorkshopsCompetitionsSection() {
  return (
    <section className="workshops-competitions-section" id="workshops">
      <div className="section-container">
        <SectionTitle
          badge="LEARNING & CHALLENGES"
          title="Workshops &amp; Technical Competitions"
          subtitle="Elevate your engineering expertise with intensive masterclasses and compete in premier robotics hackathons designed for developers and researchers."
        />

        <div className="wc-split-layout">
          {/* Workshops Column */}
          <div className="wc-column">
            <div className="wc-column-header">
              <div className="wc-header-top">
                <span className="wc-badge badge-blue">INTENSIVE MASTERCLASSES</span>
                <span className="wc-status-pill">{workshopsData.status}</span>
              </div>
              <h3 className="wc-column-title">{workshopsData.title}</h3>
              <p className="wc-column-desc">{workshopsData.description}</p>
            </div>

            <div className="wc-cards-stack">
              {workshopsData.workshops.map((ws, idx) => (
                <div key={idx} className="workshop-card">
                  <div className="workshop-card-header">
                    <div className="workshop-icon-box">
                      <Icon name="workshop" size={22} />
                    </div>
                    <div className="workshop-meta">
                      <span className="workshop-category">{ws.category}</span>
                      <h4 className="workshop-name">{ws.title}</h4>
                    </div>
                  </div>
                  <p className="workshop-overview">{ws.overview}</p>
                  <div className="workshop-card-footer">
                    <span className="notice-tag">
                      <span className="notice-dot" aria-hidden="true" />
                      {ws.scheduleNotice}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="wc-column-footer">
              <Link href="/register" className="btn-wc-primary">
                Register Interest for Workshops &rarr;
              </Link>
            </div>
          </div>

          {/* Competitions Column */}
          <div className="wc-column" id="competitions">
            <div className="wc-column-header">
              <div className="wc-header-top">
                <span className="wc-badge badge-gold">HACKATHONS &amp; ARENAS</span>
                <span className="wc-status-pill pill-gold">{competitionsData.status}</span>
              </div>
              <h3 className="wc-column-title">{competitionsData.title}</h3>
              <p className="wc-column-desc">{competitionsData.description}</p>
            </div>

            <div className="wc-cards-stack">
              {competitionsData.tracks.map((comp, idx) => (
                <div key={idx} className="competition-card">
                  <div className="competition-card-top">
                    <div className="competition-trophy-wrap">
                      <Icon name="trophy" size={24} />
                    </div>
                    <span className="competition-badge">Challenge 0{idx + 1}</span>
                  </div>
                  <h4 className="competition-name">{comp.name}</h4>
                  <p className="competition-focus">{comp.focus}</p>
                  <div className="competition-footer">
                    <span className="comp-status-badge">
                      <span className="status-gold-dot" aria-hidden="true" />
                      {comp.status}
                    </span>
                  </div>
                </div>
              ))}

              {/* Collegiate & Maker Eligibility Box */}
              <div className="eligibility-notice-box">
                <h5 className="eligibility-title">Participant Eligibility</h5>
                <p className="eligibility-desc">
                  Open to university engineering students, research scholars, independent makers, and early-stage startup engineering teams. Team registration guidelines and rules will be published shortly.
                </p>
              </div>
            </div>

            <div className="wc-column-footer">
              <Link href="/register" className="btn-wc-gold">
                Inquire for Competition Entry &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
