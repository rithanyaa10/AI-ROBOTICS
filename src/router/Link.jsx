import { useRouter } from './RouterContext.jsx';

export default function Link({ href, className = '', children, onClick, ...props }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    // Let browser handle modifier clicks (cmd/ctrl/shift click for new tabs)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.button && e.button !== 0)) {
      return;
    }

    if (props.target === '_blank') {
      return;
    }

    if (href && (href.startsWith('/') || href.startsWith('#'))) {
      e.preventDefault();
      navigate(href);
      if (onClick) onClick(e);
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
