import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Slider() {
  // Array of random image URLs from Picsum Photos
  const randomImages = [
    "https://picsum.photos/1200/600?random=1",
    "https://picsum.photos/1200/600?random=2",
    "https://picsum.photos/1200/600?random=3",
    "https://picsum.photos/1200/600?random=4",
    "https://picsum.photos/1200/600?random=5"
  ];

  // Slide data with Medikosh Nutria company details
  const slides = [
    {
      title: "Medikosh Nutria",
      description: "Premium healthcare solutions for modern families. Our advanced nutritional supplements are crafted with cutting-edge research and natural ingredients to support your wellness journey.",
      tagline: "Nourishing Health, Naturally",
      buttonText: "Explore Products",
      buttonClass: "btn-success"
    },
    {
      title: "Quality You Can Trust",
      description: "Every Medikosh Nutria product undergoes rigorous quality testing and meets international safety standards. We're committed to delivering excellence in every capsule, powder, and supplement.",
      tagline: "Science-Backed Purity",
      buttonText: "Learn More",
      buttonClass: "btn-primary"
    },
    {
      title: "Wellness for All Ages",
      description: "From children's immunity boosters to senior wellness formulas, Medikosh Nutria offers specialized nutrition solutions tailored to every life stage. Your family's health is our priority.",
      tagline: "Comprehensive Family Care",
      buttonText: "View Range",
      buttonClass: "btn-warning"
    }
  ];

  return (
    <div id="heroSlider" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: "-100px" }}>
      
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button 
            key={index}
            type="button" 
            data-bs-target="#heroSlider" 
            data-bs-slide-to={index} 
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides - Made responsive */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-item position-relative ${index === 0 ? "active" : ""}`}
            style={{ height: "100vh", maxHeight: "600px" }}
          >
            {/* Responsive image with fallback */}
            <img 
              src={randomImages[index]} 
              className="d-block w-100 h-100"
              alt={`Slide ${index + 1}`} 
              style={{ 
                objectFit: "cover",
                objectPosition: "center"
              }}
            />
            
            {/* Overlay for better text readability */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark "></div>
            
            {/* Responsive text overlay */}
            <div className="position-absolute top-50 start-50 translate-middle text-center w-75 w-md-50">
              <div className="bg-dark  rounded p-3 p-md-4 p-lg-5">
                {/* Tagline */}
                <span className="text-warning d-block mb-2 text-uppercase small fw-bold">
                  {slide.tagline}
                </span>
                
                {/* Company/Title */}
                <h3 className="text-white display-5 display-md-4 display-lg-3 fw-bold mb-2 mb-md-3">
                  {slide.title}
                </h3>
                
                {/* Description - Desktop */}
                <p className="text-white-50 lead d-none d-md-block mb-3 mb-md-4">
                  {slide.description}
                </p>
                
                {/* Description - Mobile (truncated) */}
                <p className="text-white-50 d-md-none mb-3">
                  {slide.description.length > 100 
                    ? `${slide.description.substring(0, 100)}...` 
                    : slide.description}
                </p>
                
                {/* CTA Button */}
                <button className={`btn ${slide.buttonClass} btn-lg px-4 px-md-5 fw-semibold`}>
                  {slide.buttonText} <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls - Responsive positioning */}
      <button 
        className="carousel-control-prev d-none d-md-flex" 
        type="button" 
        data-bs-target="#heroSlider" 
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button 
        className="carousel-control-next d-none d-md-flex" 
        type="button" 
        data-bs-target="#heroSlider" 
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  );
}