import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const sliderRef = useRef(null);
  
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphone',
      category: 'Electronics',
      rating: 5,
      reviews: 125,
      currentPrice: 299.99,
      originalPrice: 399.99,
      discount: 25,
      tag: 'Hot',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
      description: 'Premium noise-cancelling wireless headphones with 40hr battery life and crystal clear sound quality.',
      features: ['40hr Battery', 'Noise Cancelling', 'Bluetooth 5.2', 'Voice Assistant'],
      stock: 'In Stock',
      colors: ['Black', 'White', 'Blue']
    },
    {
      id: 2,
      name: 'Gaming Laptop Pro',
      category: 'Gaming',
      rating: 5,
      reviews: 89,
      currentPrice: 1499.99,
      originalPrice: 1799.99,
      discount: 17,
      tag: 'Limited',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600',
      description: 'High-performance gaming laptop with RTX 4080, 32GB RAM, and 240Hz display.',
      features: ['RTX 4080', '32GB RAM', '2TB SSD', '240Hz Display'],
      stock: 'Limited Stock',
      colors: ['Black', 'RGB']
    },
    {
      id: 3,
      name: 'Smart Fitness Watch',
      category: 'Wearables',
      rating: 5,
      reviews: 234,
      currentPrice: 249.99,
      originalPrice: 349.99,
      discount: 29,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
      description: 'Advanced fitness watch with heart rate monitoring, GPS, and 7-day battery life.',
      features: ['Heart Rate Monitor', 'GPS', '7-Day Battery', 'Waterproof'],
      stock: 'In Stock',
      colors: ['Black', 'Silver', 'Rose Gold']
    },
    {
      id: 4,
      name: 'Professional Camera Kit',
      category: 'Photography',
      rating: 5,
      reviews: 67,
      currentPrice: 1999.99,
      originalPrice: 2499.99,
      discount: 20,
      tag: 'Premium',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600',
      description: 'Full-frame mirrorless camera with 45MP sensor and professional lens kit.',
      features: ['45MP Sensor', '4K Video', '5-Axis Stabilization', 'Dual Card Slots'],
      stock: 'In Stock',
      colors: ['Black']
    },
    {
      id: 5,
      name: 'Wireless Earbuds Pro',
      category: 'Electronics',
      rating: 4,
      reviews: 312,
      currentPrice: 199.99,
      originalPrice: 279.99,
      discount: 29,
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1590658165737-15a047b8b5e5?w=600',
      description: 'True wireless earbuds with active noise cancellation and wireless charging case.',
      features: ['Noise Cancelling', 'Wireless Charging', '24hr Battery', 'IPX7 Waterproof'],
      stock: 'In Stock',
      colors: ['White', 'Black', 'Blue']
    },
    {
      id: 6,
      name: '4K Smart TV 65"',
      category: 'Home Entertainment',
      rating: 5,
      reviews: 178,
      currentPrice: 799.99,
      originalPrice: 1199.99,
      discount: 33,
      tag: 'Deal',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600',
      description: '65-inch 4K UHD Smart TV with HDR10+ and built-in streaming apps.',
      features: ['4K UHD', 'HDR10+', 'Smart OS', 'Voice Control'],
      stock: 'In Stock',
      colors: ['Black', 'Silver']
    },
    {
      id: 7,
      name: 'Ergonomic Office Chair',
      category: 'Furniture',
      rating: 4,
      reviews: 156,
      currentPrice: 349.99,
      originalPrice: 499.99,
      discount: 30,
      tag: 'Sale',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
      description: 'Premium ergonomic office chair with lumbar support and adjustable armrests.',
      features: ['Lumbar Support', 'Adjustable Height', 'Breathable Mesh', '360° Rotation'],
      stock: 'Limited Stock',
      colors: ['Black', 'Gray', 'Blue']
    },
    {
      id: 8,
      name: 'Coffee Maker Pro',
      category: 'Kitchen',
      rating: 5,
      reviews: 89,
      currentPrice: 129.99,
      originalPrice: 199.99,
      discount: 35,
      tag: 'Hot',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600',
      description: 'Programmable coffee maker with thermal carafe and built-in grinder.',
      features: ['Programmable', 'Thermal Carafe', 'Built-in Grinder', '24hr Timer'],
      stock: 'In Stock',
      colors: ['Black', 'Stainless Steel']
    }
  ];

  const getItemsPerSlide = () => {
    if (window.innerWidth < 576) return 1;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 992) return 2;
    return 4;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleOrderNow = () => {
    window.open('https://gaurav.com', '_blank');
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? 'text-warning' : 'text-secondary'}>★</span>
    ));
  };

  return (
    <div className="product-slider-wrapper">
      <div className="container-fluid px-0">
        {/* Header Section - Clean */}
        <div className="text-center py-4 py-md-5 header-section">
          <div className="container">
            <h2 className="display-4 fw-bold mb-2 mb-md-3">Hot Deals & Special Offers</h2>
            <p className="fs-5 text-secondary mb-3 mb-md-4">Limited time discounts on premium products</p>
            <div className="mx-auto" style={{ width: '80px', height: '3px', background: '#dc3545' }}></div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="position-relative slider-container">
          {/* Navigation Arrows - Hidden on mobile */}
          <button 
            className="btn btn-light position-absolute start-0 top-50 translate-middle-y z-3 d-none d-md-flex align-items-center justify-content-center arrow-btn"
            onClick={prevSlide}
          >
            <span className="fs-3">‹</span>
          </button>
          
          <button 
            className="btn btn-light position-absolute end-0 top-50 translate-middle-y z-3 d-none d-md-flex align-items-center justify-content-center arrow-btn"
            onClick={nextSlide}
          >
            <span className="fs-3">›</span>
          </button>

          {/* Slider Container */}
          <div ref={sliderRef} className="overflow-hidden mx-2 mx-md-3 mx-lg-4">
            <div 
              className="d-flex transition-all"
              style={{
                transform: `translateX(-${activeSlide * 100}%)`,
                transition: 'transform 0.5s ease'
              }}
            >
              {/* Product Slides */}
              {Array(totalSlides).fill(0).map((_, slideIndex) => (
                <div key={slideIndex} className="w-100 d-flex" style={{ flex: '0 0 100%' }}>
                  <div className="container-fluid px-2 px-sm-3 px-md-4">
                    <div className="row g-3 g-md-4">
                      {products.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((product) => (
                        <div 
                          key={product.id} 
                          className={`
                            ${itemsPerSlide === 1 ? 'col-12' : ''}
                            ${itemsPerSlide === 2 ? 'col-6' : ''}
                            ${itemsPerSlide === 4 ? 'col-12 col-md-6 col-lg-3' : ''}
                          `}
                        >
                          <div className="product-card h-100">
                            {/* Product Image */}
                            <div className="position-relative overflow-hidden rounded-3 mb-3 product-image-container">
                              {/* Discount Badge */}
                              <div className="position-absolute top-0 start-0 m-2 m-md-3">
                                <span className="badge bg-danger px-2 px-md-3 py-1 py-md-2">
                                  -{product.discount}%
                                </span>
                              </div>
                              
                              {/* Hot Tag */}
                              <div className="position-absolute top-0 end-0 m-2 m-md-3">
                                <span className="badge bg-warning text-dark px-2 px-md-3 py-1 py-md-2">
                                  {product.tag}
                                </span>
                              </div>
                              
                              {/* Product Image */}
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-100 h-100 product-image"
                              />
                              
                              {/* Quick Actions */}
                              <div className="position-absolute bottom-0 start-0 w-100 p-2 p-md-3 quick-actions">
                                <div className="d-flex gap-2 justify-content-center">
                                  <button 
                                    className="btn btn-primary btn-sm px-2 px-md-3 action-btn"
                                    onClick={() => handleViewDetails(product)}
                                  >
                                    Quick View
                                  </button>
                                  <button 
                                    className="btn btn-success btn-sm px-2 px-md-3 action-btn"
                                    onClick={handleOrderNow}
                                  >
                                    Buy Now
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-3 p-md-4">
                              {/* Category */}
                              <div className="mb-2">
                                <span className="badge bg-light text-dark px-2 px-md-3 py-1">
                                  {product.category}
                                </span>
                              </div>
                              
                              {/* Product Name */}
                              <h6 className="fw-bold mb-2 product-name">{product.name}</h6>
                              
                              {/* Rating */}
                              <div className="d-flex align-items-center mb-2">
                                <div className="me-2 small">
                                  {renderStars(product.rating)}
                                </div>
                                <small className="text-secondary">({product.reviews})</small>
                              </div>
                              
                              {/* Price */}
                              <div className="d-flex align-items-center gap-2 gap-md-3 mb-3">
                                <span className="h5 fw-bold text-success mb-0">
                                  ${product.currentPrice.toFixed(2)}
                                </span>
                                <span className="text-secondary text-decoration-line-through small">
                                  ${product.originalPrice.toFixed(2)}
                                </span>
                              </div>
                              
                              {/* View Details Button */}
                              <button 
                                className="btn btn-outline-dark w-100 btn-sm btn-md-regular"
                                onClick={() => handleViewDetails(product)}
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="d-flex justify-content-center mt-4 mt-md-5 gap-2">
            {Array(totalSlides).fill(0).map((_, index) => (
              <button
                key={index}
                className={`indicator-btn ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="btn-close position-absolute top-0 end-0 m-2 m-md-3 z-3 bg-white"
              onClick={() => setShowModal(false)}
            ></button>
            
            <div className="row g-0">
              {/* Product Image */}
              <div className="col-12 col-md-6">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-100"
                  style={{
                    height: '300px',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              {/* Product Details */}
              <div className="col-12 col-md-6 p-4 p-md-5 bg-white">
                <h4 className="fw-bold mb-3">{selectedProduct.name}</h4>
                
                {/* Rating */}
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    {renderStars(selectedProduct.rating)}
                  </div>
                  <span className="text-secondary">({selectedProduct.reviews} reviews)</span>
                </div>
                
                {/* Price */}
                <div className="mb-4">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="h3 fw-bold text-success">
                      ${selectedProduct.currentPrice.toFixed(2)}
                    </span>
                    <span className="text-secondary text-decoration-line-through">
                      ${selectedProduct.originalPrice.toFixed(2)}
                    </span>
                    <span className="badge bg-danger">
                      Save {selectedProduct.discount}%
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="mb-4">{selectedProduct.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3">Key Features:</h6>
                  <ul className="list-unstyled">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="mb-2 small">
                        <span className="me-2 text-success">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Colors & Stock */}
                <div className="row mb-4">
                  <div className="col-6">
                    <h6 className="fw-bold small">Colors:</h6>
                    <div className="d-flex gap-2 mt-2">
                      {selectedProduct.colors.map((color, index) => (
                        <span 
                          key={index}
                          className="color-dot"
                          style={{
                            backgroundColor: color.toLowerCase() === 'black' ? '#000' : 
                                          color.toLowerCase() === 'white' ? '#fff' :
                                          color.toLowerCase() === 'blue' ? '#0d6efd' :
                                          color.toLowerCase() === 'silver' ? '#c0c0c0' :
                                          color.toLowerCase() === 'rose gold' ? '#b76e79' :
                                          color.toLowerCase() === 'gray' ? '#6c757d' :
                                          color.toLowerCase() === 'stainless steel' ? '#e0e0e0' : '#0d6efd',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: '1px solid #dee2e6'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-6">
                    <h6 className="fw-bold small">Availability:</h6>
                    <span className={`badge ${selectedProduct.stock === 'In Stock' ? 'bg-success' : 'bg-warning'} mt-2`}>
                      {selectedProduct.stock}
                    </span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="d-flex gap-2 gap-md-3">
                  <button 
                    className="btn btn-primary flex-grow-1 py-2 py-md-3"
                    onClick={handleOrderNow}
                  >
                    Order Now
                  </button>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .product-slider-wrapper {
          background: #ffffff;
          min-height: 100vh;
          padding: 20px 0;
        }

        .header-section {
          background: #f8f9fa;
        }

        .header-section h2 {
          color: #212529;
        }

        .slider-container {
          background: #ffffff;
          padding: 20px 0 40px;
        }

        /* Navigation arrows */
        .arrow-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          z-index: 10;
        }

        .arrow-btn:hover {
          background: #dc3545;
          color: white;
          border-color: #dc3545;
        }

        /* Product card */
        .product-card {
          background: #ffffff;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .product-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transform: translateY(-5px);
        }

        /* Product image container */
        .product-image-container {
          height: 200px;
          background: #f8f9fa;
        }

        @media (min-width: 768px) {
          .product-image-container {
            height: 220px;
          }
        }

        @media (min-width: 992px) {
          .product-image-container {
            height: 250px;
          }
        }

        .product-image {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.1);
        }

        /* Quick actions */
        .quick-actions {
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .product-card:hover .quick-actions {
          transform: translateY(0);
        }

        .action-btn {
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .product-card:hover .action-btn {
          transform: translateY(0);
          opacity: 1;
        }

        .product-card:hover .action-btn:nth-child(1) {
          transition-delay: 0.1s;
        }

        .product-card:hover .action-btn:nth-child(2) {
          transition-delay: 0.2s;
        }

        /* Product name */
        .product-name {
          font-size: 1rem;
          color: #212529;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 48px;
        }

        @media (min-width: 768px) {
          .product-name {
            font-size: 1.1rem;
            min-height: 52px;
          }
        }

        /* Button styles */
        .btn-outline-dark {
          border: 1px solid #dee2e6;
          color: #212529;
        }

        .btn-outline-dark:hover {
          background: #dc3545;
          color: white;
          border-color: #dc3545;
        }

        .btn-sm-regular {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        @media (min-width: 768px) {
          .btn-md-regular {
            padding: 0.6rem 1.2rem;
            font-size: 1rem;
          }
        }

        /* Slider indicators */
        .indicator-btn {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #dee2e6;
          background: #e9ecef;
          transition: all 0.3s ease;
          padding: 0;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .indicator-btn {
            width: 12px;
            height: 12px;
          }
        }

        .indicator-btn:hover {
          background: #dc3545;
          border-color: #dc3545;
        }

        .indicator-btn.active {
          background: #dc3545;
          border-color: #dc3545;
          transform: scale(1.2);
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 15px;
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 1000px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        @media (max-width: 767px) {
          .modal-content {
            max-height: 85vh;
          }
        }

        /* Color dot */
        .color-dot {
          transition: transform 0.2s ease;
          cursor: pointer;
        }

        .color-dot:hover {
          transform: scale(1.2);
        }

        /* Transition */
        .transition-all {
          transition: all 0.5s ease;
        }

        /* Responsive text */
        @media (max-width: 576px) {
          .header-section h2 {
            font-size: 1.75rem;
          }
          
          .header-section p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;