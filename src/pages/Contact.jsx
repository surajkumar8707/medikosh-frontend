import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation on component mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Prepare WhatsApp message
      const whatsappMessage = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}
      `.trim();

      // Encode message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // WhatsApp API URL (replace with your phone number)
      const whatsappUrl = `https://wa.me/+919720030123?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset form and show success message
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } else {
      setErrors(validationErrors);
    }
  };

  // Direct WhatsApp contact function
  const handleDirectWhatsApp = () => {
    const message = "Hello, I'd like to get more information about your services.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+919720030123?text=${encodedMessage}`, '_blank');
  };

  // Animation for floating button
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Styles - Clean, minimalist, no shadows with all icons green and text black
  const styles = `
    /* Page Load Animation */
    .contact-page {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .contact-page.loaded {
      opacity: 1;
      transform: translateY(0);
    }

    /* Header Section */
    .contact-header {
      height: 300px;
      margin-top: -80px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                  url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80');
      background-size: cover;
      background-position: center;
    }

    .contact-header h1 {
      font-size: 3rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1rem;
    }

    .contact-header p {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.9);
    }

    /* Main Container - Flex Layout */
    .contact-main {
      display: flex;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;
      gap: 40px;
    }

    /* Left Side - Contact Information (No Shadow) */
    .contact-info-section {
      flex: 1;
      background: white;
      padding: 30px;
    }

    .contact-info-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: #000000; /* Black text */
    }

    .contact-info-desc {
      color: #000000; /* Black text */
      margin-bottom: 30px;
      line-height: 1.6;
    }

    .contact-items {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 15px;
    }

    .contact-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #f8f9fa;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: #25D366; /* Green icons */
    }

    .contact-icon svg {
      width: 22px;
      height: 22px;
      fill: #25D366; /* Green for SVG icons */
    }

    .contact-details h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 5px;
      color: #000000; /* Black text */
    }

    .contact-details p {
      color: #000000; /* Black text */
      margin-bottom: 3px;
      line-height: 1.5;
    }

    .contact-details .small-text {
      font-size: 0.85rem;
      color: #333333; /* Dark gray, almost black */
    }

    /* Social Media Section */
    .social-section {
      margin-top: 40px;
      padding-top: 30px;
      border-top: 1px solid #eee;
    }

    .social-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: #000000; /* Black text */
    }

    .social-icons {
      display: flex;
      gap: 15px;
    }

    .social-link {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: #f8f9fa;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #25D366; /* Green icons */
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .social-link:hover {
      background: #25D366; /* Green background on hover */
      color: white; /* White icon on hover */
    }

    .social-link svg {
      fill: #25D366; /* Green for SVG icons */
    }

    .social-link:hover svg {
      fill: white; /* White icon on hover */
    }

    /* Right Side - Form Section */
    .contact-form-section {
      flex: 1;
      background: white;
      padding: 30px;
    }

    .form-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 30px;
      color: #000000; /* Black text */
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #000000; /* Black text */
    }

    .form-label span {
      color: #dc3545; /* Keep red for required asterisk */
    }

    .form-control {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      background: white;
      color: #000000; /* Black text */
    }

    .form-control:focus {
      outline: none;
      border-color: #25D366; /* Green focus border */
    }

    .form-control.is-invalid {
      border-color: #dc3545;
    }

    .invalid-feedback {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 5px;
    }

    textarea.form-control {
      resize: vertical;
      min-height: 120px;
    }

    /* Buttons */
    .btn-submit {
      width: 100%;
      padding: 14px 20px;
      background: #25D366; /* WhatsApp green */
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      transition: background 0.3s ease;
      margin-bottom: 15px;
    }

    .btn-submit:hover {
      background: #128C7E; /* Darker green on hover */
    }

    .btn-submit svg {
      fill: white;
    }

    .btn-direct {
      width: 100%;
      padding: 14px 20px;
      background: #075E54; /* Darker WhatsApp green */
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .btn-direct:hover {
      background: #05473e; /* Even darker green on hover */
    }

    .btn-direct svg {
      fill: white;
    }

    /* Alert Message */
    .alert-success {
      background: #d4edda;
      color: #155724;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #c3e6cb;
    }

    .alert-close {
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      color: #155724;
    }

    /* Map Section */
    .map-section {
      margin-top: 60px;
      padding: 0 20px;
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
    }

    .map-container {
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #eee;
    }

    .map-iframe {
      display: block;
      width: 100%;
      height: 400px;
      border: none;
    }

    /* WhatsApp Floating Button */
    .whatsapp-float {
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 1000;
    }

    .whatsapp-btn {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #25D366; /* WhatsApp green */
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.3s ease;
      color: white;
    }

    .whatsapp-btn:hover {
      transform: scale(1.1);
    }

    .whatsapp-btn svg {
      width: 30px;
      height: 30px;
      fill: white;
    }

    .bouncing {
      animation: bounce 0.5s ease;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    /* Responsive Design - Media Queries for all screens */

    /* Large Desktop (1200px and above) */
    @media (min-width: 1200px) {
      .contact-main {
        padding: 0 30px;
        gap: 50px;
      }
      
      .contact-header h1 {
        font-size: 3.5rem;
      }
    }

    /* Desktop (992px to 1199px) */
    @media (max-width: 1199px) {
      .contact-main {
        gap: 30px;
      }
      
      .contact-info-title,
      .form-title {
        font-size: 1.75rem;
      }
    }

    /* Tablet (768px to 991px) */
    @media (max-width: 991px) {
      .contact-header {
        height: 250px;
      }
      
      .contact-header h1 {
        font-size: 2.5rem;
      }
      
      .contact-main {
        flex-direction: column;
        gap: 30px;
      }
      
      .contact-info-section,
      .contact-form-section {
        width: 100%;
      }
      
      .contact-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
    }

    /* Small Tablet (576px to 767px) */
    @media (max-width: 767px) {
      .contact-header {
        height: 200px;
        margin-top: -60px;
      }
      
      .contact-header h1 {
        font-size: 2rem;
      }
      
      .contact-header p {
        font-size: 1rem;
      }
      
      .contact-items {
        grid-template-columns: 1fr;
      }
      
      .contact-info-title,
      .form-title {
        font-size: 1.5rem;
      }
      
      .whatsapp-float {
        bottom: 20px;
        right: 20px;
      }
      
      .whatsapp-btn {
        width: 50px;
        height: 50px;
      }
      
      .whatsapp-btn svg {
        width: 25px;
        height: 25px;
      }
      
      .map-container iframe {
        height: 300px;
      }
    }

    /* Mobile (375px to 575px) */
    @media (max-width: 575px) {
      .contact-header {
        height: 180px;
      }
      
      .contact-header h1 {
        font-size: 1.75rem;
      }
      
      .contact-main {
        padding: 0 15px;
      }
      
      .contact-info-section,
      .contact-form-section {
        padding: 20px;
      }
      
      .contact-icon {
        width: 45px;
        height: 45px;
      }
      
      .contact-icon svg {
        width: 20px;
        height: 20px;
      }
      
      .contact-details h4 {
        font-size: 1rem;
      }
      
      .contact-details p {
        font-size: 0.9rem;
      }
      
      .social-icons {
        flex-wrap: wrap;
      }
      
      .btn-submit,
      .btn-direct {
        padding: 12px 16px;
        font-size: 1rem;
      }
      
      .map-container iframe {
        height: 250px;
      }
    }

    /* Small Mobile (320px to 374px) */
    @media (max-width: 374px) {
      .contact-header {
        height: 160px;
      }
      
      .contact-header h1 {
        font-size: 1.5rem;
      }
      
      .contact-info-title,
      .form-title {
        font-size: 1.25rem;
      }
      
      .contact-info-section,
      .contact-form-section {
        padding: 15px;
      }
      
      .contact-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      
      .contact-details {
        text-align: center;
      }
      
      .social-icons {
        justify-content: center;
      }
      
      .btn-submit,
      .btn-direct {
        padding: 10px 14px;
        font-size: 0.95rem;
      }
      
      .whatsapp-float {
        bottom: 15px;
        right: 15px;
      }
      
      .whatsapp-btn {
        width: 45px;
        height: 45px;
      }
      
      .whatsapp-btn svg {
        width: 22px;
        height: 22px;
      }
      
      .map-container iframe {
        height: 200px;
      }
    }

    /* Landscape Mode */
    @media (max-height: 500px) and (orientation: landscape) {
      .contact-header {
        height: 150px;
      }
      
      .whatsapp-float {
        bottom: 15px;
        right: 15px;
      }
      
      .whatsapp-btn {
        width: 45px;
        height: 45px;
      }
    }

    /* Print Styles */
    @media print {
      .contact-header {
        background: none;
        color: black;
        height: auto;
        margin-top: 0;
      }
      
      .contact-header h1,
      .contact-header p {
        color: black;
      }
      
      .whatsapp-float,
      .btn-submit,
      .btn-direct {
        display: none;
      }
      
      .map-section {
        page-break-inside: avoid;
      }
    }
  `;

  return (
    <>
      {/* Inject styles */}
      <style>{styles}</style>
      
      <div className={`contact-page ${isLoaded ? 'loaded' : ''}`}>
        {/* Header Section */}
        <div className="contact-header">
          <div>
            <h1>Contact Us</h1>
            <p>Get in touch with us anytime</p>
          </div>
        </div>

        {/* Main Content - Flex Layout */}
        <div className="contact-main">
          {/* Left Side - Contact Information (No Shadow) */}
          <div className="contact-info-section">
            <h2 className="contact-info-title">Get in Touch</h2>
            <p className="contact-info-desc">
              Have questions or need assistance? We're here to help! 
              Reach out to us through any of the following channels.
            </p>

            <div className="contact-items">
              {/* Phone */}
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+91 9720030123</p>
                  <p className="small-text">24/7 Available</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>Care@medikoshnutria.com</p>
                  <p className="small-text">Quick Response</p>
                </div>
              </div>

              {/* Address */}
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>Ranikhet Tower, Dewalchaur</p>
                  <p className="small-text">Haldwani, Nainital - 263139</p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-item">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div className="contact-details">
                  <h4>Working Hours</h4>
                  <p>Mon - Fri: 8 AM - 8 PM</p>
                  <p>Sat - Sun: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-section">
              <h3 className="social-title">Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-link">
                  <FaFacebook />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className="contact-form-section">
            <h2 className="form-title">Send us a Message</h2>
            
            {/* Success Message */}
            {submitted && (
              <div className="alert-success">
                <strong>Success!</strong> Your message has been sent via WhatsApp.
                <button className="alert-close" onClick={() => setSubmitted(false)}>×</button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="form-group">
                <label className="form-label">
                  Full Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label className="form-label">
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label className="form-label">
                  Phone Number <span>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>

              {/* Subject Field */}
              <div className="form-group">
                <label className="form-label">
                  Subject <span>*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <div className="invalid-feedback">{errors.subject}</div>
                )}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label className="form-label">
                  Message <span>*</span>
                </label>
                <textarea
                  name="message"
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  placeholder="Enter your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-submit">
                <FaWhatsapp /> Send via WhatsApp
              </button>

              {/* Direct WhatsApp Button */}
              <button
                type="button"
                className="btn-direct"
                onClick={handleDirectWhatsApp}
              >
                <FaWhatsapp /> Chat Directly on WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.074581388182!2d72.8276402750654!3d19.06178275321062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96c82a1cce3%3A0x54d3c8dcfb04f27c!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="map-iframe"
              title="Location Map"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <div className={`whatsapp-float ${isBouncing ? 'bouncing' : ''}`}>
          <button
            className="whatsapp-btn"
            onClick={handleDirectWhatsApp}
            title="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;