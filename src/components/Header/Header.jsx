import { useState, useEffect } from 'react';
import Link from '../../router/Link.jsx';
import { useRouter } from '../../router/RouterContext.jsx';
import { navItems } from '../../data/navigation.js';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo & Title */}
        <Link 
          href="/" 
          className="brand-link" 
          aria-label="AI & Robotics International Conclave & Expo 2027 Homepage"
          onClick={closeMenu}
        >
          <div className="brand-logo-wrapper">
            <img 
              src="/assets/logos/Screenshot 2026-09-22 142243.png" 
              alt="AI & Robotics Official Emblem" 
              className="brand-emblem"
              width="44"
              height="50"
            />
          </div>
          <div className="brand-text">
            <span className="brand-title">AI &amp; ROBOTICS</span>
            <span className="brand-subtitle">CONCLAVE &amp; EXPO 2027</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Primary Navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <li key={item.id} className="nav-item">
                  <Link
                    href={item.path}
                    className={`nav-link ${item.isHighlight ? 'nav-link-register' : ''} ${
                      isActive ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="hamburger-bar" aria-hidden="true"></span>
          <span className="hamburger-bar" aria-hidden="true"></span>
          <span className="hamburger-bar" aria-hidden="true"></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        id="mobile-navigation" 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'visible' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div 
          className="mobile-menu-backdrop" 
          onClick={closeMenu}
          tabIndex={-1}
          aria-hidden="true"
        />
        <nav className="mobile-nav-panel" aria-label="Mobile Navigation">
          <div className="mobile-nav-header">
            <div className="mobile-brand">
              <img 
                src="/assets/logos/Screenshot 2026-09-22 142243.png" 
                alt="" 
                className="brand-emblem-small"
                width="34"
                height="38"
                aria-hidden="true"
              />
              <span className="mobile-brand-name">AI &amp; ROBOTICS 2027</span>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              &times;
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <li key={item.id} className="mobile-nav-item">
                  <Link
                    href={item.path}
                    className={`mobile-nav-link ${item.isHighlight ? 'mobile-nav-register' : ''} ${
                      isActive ? 'active' : ''
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mobile-menu-footer">
            <p className="mobile-event-dates">5 &amp; 6 February 2027</p>
            <p className="mobile-event-venue">CODISSIA, Coimbatore</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
