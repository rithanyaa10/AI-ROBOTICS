import { useState, useEffect, useCallback } from 'react';
import { navItems } from '../../data/navigation.js';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map(item => item.id);
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  // Close mobile menu on Escape
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
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const scrollToSection = useCallback((e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  }, [closeMenu]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand */}
        <a
          href="#home"
          className="brand-link"
          aria-label="AI & Robotics International Conclave & Expo 2027 — Home"
          onClick={(e) => scrollToSection(e, '#home')}
        >
          <div className="brand-logo-wrapper">
            <img
              src="/assets/logos/Screenshot 2026-09-22 142243.png"
              alt="AI & Robotics Official Emblem"
              className="brand-emblem"
              width="42"
              height="48"
            />
          </div>
          <div className="brand-text">
            <span className="brand-title">AI &amp; ROBOTICS</span>
            <span className="brand-subtitle">CONCLAVE &amp; EXPO 2027</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Primary Navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${item.isHighlight ? 'nav-link-register' : ''} ${isActive ? 'active' : ''}`}
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Toggle */}
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

      {/* Mobile Drawer */}
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
                width="30"
                height="34"
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
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="mobile-nav-item">
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${item.isHighlight ? 'mobile-nav-register' : ''} ${isActive ? 'active' : ''}`}
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.label}
                  </a>
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
