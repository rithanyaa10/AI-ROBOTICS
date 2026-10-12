import Icon from './Icon.jsx';
import './HighlightCard.css';

export default function HighlightCard({ icon, title, description, tag }) {
  return (
    <div className="highlight-card">
      <div className="highlight-card-top">
        <div className="highlight-icon-box">
          <Icon name={icon} size={28} />
        </div>
        {tag && <span className="highlight-tag">{tag}</span>}
      </div>
      <h3 className="highlight-card-title">{title}</h3>
      <p className="highlight-card-desc">{description}</p>
      <div className="highlight-card-bottom-accent" aria-hidden="true" />
    </div>
  );
}
