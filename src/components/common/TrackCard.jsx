import Icon from './Icon.jsx';
import './TrackCard.css';

export default function TrackCard({ icon, title, category, description }) {
  return (
    <div className="track-card">
      <div className="track-card-header">
        <div className="track-icon-wrapper">
          <Icon name={icon} size={24} />
        </div>
        <span className="track-category">{category}</span>
      </div>
      <h3 className="track-title">{title}</h3>
      <p className="track-description">{description}</p>
      <div className="track-indicator">
        <span className="track-status-dot" aria-hidden="true" />
        <span className="track-status-text">Application Domain</span>
      </div>
    </div>
  );
}
