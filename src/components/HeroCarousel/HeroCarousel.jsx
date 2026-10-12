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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Subscribe to prefers-reduced-motion system changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => {
      if (e.matches) {
        setIsPlaying(false);
      }
    };
    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // Autoplay management
  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(goToNext, 5500);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, isHovered, goToNext]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'Home') {
      goToSlide(0);
    } else if (e.key === 'End') {
      goToSlide(totalSlides - 1);
    }
  };

  return (
    <section
      id="home"
      className="hero-carousel-section"
      role="region"
      aria-roledescription="carousel"
      aria-label="AI & Robotics 2027 Highlights Carousel"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      <div className="carousel-container">
        {/* Slides Track */}
        <div className="carousel-track">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`carousel-slide ${isActive ? 'active' : ''}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${totalSlides}: ${slide.title}`}
                aria-hidden={!isActive}
              >
                <div className="slide-image-wrapper">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="slide-image"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Gradient Accents (Subtle top & bottom blend for seamless header integration) */}
        <div className="carousel-overlay-top" aria-hidden="true" />
        <div className="carousel-overlay-bottom" aria-hidden="true" />

        {/* Navigation Arrow Controls */}
        <button
          type="button"
          className="carousel-control-btn control-prev"
          onClick={goToPrev}
          aria-label="Previous Slide"
        >
          <svg
            className="control-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          className="carousel-control-btn control-next"
          onClick={goToNext}
          aria-label="Next Slide"
        >
          <svg
            className="control-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Bottom Pagination & Control Bar */}
        <div className="carousel-indicators-wrapper">
          <div className="carousel-indicators" role="tablist" aria-label="Slide Selection">
            {heroSlides.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  className={`indicator-dot ${isActive ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-selected={isActive}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  tabIndex={isActive ? 0 : -1}
                >
                  <span className="dot-inner" />
                </button>
              );
            })}
          </div>

          {/* Accessible Play/Pause Toggle */}
          <button
            type="button"
            className="carousel-play-pause-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause auto-sliding' : 'Start auto-sliding'}
            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </button>
        </div>

        {/* Live region for screen readers */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {currentIndex + 1} of {totalSlides}: {heroSlides[currentIndex].title}
        </div>
      </div>
    </section>
  );
}
