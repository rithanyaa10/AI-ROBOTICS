import { useState, useEffect, useRef, useCallback } from 'react';
import { heroSlides } from '../../data/heroSlides.js';
import './HeroCarousel.css';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const totalSlides = heroSlides.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Respect prefers-reduced-motion changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => { if (e.matches) setIsPlaying(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(goToNext, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, goToNext]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goToPrev();
    else if (e.key === 'ArrowRight') goToNext();
    else if (e.key === 'Home') goToSlide(0);
    else if (e.key === 'End') goToSlide(totalSlides - 1);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div
        className="hero-viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label="Event highlights carousel"
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
      >
        {/* Slide Track — poster banners displayed with top navbar cropped out */}
        <div className="hero-slides-track">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`hero-slide ${isActive ? 'active' : ''}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${totalSlides}: ${slide.title}`}
                aria-hidden={!isActive}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="hero-slide-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <button
          type="button"
          className="hero-control hero-control-prev"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button
          type="button"
          className="hero-control hero-control-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        {/* Indicators */}
        <div className="hero-indicators">
          <div className="hero-dots" role="tablist" aria-label="Slide selection">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                className={`hero-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-selected={index === currentIndex}
                aria-label={`Go to slide ${index + 1}`}
                tabIndex={index === currentIndex ? 0 : -1}
              />
            ))}
          </div>
          <button
            type="button"
            className="hero-play-pause"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><polygon points="5,3 19,12 5,21"/></svg>
            )}
          </button>
        </div>

        {/* Live region for screen readers */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {currentIndex + 1} of {totalSlides}: {heroSlides[currentIndex].title}
        </div>
      </div>

      {/* Action Bar — positioned directly below the banner, clear of all graphics */}
      <div className="hero-action-bar">
        <div className="hero-action-container">
          <div className="hero-action-meta">
            <div className="hero-meta-badge">
              <span className="hero-badge-dot" />
              <strong>5 &amp; 6 February 2027</strong>
            </div>
            <div className="hero-meta-divider" />
            <div className="hero-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>CODISSIA, Coimbatore</span>
            </div>
            <div className="hero-meta-divider" />
            <div className="hero-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>10:00 AM – 08:00 PM</span>
            </div>
          </div>

          <div className="hero-action-buttons">
            <a
              href="#register"
              className="hero-action-btn hero-action-primary"
              onClick={(e) => { e.preventDefault(); scrollTo('register'); }}
            >
              Register Your Interest
            </a>
            <a
              href="#highlights"
              className="hero-action-btn hero-action-secondary"
              onClick={(e) => { e.preventDefault(); scrollTo('highlights'); }}
            >
              Explore Highlights
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
