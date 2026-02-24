import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutSection = () => {
  const icons = [
    { id: 1, name: 'Science', icon: '🔬', description: 'Science-Backed Formulas' },
    { id: 2, name: 'Quality', icon: '⭐', description: 'Premium Quality' },
    { id: 3, name: 'Trust', icon: '🤝', description: 'Trusted by Healthcare Professionals' },
    { id: 4, name: 'Access', icon: '🌍', description: 'Accessible Nutrition' },
  ];

  useEffect(() => {
    // Only keep scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-4 py-md-5 bg-light overflow-hidden">
      <div className="container px-3 px-md-4 px-lg-5">
        {/* Section Header */}
        <div className="text-center mb-4 mb-md-5 animate-on-scroll opacity-0">
          <h2 className="display-6 display-md-5 fw-bold mb-3">
            <div className="animate-text">Premium Nutraceuticals,</div>
            <div className="text-primary animate-text animate-delay-1">Powered by Science</div>
          </h2>
          <div 
            className="mx-auto" 
            style={{ 
              width: '80px', 
              height: '3px', 
              backgroundColor: '#0d6efd' 
            }}
          ></div>
        </div>

        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Column - Text Content */}
          <div className="col-lg-6 animate-on-scroll opacity-0">
            <div className="pe-lg-4">
              <div className="mb-3 mb-md-4">
                <p className="fs-6 fs-md-5 lh-lg">
                  Medikosh Nutria is a premium nutraceutical company in India and a subsidiary of 
                  <span className="fw-bold text-primary"> Medikosh Healthovation Private Limited</span>. 
                  We were founded with a clear vision—to make reliable, science-based nutrition accessible to more people.
                </p>
                
                <p className="fs-6 fs-md-5 mt-3 mt-md-4 lh-lg">
                  This vision came from years of hands-on experience in healthcare, where our team saw patients struggling with poor-quality supplements, confusing choices, and inconsistent results.
                </p>
                
                <p className="fs-6 fs-md-5 mt-3 mt-md-4 fw-medium lh-lg">
                  Medikosh Nutria was created to bridge that gap with products people can genuinely trust.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Icons Grid */}
          <div className="col-lg-6 animate-on-scroll opacity-0">
            <div className="row row-cols-1 row-cols-sm-2 g-2 g-md-3">
              {icons.map((icon) => (
                <div key={icon.id} className="col">
                  <div className="text-center p-2 p-sm-2 p-md-3 h-100 icon-card">
                    <div className="d-inline-flex align-items-center justify-content-center mb-1 mb-md-2">
                      <div className="bg-primary bg-opacity-10 rounded-circle p-2 p-sm-2 p-md-3">
                        <span className="fs-2 fs-md-1">{icon.icon}</span>
                      </div>
                    </div>
                    <h4 className="h6 h5-md mb-0 mb-md-1 fw-bold">{icon.name}</h4>
                    <p className="text-muted mb-0 small px-0 px-sm-1">{icon.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Responsive Typography */
        .display-6 {
          font-size: calc(1.5rem + 0.9vw);
        }
        
        .fs-md-5 {
          font-size: calc(1rem + 0.2vw);
        }
        
        .fs-md-1 {
          font-size: calc(1.5rem + 0.9vw);
        }
        
        .h5-md {
          font-size: calc(1rem + 0.1vw);
        }
        
        @media (min-width: 768px) {
          .display-md-5 {
            font-size: calc(1.425rem + 2.1vw);
          }
        }
        
        /* Icon hover effects */
        .icon-card {
          transition: all 0.3s ease;
          border-radius: 12px;
          background: transparent;
        }
        
        .icon-card:hover {
          transform: translateY(-5px);
          background: rgba(13, 110, 253, 0.05);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.1);
        }
        
        @media (max-width: 768px) {
          .icon-card:hover {
            transform: translateY(-3px);
          }
        }
        
        /* Text fade in animation (only for scroll) */
        .animate-on-scroll {
          transition: opacity 0.6s ease;
        }
        
        .animate-delay-1 {
          animation-delay: 0.3s;
        }
        
        .animate-delay-2 {
          animation-delay: 0.6s;
        }
        
        /* Responsive spacing for icons - REDUCED PADDING */
        @media (max-width: 576px) {
          .icon-card {
            padding: 0.25rem !important; /* Reduced from 0.5rem */
          }
          
          .icon-card .rounded-circle {
            padding: 0.25rem !important; /* Reduced from 0.5rem */
          }
          
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Reduce gap between rows on mobile */
          .g-2 {
            --bs-gutter-x: 0.5rem;
            --bs-gutter-y: 0.5rem;
          }
        }
        
        @media (min-width: 577px) and (max-width: 768px) {
          .icon-card {
            padding: 0.5rem !important; /* Reduced from 0.75rem */
          }
          
          .icon-card .rounded-circle {
            padding: 0.5rem !important; /* Reduced from 0.75rem */
          }
        }
        
        /* Desktop adjustments */
        @media (min-width: 769px) {
          .icon-card {
            padding: 1rem !important; /* Reduced from 1.5rem */
          }
          
          .icon-card .rounded-circle {
            padding: 0.75rem !important; /* Reduced from 1rem */
          }
        }
        
        /* Line height adjustments */
        .lh-lg {
          line-height: 1.7;
        }
        
        @media (max-width: 768px) {
          .lh-lg {
            line-height: 1.6;
          }
          
          .icon-card p {
            font-size: 0.85rem;
          }
        }
        
        /* Ensure smooth transitions on all devices */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .icon-card,
          .animate-on-scroll {
            transition: none;
          }
          
          .icon-card:hover {
            transform: none;
          }
        }
        
        /* Extra small devices */
        @media (max-width: 375px) {
          .icon-card .rounded-circle {
            padding: 0.2rem !important; /* Reduced from 0.4rem */
          }
          
          .icon-card span {
            font-size: 1.5rem;
          }
          
          .icon-card h4 {
            font-size: 0.9rem;
          }
          
          .icon-card p {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;