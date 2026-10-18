import { whyAttendItems } from '../../data/whyAttend.js';
import SectionTitle from '../common/SectionTitle.jsx';
import Icon from '../common/Icon.jsx';
import './WhyAttendSection.css';

export default function WhyAttendSection() {
  return (
    <section className="why-attend-section" id="why-attend">
      <div className="section-container">
        <SectionTitle
          badge="VALUE &amp; OPPORTUNITY"
          title="Why Attend Conclave &amp; Expo 2027"
          subtitle="Whether you are an industry enterprise leader, engineering researcher, student innovator, or robotics practitioner, here is what makes this gathering indispensable."
        />

        <div className="why-attend-grid">
          {whyAttendItems.map((item, index) => (
            <div key={item.id} className="why-attend-card">
              <div className="why-attend-card-header">
                <div className="why-attend-icon-box">
                  <Icon name={item.icon} size={26} />
                </div>
                <span className="why-attend-index">0{index + 1}</span>
              </div>
              <h3 className="why-attend-title">{item.title}</h3>
              <p className="why-attend-desc">{item.desc}</p>
              <div className="why-attend-accent-line" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Stakeholder Perspective Strip */}
        <div className="attendee-personas-bar">
          <span className="personas-title">Tailored Value for Every Stakeholder:</span>
          <div className="personas-list">
            <div className="persona-chip">
              <span className="persona-chip-role">Enterprises &amp; SMEs</span>
              <span className="persona-chip-desc">Adopt scalable automation &amp; find integration partners</span>
            </div>
            <div className="persona-chip">
              <span className="persona-chip-role">Researchers &amp; Faculty</span>
              <span className="persona-chip-desc">Publish innovations &amp; form R&amp;D industry consortia</span>
            </div>
            <div className="persona-chip">
              <span className="persona-chip-role">Students &amp; Innovators</span>
              <span className="persona-chip-desc">Hands-on masterclasses &amp; hackathons</span>
            </div>
            <div className="persona-chip">
              <span className="persona-chip-role">Founders &amp; Investors</span>
              <span className="persona-chip-desc">Uncover breakthrough deep-tech ventures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
