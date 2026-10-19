import { whyAttendItems } from '../../data/whyAttend.js';
import SectionTitle from '../common/SectionTitle.jsx';
import Icon from '../common/Icon.jsx';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <SectionTitle
          badge="WHY ATTEND"
          title="Eight Reasons to Be at the Conclave"
          subtitle="From cutting-edge technology exposure to strategic industry networking, the AI & Robotics Conclave 2027 offers unparalleled value for every stakeholder."
        />

        <div className="about-grid">
          {whyAttendItems.map((item, index) => (
            <div key={item.id} className="about-card">
              <div className="about-card-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="about-card-icon">
                <Icon name={item.icon} size={22} />
              </div>
              <h3 className="about-card-title">{item.title}</h3>
              <p className="about-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
