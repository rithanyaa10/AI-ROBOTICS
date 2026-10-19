import { useState } from 'react';
import SectionTitle from '../common/SectionTitle.jsx';
import './ScheduleSection.css';

const days = [
  { id: 'day1', label: 'Day 1', date: '5 February 2027', day: 'Friday' },
  { id: 'day2', label: 'Day 2', date: '6 February 2027', day: 'Saturday' },
];

const tentativeAgenda = {
  day1: [
    { time: '10:00 AM', title: 'Inauguration & Opening Ceremony', type: 'Ceremony', detail: 'Welcome address and formal inauguration of the conclave.' },
    { time: '11:00 AM', title: 'Keynote Sessions – Block I', type: 'Keynote', detail: 'Opening keynote perspectives on AI and robotics transformation.' },
    { time: '12:30 PM', title: 'Technology Exhibitions Open', type: 'Exhibition', detail: 'Exhibitor booths and demonstration zones open for visitors.' },
    { time: '02:00 PM', title: 'Workshops – Block I', type: 'Workshop', detail: 'Hands-on technical sessions on machine learning and robotics.' },
    { time: '04:00 PM', title: 'Panel Discussions', type: 'Discussion', detail: 'Expert panels on industry trends and ethical AI.' },
    { time: '06:00 PM', title: 'Networking & Innovation Showcase', type: 'Networking', detail: 'Startup pitches and informal networking opportunities.' },
  ],
  day2: [
    { time: '10:00 AM', title: 'Keynote Sessions – Block II', type: 'Keynote', detail: 'Day 2 keynotes on industrial automation and smart manufacturing.' },
    { time: '11:30 AM', title: 'Competition Finals', type: 'Competition', detail: 'Robotics challenge and AI hackathon final rounds.' },
    { time: '01:00 PM', title: 'Workshops – Block II', type: 'Workshop', detail: 'Advanced sessions on computer vision and edge computing.' },
    { time: '03:00 PM', title: 'Industry Insights & Case Studies', type: 'Discussion', detail: 'Real-world deployment case studies from Indian manufacturers.' },
    { time: '05:00 PM', title: 'Awards & Recognition Ceremony', type: 'Ceremony', detail: 'Competition awards and innovation recognition.' },
    { time: '07:00 PM', title: 'Valedictory & Closing', type: 'Ceremony', detail: 'Closing remarks and summary of conclave outcomes.' },
  ],
};

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <section className="schedule-section" id="schedule">
      <div className="section-container">
        <SectionTitle
          badge="EVENT SCHEDULE"
          title="Two Days of Innovation"
          subtitle="A comprehensive agenda spanning keynotes, exhibitions, workshops, competitions, and networking — all under one roof at CODISSIA."
        />

        <div className="schedule-notice">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span>This is a tentative schedule overview. Detailed session timings, speakers, and room assignments will be announced closer to the event.</span>
        </div>

        {/* Day Tabs */}
        <div className="schedule-tabs" role="tablist" aria-label="Event day selection">
          {days.map((day) => (
            <button
              key={day.id}
              type="button"
              role="tab"
              className={`schedule-tab ${activeDay === day.id ? 'active' : ''}`}
              onClick={() => setActiveDay(day.id)}
              aria-selected={activeDay === day.id}
              aria-controls={`schedule-panel-${day.id}`}
            >
              <span className="schedule-tab-label">{day.label}</span>
              <span className="schedule-tab-date">{day.date}</span>
              <span className="schedule-tab-day">{day.day}</span>
            </button>
          ))}
        </div>

        {/* Schedule Timeline */}
        <div
          id={`schedule-panel-${activeDay}`}
          role="tabpanel"
          className="schedule-timeline"
          aria-label={`Schedule for ${days.find(d => d.id === activeDay)?.date}`}
        >
          {tentativeAgenda[activeDay].map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-time">
                <span className="time-text">{item.time}</span>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot" aria-hidden="true" />
                {idx < tentativeAgenda[activeDay].length - 1 && (
                  <div className="timeline-line" aria-hidden="true" />
                )}
              </div>
              <div className="timeline-content">
                <span className="timeline-type">{item.type}</span>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="schedule-hours-note">
          <strong>Event Hours:</strong> 10:00 AM – 08:00 PM IST (both days)
        </div>
      </div>
    </section>
  );
}
