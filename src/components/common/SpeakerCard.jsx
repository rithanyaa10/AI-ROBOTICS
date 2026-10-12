import './SpeakerCard.css';

export default function SpeakerCard({ number }) {
  return (
    <div className="speaker-placeholder-card">
      <div className="speaker-avatar-frame">
        <div className="speaker-avatar-silhouette" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <span className="speaker-slot-number">Speaker Slot {number}</span>
      </div>

      <div className="speaker-info">
        <div className="speaker-status-tag">Announcement Coming Soon</div>
        <h3 className="speaker-name-placeholder">Keynote Speaker</h3>
        
        <div className="speaker-field-row">
          <span className="field-label">Designation:</span>
          <span className="field-val">To Be Announced</span>
        </div>
        <div className="speaker-field-row">
          <span className="field-label">Organization:</span>
          <span className="field-val">To Be Announced</span>
        </div>
        <div className="speaker-field-row">
          <span className="field-label">Country:</span>
          <span className="field-val">Global Delegation</span>
        </div>
        <div className="speaker-field-row topic-row">
          <span className="field-label">Topic:</span>
          <span className="field-val highlight">AI &amp; Robotics Keynote Session</span>
        </div>
      </div>
    </div>
  );
}
