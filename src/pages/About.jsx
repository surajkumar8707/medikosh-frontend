import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import {
  FaUsers,
  FaSmile,
  FaAward,
  FaHeartbeat,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaFlask,
  FaShieldAlt,
  FaLeaf,
  FaStar,
  FaUserMd,
  FaMicroscope,
} from "react-icons/fa";

const About = () => {
  // Counter State
  const [count, setCount] = useState({
    patients: 0,
    doctors: 0,
    awards: 0,
    experience: 0,
  });

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Counter Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        patients: prev.patients < 500 ? prev.patients + 5 : 500,
        doctors: prev.doctors < 50 ? prev.doctors + 1 : 50,
        awards: prev.awards < 25 ? prev.awards + 1 : 25,
        experience: prev.experience < 15 ? prev.experience + 1 : 15,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Visibility effect for animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Testimonials Data
  const testimonials = [
    {
      text: "Best service ever! The doctors were very professional and caring.",
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "Amazing doctors and staff. They made my recovery journey comfortable.",
      name: "Michael Chen",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Very supportive team. The hospital facilities are world-class.",
      name: "Emma Williams",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      text: "Great experience overall. Would definitely recommend to others.",
      name: "Robert Davis",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      text: "Highly recommended hospital. The care I received was exceptional.",
      name: "Lisa Thompson",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
  ];

  // Mission & Vision Cards - Updated for compact size
  const missionCards = [
    {
      icon: <FaFlask />,
      title: "Scientific Integrity",
      description: "Research-guided formulations",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Without Compromise",
      description: "Rigorous manufacturing standards",
      gradient: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)"
    },
    {
      icon: <FaLeaf />,
      title: "Transparency First",
      description: "Clear labeling & honest communication",
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)"
    },
    {
      icon: <FaUserMd />,
      title: "Customer Wellbeing",
      description: "Products for real health needs",
      gradient: "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)"
    },
    {
      icon: <FaMicroscope />,
      title: "Evidence-Based",
      description: "Research-backed formulations",
      gradient: "linear-gradient(135deg, #FF512F 0%, #DD2476 100%)"
    },
    
  ];

  // Slider navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <style>{`
        * {
          font-family: 'Helvetica', 'Arial', sans-serif !important;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        
        .text-purple {
          color: #6f42c1;
        }
        
        .bg-purple-light {
          background: linear-gradient(135deg, rgba(111, 66, 193, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%);
        }
        
        .transition-all {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .opacity-0 {
          opacity: 0;
        }
        
        .opacity-100 {
          opacity: 1;
        }
        
        .counter-item {
          transition: all 0.5s ease;
        }
        
        .counter-item:hover {
          transform: scale(1.05);
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .card-hover-effect {
          position: relative;
          overflow: hidden;
        }
        
        .card-hover-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: 0.5s;
        }
        
        .card-hover-effect:hover::before {
          left: 100%;
        }

        /* Responsive icon sizes */
        .responsive-icon-sm {
          width: 1.5rem;
          height: 1.5rem;
        }
        
        .responsive-icon-md {
          width: 2rem;
          height: 2rem;
        }
        
        .responsive-icon-lg {
          width: 3rem;
          height: 3rem;
        }
        
        .responsive-icon-xl {
          width: 3.5rem;
          height: 3.5rem;
        }
        
        @media (min-width: 768px) {
          .responsive-icon-sm {
            width: 1.75rem;
            height: 1.75rem;
          }
          
          .responsive-icon-md {
            width: 2.25rem;
            height: 2.25rem;
          }
          
          .responsive-icon-lg {
            width: 3.5rem;
            height: 3.5rem;
          }
          
          .responsive-icon-xl {
            width: 4rem;
            height: 4rem;
          }
        }
        
        @media (min-width: 992px) {
          .responsive-icon-sm {
            width: 2rem;
            height: 2rem;
          }
          
          .responsive-icon-md {
            width: 2.5rem;
            height: 2.5rem;
          }
          
          .responsive-icon-lg {
            width: 4rem;
            height: 4rem;
          }
          
          .responsive-icon-xl {
            width: 5rem;
            height: 5rem;
          }
        }
        
        .bg-overlay {
          position: relative;
        }
        
        .bg-overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
        
        .bg-overlay-light::before {
          background-color: rgba(255, 255, 255, 0.9);
        }
        
        .bg-overlay-content {
          position: relative;
          z-index: 2;
        }
        
        /* Helvetica styles */
        body, h1, h2, h3, h4, h5, h6, p, span, button, small, li, .card, .btn, div, section, a, input, textarea, label, .navbar, .footer {
          font-family: 'Helvetica', 'Arial', sans-serif !important;
        }

        /* Gradient backgrounds for sections */
        .section-gradient-1 {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .section-gradient-2 {
          background: linear-gradient(135deg, #6B73FF 0%, #000DFF 100%);
        }
        
        .section-gradient-3 {
          background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
        }
        
        .section-gradient-4 {
          background: linear-gradient(135deg, #00B4DB 0%, #0083B0 100%);
        }
        
        .section-gradient-5 {
          background: linear-gradient(135deg, #FF512F 0%, #DD2476 100%);
        }
        
        .section-gradient-6 {
          background: linear-gradient(135deg, #1D976C 0%, #93F9B9 100%);
        }
        
        .section-gradient-7 {
          background: linear-gradient(135deg, #FF61D2 0%, #FE8C68 100%);
        }

        .bg-gradient-custom {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        /* ===== NEW STYLES FOR COMPACT CARDS ===== */
        .compact-card {
          width: 180px;
          height: 200px;
          margin: 0 auto;
          border-radius: 16px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          border: none;
          color: white;
        }
        
        .compact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          filter: brightness(0.9);
          transition: all 0.4s ease;
          z-index: 0;
        }
        
        .compact-card > * {
          position: relative;
          z-index: 1;
        }
        
        .compact-card:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2) !important;
        }
        
        .compact-card:hover .compact-icon {
          animation: pulseGlow 1s infinite, float 2s infinite;
        }
        
        .compact-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          margin-bottom: 0.75rem;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        
        .compact-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          text-align: center;
          line-height: 1.2;
        }
        
        .compact-description {
          font-size: 0.7rem;
          text-align: center;
          opacity: 0.9;
          margin-bottom: 0;
          line-height: 1.3;
          font-weight: 400;
        }
        
        .card-grid-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: stretch;
          gap: 1.25rem;
          margin: 0 auto;
          padding: 0.5rem;
        }
        
        @media (max-width: 576px) {
          .compact-card {
            width: 160px;
            height: 190px;
          }
          .compact-icon {
            width: 40px;
            height: 40px;
            font-size: 1.25rem;
          }
          .compact-title {
            font-size: 0.9rem;
          }
          .compact-description {
            font-size: 0.65rem;
          }
        }
        
        @media (max-width: 380px) {
          .compact-card {
            width: 140px;
            height: 180px;
          }
        }
        
        .backdrop-blur {
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
        }
        
        .shine-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 80%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 2;
        }
        
        .compact-card:hover .shine-effect {
          opacity: 0.5;
        }

        /* Medical Blue button style */
        .btn-medical-blue {
          background-color: #2F7FBF;
          color: white;
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-medical-blue:hover {
          background-color: #1E5F8F;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(47, 127, 191, 0.3);
        }
      `}</style>

      <div>
        {/* ================= HEADER SECTION ================= */}
        <div
          className="d-flex align-items-center text-white section-gradient-1"
          style={{
            height: "400px",
            marginTop: "-80px",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div className="container position-relative z-1">
            <h1 
              className={`fw-bold m-0 text-white text-center display-4 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '200ms' }}
            >
              About Medikosh Nutria
            </h1>
            <p 
              className={`fw-bold m-0 text-white text-center mt-3 fs-5 opacity-90 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '400ms' }}
            >
              Science-Driven Nutrition for Everyday Wellness
            </p>
          </div>
        </div>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="container py-5">
          <div className="row align-items-center g-5">
            <div className={`col-lg-6 col-12 ${isVisible ? 'fade-in-left' : 'opacity-0'}`}>
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80"
                  alt="Medikosh Nutria Lab"
                  className="img-fluid rounded-4 shadow hover-lift"
                  style={{ transitionDelay: '300ms' }}
                />
                <div className="position-absolute bottom-0 start-0 bg-white p-3 rounded-3 shadow m-3">
                  <h5 className="fw-bold mb-0">15+ Years</h5>
                  <small className="text-muted">Combined Experience</small>
                </div>
              </div>
            </div>

            <div className={`col-lg-6 col-12 ${isVisible ? 'fade-in-right' : 'opacity-0'}`}>
              <h2 className="fw-bold mb-4 display-6">
                Premium Nutraceuticals, Powered by Science
              </h2>
              <div className="lead text-muted mb-4">
                <p>
                  Medikosh Nutria is a premium nutraceutical company in India and a subsidiary of 
                  <span className="fw-bold text-primary"> Medikosh Healthovation Private Limited</span>. 
                  We were founded with a clear vision—to make reliable, science-based nutrition 
                  accessible to more people.
                </p>
                <p>
                  This vision came from years of hands-on experience in healthcare, where our 
                  team saw patients struggling with poor-quality supplements, confusing choices, 
                  and inconsistent results.
                </p>
                <p className="fw-bold text-dark">
                  Medikosh Nutria was created to bridge that gap with products people can genuinely trust.
                </p>
              </div>
              {/* ===== ADDED LEARN MORE BUTTON - Medical Blue (#2F7FBF) with White Text ===== */}
              <button className="btn btn-medical-blue px-4 py-3 rounded-pill hover-lift fw-bold">
                Learn More →
              </button>
            </div>
          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="py-5 section-gradient-2 text-white">
          <div className="container">
            <div className="row g-5">
              <div className="col-12 text-center mb-5">
                <h2 className="fw-bold display-5 mb-3">Our Mission & Vision</h2>
                <p className="fs-5 max-w-3xl mx-auto text-white opacity-90">
                  Combining medical insight, nutritional science, and strict quality standards 
                  to deliver supplements people can rely on every day.
                </p>
              </div>
              
              <div className="col-lg-6">
                <div className="card border-0 shadow rounded-4 p-4 h-100 hover-lift bg-white">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                        <FaHeartbeat className="text-primary responsive-icon-lg" />
                      </div>
                      <h3 className="fw-bold mb-0">Our Mission</h3>
                    </div>
                    <p className="fs-5" style={{ color: '#666' }}>
                      To provide safe, effective, and clinically informed dietary supplements 
                      that help people live healthier lives.
                    </p>
                    <ul className="list-unstyled mt-4">
                      <li className="mb-3 d-flex align-items-start">
                        <FaStar className="text-warning me-2 mt-1 responsive-icon-sm" />
                        <span>Science-driven formulations</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <FaStar className="text-warning me-2 mt-1 responsive-icon-sm" />
                        <span>Rigorous quality control</span>
                      </li>
                      <li className="d-flex align-items-start">
                        <FaStar className="text-warning me-2 mt-1 responsive-icon-sm" />
                        <span>Patient-centric approach</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="card border-0 shadow rounded-4 p-4 h-100 hover-lift bg-white">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-4">
                      <div className="bg-success bg-opacity-10 p-3 rounded-3 me-3">
                        <FaUsers className="text-success responsive-icon-lg" />
                      </div>
                      <h3 className="fw-bold mb-0">Our Vision</h3>
                    </div>
                    <p className="fs-5" style={{ color: '#666' }}>
                      To become India's most trusted nutraceutical brand by making evidence-based 
                      nutrition accessible and understandable for everyone.
                    </p>
                    <ul className="list-unstyled mt-4">
                      <li className="mb-3 d-flex align-items-start">
                        <FaStar className="text-warning me-2 mt-1 responsive-icon-sm" />
                        <span>Accessible premium nutrition</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <FaStar className="text-warning me-2 mt-1 responsive-icon-sm" />
                        <span>Transparent communication</span>
                      </li>
                      <li className="d-flex align-items-start">
                        <FaStar className="text-warning me-2 mt-1 responsive-icon-sm" />
                        <span>Sustainable growth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHAT WE BELIEVE IN - REDESIGNED ================= */}
        <section className="py-4 bg-purple-light">
          <div className="container-fluid px-3 px-md-4 px-lg-5">
            <div className="row">
              <div className="col-12 text-center mb-4">
                <h2 className="fw-bold display-5 mb-3">What We Believe In</h2>
                <p className="text-muted fs-5 max-w-3xl mx-auto">
                  Good nutrition should be simple, honest, and effective. That belief shapes everything we do.
                </p>
              </div>
            </div>
            
            <div className="card-grid-container">
              {missionCards.map((card, index) => (
                <div 
                  key={index} 
                  className="compact-card shadow-lg"
                  style={{ 
                    background: card.gradient,
                    animation: `fadeInUp 0.6s ease-out ${index * 100}ms forwards`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="shine-effect"></div>
                  <div className="compact-icon">
                    {React.cloneElement(card.icon, { 
                      className: 'text-white', 
                      style: { fontSize: '1.75rem' } 
                    })}
                  </div>
                  <h5 className="compact-title text-white">{card.title}</h5>
                  <p className="compact-description text-white">{card.description}</p>
                  
                  {/* Eye-catching sparkle effect on hover */}
                  {hoveredIndex === index && (
                    <div className="position-absolute" style={{ top: '10px', right: '10px' }}>
                      <FaStar className="text-white" style={{ fontSize: '0.8rem', opacity: 0.8 }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHAT SETS US APART ================= */}
        <section className="bg-purple-light py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <h2 className="fw-bold display-6 mb-4">What Sets Us Apart</h2>
                <div className="lead text-muted">
                  <p className="mb-4">
                    At Medikosh Nutria, we focus on <span className="fw-bold text-dark">purposeful formulations</span> 
                    rather than generic blends. Each product is designed with specific health goals in mind.
                  </p>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-white p-2 rounded-3 shadow-sm me-3">
                          <FaAward className="text-warning responsive-icon-md" />
                        </div>
                        <span className="fw-semibold">GMP-Certified</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-white p-2 rounded-3 shadow-sm me-3">
                          <FaShieldAlt className="text-success responsive-icon-md" />
                        </div>
                        <span className="fw-semibold">ISO-Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="bg-white rounded-4 shadow p-5 hover-lift">
                  <h4 className="fw-bold mb-4">Our Quality Promise</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-start">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-3 me-3">
                        <FaStar className="text-primary responsive-icon-sm" />
                      </div>
                      <div>
                        <h6 className="fw-bold">Third-Party Tested</h6>
                        <p className="text-muted small mb-0">Every batch verified for purity and potency</p>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <div className="bg-success bg-opacity-10 p-2 rounded-3 me-3">
                        <FaLeaf className="text-success responsive-icon-sm" />
                      </div>
                      <div>
                        <h6 className="fw-bold">Bioavailable Ingredients</h6>
                        <p className="text-muted small mb-0">Enhanced absorption for better results</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-start">
                      <div className="bg-warning bg-opacity-10 p-2 rounded-3 me-3">
                        <FaFlask className="text-warning responsive-icon-sm" />
                      </div>
                      <div>
                        <h6 className="fw-bold">Clinical Insight</h6>
                        <p className="text-muted small mb-0">Formulations based on real healthcare experience</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        {/* ================= OUR TEAM ================= */}
        <section className="container py-5">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold display-5 mb-3">Our Expert Team</h2>
              <p className="text-muted fs-5 max-w-3xl mx-auto">
                Supported by healthcare professionals, nutritionists, and quality experts with 
                more than 15 years of combined experience in patient care and wellness management.
              </p>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow rounded-4 overflow-hidden hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
                  alt="Medical Team"
                  className="img-fluid"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="fw-bold">Clinical Experience</h5>
                  <p className="text-muted mb-0">
                    Real-world healthcare insights driving our formulations
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow rounded-4 overflow-hidden hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                  alt="Research Team"
                  className="img-fluid"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="fw-bold">Research Excellence</h5>
                  <p className="text-muted mb-0">
                    Evidence-based approach to product development
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow rounded-4 overflow-hidden hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80"
                  alt="Quality Team"
                  className="img-fluid"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="fw-bold">Quality Assurance</h5>
                  <p className="text-muted mb-0">
                    Rigorous testing and quality control protocols
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

       

      
      </div>
      <Footer/>
    </>
  );
};

export default About;