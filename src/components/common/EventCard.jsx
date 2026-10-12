import './EventCard.css';

export default function EventCard({
  category,
  title,
  overview,
  statusNotice = 'Coming Soon',
  badge,
}) {
  return (
    <div className="event-item-card">
      <div className="event-item-meta">
        {category && <span className="event-item-category">{category}</span>}
        {badge && <span className="event-item-badge">{badge}</span>}
      </div>
      <h3 className="event-item-title">{title}</h3>
      {overview && <p className="event-item-overview">{overview}</p>}
      <div className="event-item-footer">
        <span className="event-status-pill">{statusNotice}</span>
      </div>
    </div>
  );
}
