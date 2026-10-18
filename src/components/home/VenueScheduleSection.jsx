import { useState, useEffect } from 'react';
import { quickFacts } from '../../data/quickFacts.js';
import { contactInfo } from '../../data/contactInfo.js';
import SectionTitle from '../common/SectionTitle.jsx';
import Icon from '../common/Icon.jsx';
import './VenueScheduleSection.css';

function calculateTimeLeft(target) {
  const now = new Date().getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function VenueScheduleSection() {
  // Countdown to 5 February 2027, 10:00:00 IST (+05:30)
  const targetDate = new Date('2027-02-05T10:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="venue-schedule-section" id="schedule">
      <div className="section-container">
        <SectionTitle
          badge="EVENT LOGISTICS"
          title="Event Date, Time &amp; Venue"
          subtitle="Mark your calendar and plan your visit to South India's premier international AI &amp; robotics conclave at CODISSIA, Coimbatore."
        />

        {/* Live Countdown Timer */}
        <div className="countdown-card">
          <div className="countdown-header">
            <span className="countdown-badge">COUNTDOWN TO CONCLAVE 2027</span>
            <h3 className="countdown-title">5 &amp; 6 February 2027 • Opening In</h3>
          </div>
          <div className="countdown-timer-grid" role="timer" aria-label="Countdown to AI & Robotics Conclave 2027">
            <div className="time-unit-box">
              <span className="time-value">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="time-label">DAYS</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit-box">
              <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="time-label">HOURS</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit-box">
              <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="time-label">MINUTES</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit-box">
              <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="time-label">SECONDS</span>
            </div>
          </div>
        </div>

        {/* 4 Quick Facts Cards */}
        <div className="quick-facts-grid">
          {quickFacts.map((fact) => (
            <div key={fact.id} className="quick-fact-card">
              <div className="fact-icon-wrap">
                <Icon name={fact.icon} size={24} />
              </div>
              <div className="fact-content">
                <span className="fact-label">{fact.label}</span>
                <h4 className="fact-val">{fact.value}</h4>
                <p className="fact-sub">{fact.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Venue Spotlight & Connectivity */}
        <div className="venue-detail-card" id="venue">
          <div className="venue-info-side">
            <span className="venue-spotlight-badge">OFFICIAL VENUE</span>
            <h3 className="venue-main-title">{contactInfo.venue.name}</h3>
            <p className="venue-address">
              {contactInfo.venue.address}, {contactInfo.venue.city}, {contactInfo.venue.state} - {contactInfo.venue.pincode}, {contactInfo.venue.country}
            </p>
            <p className="venue-narrative">
              CODISSIA Trade Fair Complex is one of India&apos;s foremost multi-purpose exhibition centers, housing state-of-the-art pillar-free demonstration halls, extensive conference convention auditoriums, heavy machinery load facilities, and high-capacity attendee logistics.
            </p>

            <div className="connectivity-list">
              <div className="connectivity-item">
                <span className="conn-icon">✈️</span>
                <div>
                  <strong>Coimbatore International Airport (CJB)</strong>
                  <span>Approx. 3 km / 8 mins via Avinashi Road</span>
                </div>
              </div>
              <div className="connectivity-item">
                <span className="conn-icon">🚆</span>
                <div>
                  <strong>Coimbatore Junction (CBE Railway)</strong>
                  <span>Approx. 8.5 km / 20 mins</span>
                </div>
              </div>
              <div className="connectivity-item">
                <span className="conn-icon">🚗</span>
                <div>
                  <strong>National Highway Access</strong>
                  <span>Direct frontage on Salem-Kochi Highway (NH 544)</span>
                </div>
              </div>
            </div>

            <div className="venue-action-row">
              <a
                href="https://maps.google.com/?q=CODISSIA+Trade+Fair+Complex+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-venue-directions"
              >
                <span>View on Google Maps</span>
                <Icon name="external" size={16} />
              </a>
            </div>
          </div>

          <div className="venue-visual-side">
            <div className="venue-visual-frame">
              <div className="venue-map-placeholder">
                <div className="pin-radar">
                  <div className="radar-ping" />
                  <div className="pin-icon-wrap">
                    <Icon name="mapPin" size={32} />
                  </div>
                </div>
                <div className="map-caption-box">
                  <span className="map-city-tag">Coimbatore, Tamil Nadu</span>
                  <strong className="map-venue-tag">CODISSIA Fair Grounds</strong>
                  <span className="map-hours-tag">Hours: 10:00 AM – 08:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
