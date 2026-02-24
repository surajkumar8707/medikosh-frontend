import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    rating: 5,
    text: "Amazing doctors and staff. They made my recovery journey comfortable and stress-free.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Patient",
    rating: 5,
    text: "Very supportive team. The hospital facilities are world-class and the care is exceptional.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Patient",
    rating: 5,
    text: "Professional and compassionate care. They exceeded all my expectations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Patient",
    rating: 5,
    text: "The medical team was incredible. They explained everything clearly and made me feel at ease.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Patient",
    rating: 5,
    text: "Outstanding service from start to finish. Truly a patient-centered approach.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Patient",
    rating: 5,
    text: "The facilities are state-of-the-art and the staff is incredibly attentive.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    name: "Olivia Martinez",
    role: "Patient",
    rating: 5,
    text: "Exceptional care and follow-up. They genuinely care about patient wellbeing.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    name: "Robert Kim",
    role: "Patient",
    rating: 5,
    text: "Quick response time and excellent treatment. Highly recommended!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 9,
    name: "Sophia Lee",
    role: "Patient",
    rating: 5,
    text: "The doctors took time to listen and address all my concerns thoroughly.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 10,
    name: "Thomas Brown",
    role: "Patient",
    rating: 5,
    text: "Clean, modern facility with a warm and welcoming atmosphere.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 11,
    name: "Maria Garcia",
    role: "Patient",
    rating: 5,
    text: "Professional, efficient, and kind. Everything you want in healthcare.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 12,
    name: "Daniel Miller",
    role: "Patient",
    rating: 5,
    text: "From admission to discharge, the experience was flawless. Thank you!",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const autoplayRef = useRef(null);
  const sectionRef = useRef(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Calculate items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalSlides]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalSlides]);

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && !isAnimating) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, nextSlide, isAnimating]);

  // Pause autoplay on hover
  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);

  // Touch events for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <FaStar key={i} className="star-icon" />
    ));
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <>
      <style jsx>{`
        .testimonials-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 5rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeIn 1s ease-out;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 2.8rem);
          color: #1e293b;
          margin-bottom: 1rem;
          font-weight: 700;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: clamp(1rem, 2vw, 1.1rem);
          color: #64748b;
          max-width: 600px;
          margin: 1.5rem auto 0;
          line-height: 1.6;
          padding: 0 1rem;
        }

        .testimonials-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          margin-bottom: 2rem;
          touch-action: pan-y;
        }

        .testimonials-slider {
          display: grid;
          grid-template-columns: repeat(${itemsPerSlide}, 1fr);
          gap: clamp(1rem, 2vw, 2rem);
          flex: 1;
          transition: opacity 0.5s ease;
        }

        .testimonials-slider.animating {
          opacity: 0.7;
        }

        .testimonial-card {
          background: white;
          border-radius: 20px;
          padding: clamp(1.5rem, 3vw, 2.5rem);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          animation: slideUp 0.6s ease-out;
          animation-fill-mode: both;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 20px 20px 0 0;
        }

        .testimonial-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .quote-icon {
          color: #3b82f6;
          font-size: clamp(1.5rem, 3vw, 2rem);
          opacity: 0.2;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover .quote-icon {
          opacity: 0.4;
          transform: scale(1.1);
        }

        .rating {
          display: flex;
          gap: 0.2rem;
          flex-wrap: wrap;
        }

        .star-icon {
          color: #fbbf24;
          font-size: clamp(1rem, 2vw, 1.2rem);
          filter: drop-shadow(0 2px 4px rgba(251, 191, 36, 0.3));
          animation: starTwinkle 2s ease-in-out infinite;
        }

        .testimonial-text {
          color: #475569;
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-style: italic;
          position: relative;
          padding-left: 1rem;
          flex-grow: 1;
        }

        .testimonial-text::before {
          content: '"';
          position: absolute;
          left: -10px;
          top: -10px;
          font-size: 3rem;
          color: #3b82f6;
          opacity: 0.1;
          font-family: Georgia, serif;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: clamp(50px, 8vw, 60px);
          height: clamp(50px, 8vw, 60px);
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover .author-avatar {
          border-color: #3b82f6;
          transform: scale(1.05);
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #1e293b;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .author-role {
          color: #64748b;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          font-weight: 500;
        }

        .separator {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
          margin-top: 1.5rem;
        }

        .slider-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .slider-btn {
          background: white;
          border: none;
          width: clamp(40px, 8vw, 50px);
          height: clamp(40px, 8vw, 50px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #3b82f6;
          z-index: 2;
        }

        .slider-btn:hover {
          background: #3b82f6;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        .slider-btn:active {
          transform: scale(0.95);
        }

        .slider-btn.autoplay-btn {
          background: #3b82f6;
          color: white;
        }

        .slider-btn.autoplay-btn:hover {
          background: #2563eb;
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .dot {
          width: clamp(8px, 2vw, 12px);
          height: clamp(8px, 2vw, 12px);
          border-radius: 50%;
          border: none;
          background: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          background: #94a3b8;
          transform: scale(1.2);
        }

        .dot.active {
          background: #3b82f6;
          transform: scale(1.3);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .review-counter {
          text-align: center;
          margin-top: 1.5rem;
          font-size: clamp(0.9rem, 2vw, 1rem);
          color: #64748b;
          font-weight: 500;
        }

        .review-counter .current {
          color: #3b82f6;
          font-weight: 700;
          font-size: clamp(1rem, 2vw, 1.2rem);
        }

        .review-counter .total {
          color: #94a3b8;
        }

        .mobile-swipe-hint {
          display: none;
          text-align: center;
          color: #64748b;
          font-size: 0.9rem;
          margin-top: 1rem;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes starTwinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        /* Background decoration */
        .testimonials-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .testimonials-section {
            padding: 4rem 1.5rem;
          }
          
          .testimonials-container {
            gap: 0.8rem;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 3rem 1rem;
          }
          
          .section-header {
            margin-bottom: 2rem;
          }
          
          .testimonials-container {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .slider-btn {
            position: static;
          }
          
          .slider-controls {
            margin-top: 1rem;
          }
          
          .mobile-swipe-hint {
            display: block;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .testimonials-section {
            padding: 2rem 0.8rem;
          }
          
          .testimonial-card {
            padding: 1.2rem;
          }
          
          .testimonial-text {
            padding-left: 0.5rem;
            margin-bottom: 1.5rem;
          }
          
          .testimonial-author {
            gap: 0.8rem;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .testimonials-section {
            padding: 2rem 1rem;
          }
          
          .testimonial-card {
            padding: 1.2rem;
          }
        }

        /* Hover effects for touch devices */
        @media (hover: none) {
          .testimonial-card:hover {
            transform: none;
          }
          
          .slider-btn:hover {
            transform: none;
          }
        }
      `}</style>

      <section 
        className="testimonials-section"
        ref={sectionRef}
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Patient Testimonials</h2>
            <p className="section-subtitle">Hear what our patients say about their experience</p>
          </div>

          <div className="testimonials-container">
            <div className={`testimonials-slider ${isAnimating ? 'animating' : ''}`}>
              {getVisibleTestimonials().map((testimonial, index) => (
                <div 
                  className="testimonial-card" 
                  key={testimonial.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="testimonial-header">
                    <div className="quote-icon">
                      <FaQuoteLeft />
                    </div>
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <p className="testimonial-text">{testimonial.text}</p>
                  
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="author-avatar"
                      loading="lazy"
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="separator"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="slider-controls">
            <button 
              className="slider-btn" 
              onClick={prevSlide}
              aria-label="Previous testimonials"
            >
              <FaChevronLeft />
            </button>

            <button 
              className={`slider-btn autoplay-btn`}
              onClick={() => setAutoplay(!autoplay)}
              aria-label={autoplay ? "Pause autoplay" : "Start autoplay"}
            >
              {autoplay ? <FaPause /> : <FaPlay />}
            </button>

            <button 
              className="slider-btn" 
              onClick={nextSlide}
              aria-label="Next testimonials"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="slider-dots">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Review Counter */}
          <div className="review-counter">
            <span className="current">
              {currentSlide * itemsPerSlide + 1}-
              {Math.min((currentSlide + 1) * itemsPerSlide, testimonials.length)}
            </span>
            <span className="total"> of {testimonials.length} Reviews</span>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="mobile-swipe-hint">
            ← Swipe to navigate →
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;