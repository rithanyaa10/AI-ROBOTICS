import './SectionTitle.css';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  return (
    <div className={`section-header-block text-${align} ${className}`}>
      {badge && <div className="section-badge">{badge}</div>}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subheading">{subtitle}</p>}
    </div>
  );
}
