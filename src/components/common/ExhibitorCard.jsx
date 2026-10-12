import './ExhibitorCard.css';

export default function ExhibitorCard({ slot, category = 'AI & Robotics Sector' }) {
  return (
    <div className="exhibitor-placeholder-card">
      <div className="exhibitor-logo-placeholder">
        <div className="placeholder-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </div>
        <span className="exhibitor-badge">Booth Slot {slot}</span>
      </div>
      <div className="exhibitor-content">
        <h4 className="exhibitor-name">Organization Slot {slot}</h4>
        <span className="exhibitor-cat">{category}</span>
        <div className="exhibitor-status-pill">
          <span className="status-dot-pulse" aria-hidden="true" />
          Registration Opening Soon
        </div>
      </div>
    </div>
  );
}
