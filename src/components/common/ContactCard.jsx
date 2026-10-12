import Icon from './Icon.jsx';
import './ContactCard.css';

export default function ContactCard({ icon, label, title, subtitle, actionText, actionLink }) {
  return (
    <div className="contact-info-card">
      <div className="contact-icon-frame">
        <Icon name={icon} size={24} />
      </div>
      <div className="contact-card-body">
        <span className="contact-label">{label}</span>
        <h4 className="contact-title">{title}</h4>
        {subtitle && <p className="contact-subtitle">{subtitle}</p>}
        {actionLink && (
          <a href={actionLink} className="contact-action-link">
            {actionText || 'Connect'} &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
