import React, { useEffect, useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Modal,
  Form,
  Badge,
  ProgressBar,
  Alert
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

// Icons for our cards
import { FaStethoscope, FaHeartbeat, FaShieldAlt, FaMobileAlt, FaBrain, FaGlobe, FaCheckCircle } from 'react-icons/fa';
import { MdHealthAndSafety, MdAnalytics, MdEmail, MdPhone } from 'react-icons/md';
import { IoMdArrowRoundForward } from 'react-icons/io';

const MedikoshHealthovation = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    handleClose();
  };

  // Responsive fade animations based on screen size
  const getResponsiveFadeLeft = (delay = 0.2) => {
    return {
      hidden: { 
        x: viewportWidth < 768 ? -20 : -50, 
        opacity: 0 
      },
      visible: { 
        x: 0, 
        opacity: 1,
        transition: {
          type: "easeOut",
          duration: viewportWidth < 768 ? 0.5 : 0.8,
          delay: viewportWidth < 768 ? delay * 0.7 : delay,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    };
  };

  const getResponsiveFadeRight = (delay = 0.3) => {
    return {
      hidden: { 
        x: viewportWidth < 768 ? 20 : 50, 
        opacity: 0 
      },
      visible: { 
        x: 0, 
        opacity: 1,
        transition: {
          type: "easeOut",
          duration: viewportWidth < 768 ? 0.5 : 0.8,
          delay: viewportWidth < 768 ? delay * 0.7 : delay,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    };
  };

  const getResponsiveFadeUp = (delay = 0.2) => {
    return {
      hidden: { 
        y: viewportWidth < 768 ? 15 : 30, 
        opacity: 0 
      },
      visible: { 
        y: 0, 
        opacity: 1,
        transition: {
          type: "easeOut",
          duration: viewportWidth < 768 ? 0.5 : 0.7,
          delay: viewportWidth < 768 ? delay * 0.8 : delay,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    };
  };

  // Progressive delay based on screen size
  const getProgressiveDelay = (baseDelay) => {
    if (viewportWidth < 576) return baseDelay * 0.5;
    if (viewportWidth < 768) return baseDelay * 0.7;
    if (viewportWidth < 992) return baseDelay * 0.9;
    return baseDelay;
  };

  // Enhanced fade animations with responsive timing
  const fadeInLeft = getResponsiveFadeLeft(0.2);
  const fadeInRight = getResponsiveFadeRight(0.3);
  const fadeInUp = getResponsiveFadeUp(0.2);
  const fadeInDown = {
    hidden: { y: -30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "easeOut",
        duration: 0.7,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Container variants with responsive staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: viewportWidth < 768 ? 0.08 : 0.12,
        delayChildren: viewportWidth < 768 ? 0.15 : 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const updatedReasonsToChoose = [
    {
      id: 1,
      icon: <FaStethoscope />,
      title: "AI-Powered Diagnostics",
      description: "Our advanced AI algorithms provide accurate preliminary diagnostics, reducing human error by up to 40%.",
      animation: fadeInLeft,
      color: "#3498db",
      features: ["Real-time analysis", "95% accuracy rate", "24/7 availability"],
      delay: 0.1
    },
    {
      id: 2,
      icon: <FaHeartbeat />,
      title: "Real-Time Health Monitoring",
      description: "Continuous monitoring solutions that alert medical professionals to critical changes in patient conditions.",
      animation: fadeInRight,
      color: "#e74c3c",
      features: ["Instant alerts", "Multi-parameter tracking", "Historical data analysis"],
      delay: 0.15
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "Secure Health Records",
      description: "Blockchain-secured health records ensuring complete privacy and data integrity for patients.",
      animation: fadeInLeft,
      color: "#2ecc71",
      features: ["HIPAA compliant", "End-to-end encryption", "Access logging"],
      delay: 0.2
    },
    {
      id: 4,
      icon: <FaMobileAlt />,
      title: "Telemedicine Integration",
      description: "Seamless virtual consultations with specialists across 50+ medical disciplines.",
      animation: fadeInRight,
      color: "#9b59b6",
      features: ["Video consultations", "Prescription management", "Appointment scheduling"],
      delay: 0.25
    },
    {
      id: 5,
      icon: <MdAnalytics />,
      title: "Predictive Analytics",
      description: "Identify health risks before they become critical with our predictive health analytics engine.",
      animation: fadeInLeft,
      color: "#f39c12",
      features: ["Risk prediction", "Trend analysis", "Preventive recommendations"],
      delay: 0.3
    },
    {
      id: 6,
      icon: <FaBrain />,
      title: "Cognitive Health Tools",
      description: "Innovative tools for monitoring and improving neurological and mental health outcomes.",
      animation: fadeInRight,
      color: "#1abc9c",
      features: ["Cognitive assessment", "Therapy tools", "Progress tracking"],
      delay: 0.35
    }
  ];

  // Responsive hero stats
  const heroStats = [
    { value: "250+", label: "Healthcare Partners", delay: 0.1 },
    { value: "99.8%", label: "Uptime", delay: 0.2 },
    { value: "24/7", label: "Support", delay: 0.3 },
    { value: "50+", label: "Countries", delay: 0.4 }
  ];

  return (
    <div className="medikosh-page">
      <style>{`
        .medikosh-page {
          overflow-x: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        /* Base responsive container */
        .container, .container-fluid {
          width: 100%;
          padding-right: var(--bs-gutter-x, 0.75rem);
          padding-left: var(--bs-gutter-x, 0.75rem);
          margin-right: auto;
          margin-left: auto;
        }

        /* Hero Section - Fully Responsive */
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          position: relative;
          overflow: hidden;
          padding: clamp(2rem, 8vw, 5rem) 0;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-title {
          font-size: clamp(1.8rem, 6vw, 3.5rem);
          line-height: 1.2;
          margin-bottom: clamp(1rem, 3vw, 1.5rem);
        }

        .hero-title .highlight {
          background: linear-gradient(45deg, #f093fb, #f5576c);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          margin-bottom: clamp(1.5rem, 4vw, 2rem);
          opacity: 0.95;
        }

        /* Hero Animation - Responsive */
        .hero-animation {
          position: relative;
          height: clamp(250px, 40vw, 400px);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: clamp(1rem, 3vw, 2rem);
        }

        .main-hero-image {
          width: clamp(120px, 25vw, 200px);
          height: clamp(120px, 25vw, 200px);
          background: linear-gradient(45deg, #3498db, #9b59b6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .health-icon {
          font-size: clamp(40px, 8vw, 80px);
          color: white;
        }

        .floating-icon {
          position: absolute;
          width: clamp(35px, 7vw, 60px);
          height: clamp(35px, 7vw, 60px);
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(16px, 3vw, 24px);
          color: #3498db;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          z-index: 1;
        }

        /* Features Section - Fully Responsive with Centered Cards */
        .features-section {
          padding: clamp(2rem, 6vw, 4rem) 0;
        }

        .section-title {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          line-height: 1.3;
        }

        .section-subtitle {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          padding: 0 clamp(0.5rem, 2vw, 1rem);
        }

        /* Centered Cards CSS - Updated */
        .feature-card {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          border: none !important;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
        }

        .feature-card .card-body {
          padding: clamp(1.25rem, 3vw, 2rem) !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
        }

        .card-icon {
          font-size: clamp(2rem, 5vw, 2.5rem);
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .feature-card .card-title {
          font-size: clamp(1.1rem, 2.5vw, 1.25rem);
          margin-bottom: clamp(0.75rem, 2vw, 1rem);
          text-align: center;
          width: 100%;
        }

        .feature-card .card-text {
          font-size: clamp(0.9rem, 1.8vw, 0.95rem);
          margin-bottom: clamp(1rem, 2.5vw, 1.25rem);
          text-align: center;
          width: 100%;
        }

        /* Center the feature list */
        .feature-card ul {
          margin: 0 auto 1rem auto;
          padding-left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .feature-card li {
          text-align: center;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-card li small {
          display: inline-block;
          text-align: left;
        }

        /* Center the button */
        .feature-card .mt-auto {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .feature-card .btn {
          max-width: 80%;
        }

        @media (max-width: 576px) {
          .feature-card .btn {
            max-width: 100%;
          }
        }

        /* Stats Section - Responsive */
        .stat-item {
          padding: clamp(0.75rem, 2vw, 1rem);
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
        }

        .stat-value {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: clamp(0.75rem, 1.8vw, 0.85rem);
          opacity: 0.9;
        }

        /* CTA Buttons - Responsive */
        .cta-buttons {
          gap: clamp(0.5rem, 2vw, 1rem) !important;
        }

        .btn {
          padding: clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem) !important;
          font-size: clamp(0.9rem, 2vw, 1rem) !important;
          white-space: nowrap;
        }

        @media (max-width: 576px) {
          .btn {
            width: 100%;
            white-space: normal;
          }
          
          .cta-buttons {
            flex-direction: column;
          }
          
          .hero-animation {
            height: 220px;
          }
          
          .floating-icon {
            display: none;
          }
          
          .floating-icon.icon-1,
          .floating-icon.icon-2,
          .floating-icon.icon-3 {
            display: none;
          }
        }

        @media (min-width: 577px) and (max-width: 768px) {
          .hero-animation {
            height: 280px;
          }
          
          .floating-icon {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }

        @media (min-width: 769px) and (max-width: 992px) {
          .hero-animation {
            height: 320px;
          }
        }

        @media (min-width: 1200px) {
          .container {
            max-width: 1140px;
          }
        }

        @media (min-width: 1400px) {
          .container {
            max-width: 1320px;
          }
        }

        /* Modal Responsive */
        @media (max-width: 576px) {
          .modal-dialog {
            margin: 0.5rem;
          }
          
          .modal-content {
            padding: 1rem;
          }
        }

        /* Grid Responsive Adjustments */
        @media (max-width: 768px) {
          .row > [class*="col-"] {
            margin-bottom: 1rem;
          }
          
          .row > [class*="col-"]:last-child {
            margin-bottom: 0;
          }
        }

        /* Badge Responsive */
        .badge {
          font-size: clamp(0.7rem, 1.8vw, 0.8rem);
          padding: clamp(0.35rem, 1.5vw, 0.5rem) clamp(0.5rem, 2vw, 0.75rem) !important;
        }

        /* Remove all pulse, rotate, float animations */
        .pulse-animation,
        .pulse-ring,
        .health-icon,
        .floating-icon {
          animation: none !important;
        }

        .pulse-ring,
        .pulse-ring.delay-1,
        .pulse-ring.delay-2 {
          display: none;
        }

        /* Remove gradient shift animation */
        .hero-title .highlight {
          animation: none;
        }

        /* Remove floating animations */
        @keyframes float {
          0%, 100% { transform: none; }
          50% { transform: none; }
        }

        /* Remove rotate background animation */
        @keyframes rotate-bg {
          from { transform: none; }
          to { transform: none; }
        }

        .cta-section::before {
          animation: none;
        }

        /* Remove progress bar animation */
        .progress-bar {
          animation: none;
        }

        /* Ensure clean fade effects only */
        * {
          animation-iteration-count: 1 !important;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
      `}</style>

      {/* Hero Section - Responsive Fade Effects */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={6} className="order-2 order-lg-1">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                className="hero-content"
              >
                <Badge bg="light" text="dark" className="mb-3 p-2">
                  <FaCheckCircle className="me-2" /> Trusted by 250+ Hospitals
                </Badge>
                
                <h1 className="hero-title fw-bold">
                  Why Choose <span className="highlight">Medikosh Healthovation</span>
                </h1>
                
                <p className="hero-subtitle">
                  Revolutionizing healthcare through innovative technology, AI-driven solutions, and patient-centric approaches.
                </p>
                
                <div className="cta-buttons d-flex flex-wrap gap-3">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}
                    className="flex-grow-1 flex-sm-grow-0"
                  >
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="w-100 w-sm-auto"
                      onClick={handleShow}
                    >
                      <IoMdArrowRoundForward className="me-2" />
                      Request Demo
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                    className="flex-grow-1 flex-sm-grow-0"
                  >
                    <Button variant="outline-light" size="lg" className="w-100 w-sm-auto">
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
                
                <Row className="mt-4 mt-md-5 g-3">
                  {heroStats.map((stat, idx) => (
                    <Col xs={6} md={3} key={idx}>
                      <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={stat.delay}
                        className="stat-item text-white text-center text-md-start"
                      >
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
            
            <Col lg={6} className="order-1 order-lg-2">
              <div className="hero-animation">
                <div className="main-hero-image">
                  <div className="health-icon">
                    <MdHealthAndSafety />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section - Responsive Fade Effects with Centered Cards */}
      <section className="features-section bg-light">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="section-header text-center mb-4 mb-md-5"
          >
            <Badge bg="primary" className="mb-3 px-3 py-2">Why Choose Us</Badge>
            <h2 className="section-title fw-bold mb-3">
              6 Compelling Reasons to Partner with Us
            </h2>
            <p className="section-subtitle text-muted mx-auto">
              Discover how Medikosh Healthovation is transforming healthcare delivery worldwide
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Row xs={1} sm={2} lg={3} className="g-3 g-md-4">
              {updatedReasonsToChoose.map((reason) => (
                <Col key={reason.id}>
                  <motion.div
                    variants={reason.animation}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <Card 
                      className="feature-card shadow-sm h-100"
                      style={{ borderTop: `4px solid ${reason.color}` }}
                    >
                      <Card.Body className="d-flex flex-column">
                        <div 
                          className="card-icon mb-3"
                          style={{ color: reason.color }}
                        >
                          {reason.icon}
                        </div>
                        
                        <Card.Title>{reason.title}</Card.Title>
                        <Card.Text className="flex-grow-1">
                          {reason.description}
                        </Card.Text>
                        
                        <ul className="list-unstyled mb-4">
                          {reason.features.map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              className="mb-2"
                              variants={fadeInLeft}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              custom={getProgressiveDelay(0.05 * idx)}
                            >
                              <FaCheckCircle className="me-2" style={{ color: reason.color }} />
                              <small>{feature}</small>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <div className="mt-auto">
                          <Button 
                            variant="outline-primary" 
                            className="w-100"
                            style={{ 
                              borderColor: reason.color, 
                              color: reason.color,
                              backgroundColor: `${reason.color}10`
                            }}
                          >
                            Learn More <IoMdArrowRoundForward />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Modal - Responsive */}
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        centered
        size={viewportWidth < 576 ? "sm" : viewportWidth < 768 ? "md" : "lg"}
      >
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold fs-4 fs-md-3">Request a Demo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="info" className="mb-4">
            <FaCheckCircle className="me-2" />
            Get a personalized demo showing how Medikosh can transform your healthcare services.
          </Alert>
          
          <Form onSubmit={handleSubmit}>
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  size={viewportWidth < 768 ? "sm" : "lg"}
                />
              </Form.Group>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  size={viewportWidth < 768 ? "sm" : "lg"}
                />
              </Form.Group>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Organization</Form.Label>
                <Form.Control
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Your hospital or clinic name"
                  required
                  size={viewportWidth < 768 ? "sm" : "lg"}
                />
              </Form.Group>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={viewportWidth < 768 ? 2 : 3}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your needs"
                />
              </Form.Group>
            </motion.div>

            <div className="d-grid gap-2">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.5}
              >
                <Button 
                  variant="primary" 
                  type="submit" 
                  size={viewportWidth < 768 ? "sm" : "lg"}
                  className="w-100"
                >
                  Submit Request
                </Button>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.6}
              >
                <Button 
                  variant="outline-secondary" 
                  onClick={handleClose}
                  size={viewportWidth < 768 ? "sm" : "lg"}
                  className="w-100"
                >
                  Cancel
                </Button>
              </motion.div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <small className="text-muted">We'll contact you within 24 hours.</small>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MedikoshHealthovation;