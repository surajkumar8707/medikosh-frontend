import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import {
	FaShoppingCart,
	FaHeart,
	FaStar,
	FaChevronLeft,
	FaChevronRight,
	FaEye,
	FaTag,
	FaFire,
	FaShippingFast,
	FaCheckCircle,
	FaPercentage,
	FaTimes,
	FaCalendar,
	FaBox,
	FaUndo,
	FaCreditCard,
	FaShieldAlt,
	FaHeadphones,
	FaGamepad,
	FaLaptop,
	FaMobile,
	FaTshirt,
	FaHome,
	FaBook,
	FaCar,
	FaCamera,
	FaUtensils,
	FaGift,
	FaAward,
	FaClock,
	FaWallet,
	FaTruck,
	FaLock,
	FaStarOfLife,
	FaBolt,
	FaInfinity,
	FaChevronCircleLeft,
	FaChevronCircleRight,
} from 'react-icons/fa';

const Products = () => {
	// Product State
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [activeOfferTab, setActiveOfferTab] = useState('all');
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
	// Add state for image gallery in modal
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Update window width based on screen size
	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setWindowWidth(width);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Fetch products from API
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const response = await fetch('https://medikosh-admin.daarukavaneresort.com/api/products');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const result = await response.json();
				if (result.status && Array.isArray(result.data)) {
					// Map API data to the format expected by the UI
					const mappedProducts = result.data.map(mapApiProduct);
					setProducts(mappedProducts);
				} else {
					throw new Error('Invalid API response format');
				}
			} catch (err) {
				setError(err.message);
				console.error('Error fetching products:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	// Map a single API product to UI structure
	const mapApiProduct = (apiProduct) => {
		// Extract certifications as features
		const features = apiProduct.certifications
			? apiProduct.certifications
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean)
			: [];

		const tags = [];
		if (apiProduct.is_verified == 1) tags.push('Verified');
		if (apiProduct.status == 1) tags.push('Active');

		// Extract image paths
		const images =
			apiProduct.images && apiProduct.images.length > 0
				? apiProduct.images.map((img) => img.image_path)
				: ['https://via.placeholder.com/400x300?text=No+Image'];

		return {
			id: apiProduct.id,
			name: apiProduct.name,
			order_url: apiProduct.order_url, // Add order_url from API
			images: images,
			primaryImage: images[0],
			category: 'Healthcare',
			rating: 4.5,
			reviews: Math.floor(Math.random() * 50) + 10,
			inStock: apiProduct.status == 1,
			discount: null,
			features: features,
			colors: [],
			tags: tags,
			offers: [],
			benefits: [],
			certifications: apiProduct.certifications,
			metaTitle: apiProduct.meta_title,
			metaDescription: apiProduct.meta_description,
		};
	};

	// Handle order now with redirect - use order_url from API
	const handleOrderNow = (product) => {
		if (product.order_url) {
			// If order_url exists, open it
			window.open(product.order_url, '_blank');
		} else {
			// Fallback to default order URL if order_url is null
			const orderUrl = `https://www.medikosh.com/order?product=${product.id}&name=${encodeURIComponent(product.name)}`;
			window.open(orderUrl, '_blank');
		}
	};

	// Handle view details - show modal
	const handleViewDetails = (product) => {
		setSelectedProduct(product);
		setCurrentImageIndex(0);
		setShowModal(true);
		document.body.style.overflow = 'hidden';
	};

	// Close modal
	const closeModal = () => {
		setShowModal(false);
		setSelectedProduct(null);
		setCurrentImageIndex(0);
		document.body.style.overflow = 'auto';
	};

	// Handle click outside modal to close
	const handleOverlayClick = (e) => {
		if (e.target.classList.contains('modal-overlay')) {
			closeModal();
		}
	};

	// Handle ESC key to close modal
	useEffect(() => {
		const handleEscKey = (e) => {
			if (e.key === 'Escape' && showModal) {
				closeModal();
			}
		};

		window.addEventListener('keydown', handleEscKey);
		return () => window.removeEventListener('keydown', handleEscKey);
	}, [showModal]);

	// Image gallery navigation
	const nextImage = () => {
		if (selectedProduct) {
			setCurrentImageIndex((prev) => (prev === selectedProduct.images.length - 1 ? 0 : prev + 1));
		}
	};

	const prevImage = () => {
		if (selectedProduct) {
			setCurrentImageIndex((prev) => (prev === 0 ? selectedProduct.images.length - 1 : prev - 1));
		}
	};

	// Get category icon
	const getCategoryIcon = (category) => {
		switch (category.toLowerCase()) {
			case 'healthcare':
				return <FaStarOfLife />;
			case 'electronics':
				return <FaLaptop />;
			case 'gaming':
				return <FaGamepad />;
			case 'audio':
				return <FaHeadphones />;
			case 'wearables':
				return <FaCheckCircle />;
			case 'photography':
				return <FaCamera />;
			case 'mobile':
				return <FaMobile />;
			default:
				return <FaTag />;
		}
	};

	// Loading state
	if (loading) {
		return (
			<div
				className='products-page d-flex justify-content-center align-items-center'
				style={{ minHeight: '100vh' }}
			>
				<div className='spinner-border text-success' role='status' style={{ width: '3rem', height: '3rem' }}>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
		);
	}

	// Error state
	if (error) {
		return (
			<div
				className='products-page d-flex justify-content-center align-items-center'
				style={{ minHeight: '100vh' }}
			>
				<div className='alert alert-danger' role='alert'>
					Error loading products: {error}
				</div>
			</div>
		);
	}

	return (
		<>
			<div className='products-page' style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
				{/* ================= HEADER SECTION ================= */}
				<div
					className='d-flex align-items-center text-white header-section'
					style={{
						height: 'clamp(200px, 40vh, 300px)',
						backgroundImage:
							"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						marginTop: '-30px',
						fontFamily: 'Helvetica, Arial, sans-serif',
					}}
				>
					<div className='container-fluid text-center px-3 px-sm-4 px-md-5 mt-4'>
						<h1
							className='fw-bold m-0 text-white header-title'
							style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 'clamp(1.8rem, 8vw, 4rem)' }}
						>
							Our Products
						</h1>
						<p
							className='fw-bold m-0 text-white mt-2 mt-md-3 header-subtitle'
							style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 'clamp(1rem, 4vw, 1.8rem)' }}
						>
							Discover amazing products
						</p>
						<p
							className='mt-2 mt-md-3 header-link'
							style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 'clamp(0.8rem, 3vw, 1rem)' }}
						>
							Visit our store:{' '}
							<a
								href='https://www.medikosh.com/'
								className='text-warning text-decoration-none fw-bold'
								style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
							>
								https://www.medikosh.com
							</a>
						</p>
					</div>
				</div>

				{/* ================= MOBILE FILTER TOGGLE ================= */}
				<div className='d-block d-lg-none px-3 px-sm-4 mt-3'>
					<button
						className='btn w-100 d-flex justify-content-between align-items-center'
						style={{ backgroundColor: '#f8f9fa', border: '1px solid #dee2e6' }}
						onClick={() => setIsFilterOpen(!isFilterOpen)}
					>
						<span>
							<FaTag className='me-2' style={{ color: '#6BC048' }} />
							Filters & Sort
						</span>
						<span>{isFilterOpen ? '▲' : '▼'}</span>
					</button>
				</div>

				{/* ================= ALL PRODUCTS GRID ================= */}
				<section
					className='container-fluid py-4 py-md-5 px-3 px-sm-4 px-lg-5 w-100'
					style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
				>
					<div
						className={`d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3 ${!isFilterOpen && windowWidth < 992 ? 'd-none' : 'd-flex'}`}
					>
						<h2
							className='fw-bold section-title'
							style={{
								fontFamily: 'Helvetica, Arial, sans-serif',
								fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
							}}
						>
							<FaTag style={{ color: '#6BC048', marginRight: '10px' }} />
							All Products ({products.length})
						</h2>
						<div className='d-flex gap-2 flex-wrap filter-section'>
							<select
								className='form-select filter-select'
								style={{
									minWidth: windowWidth < 480 ? '100%' : '160px',
									fontFamily: 'Helvetica, Arial, sans-serif',
									fontSize: 'clamp(0.8rem, 2vw, 1rem)',
								}}
							>
								<option style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
									Sort by: Featured
								</option>
								<option style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
									Price: Low to High
								</option>
								<option style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
									Price: High to Low
								</option>
								<option style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Rating</option>
							</select>
							<select
								className='form-select filter-select'
								style={{
									minWidth: windowWidth < 480 ? '100%' : '160px',
									fontFamily: 'Helvetica, Arial, sans-serif',
									fontSize: 'clamp(0.8rem, 2vw, 1rem)',
								}}
							>
								<option style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>All Categories</option>
								<option style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Healthcare</option>
								<option style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Electronics</option>
								<option style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Gaming</option>
							</select>
						</div>
					</div>

					<div className='row g-3 g-md-4 product-grid'>
						{products.map((product) => (
							<div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2'>
								<div
									className='card shadow-sm border-0 rounded-4 h-100 product-card'
									style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
								>
									<div className='position-relative overflow-hidden'>
										<img
											src={product.primaryImage}
											alt={product.name}
											className='card-img-top rounded-top-4'
											style={{ height: 'clamp(150px, 25vw, 200px)', objectFit: 'cover' }}
											onError={(e) => {
												e.target.onerror = null;
												e.target.src =
													'https://via.placeholder.com/400x300?text=Image+Not+Found';
											}}
										/>
										{product.discount && (
											<div className='position-absolute top-0 end-0 m-2 m-md-3'>
												<span
													className='badge px-2 px-md-3 py-1 py-md-2 discount-badge'
													style={{
														backgroundColor: '#6BC048',
														color: 'white',
														fontFamily: 'Helvetica, Arial, sans-serif',
														fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
													}}
												>
													<FaPercentage className='me-1' /> -{product.discount}%
												</span>
											</div>
										)}
										{product.tags?.includes('Verified') && (
											<div className='position-absolute top-0 start-0 m-2 m-md-3'>
												<span
													className='badge bg-success px-2 px-md-3 py-1 py-md-2 verified-badge'
													style={{
														fontFamily: 'Helvetica, Arial, sans-serif',
														fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
													}}
												>
													<FaCheckCircle className='me-1' /> Verified
												</span>
											</div>
										)}
										{/* Show image count indicator if multiple images */}
										{product.images.length > 1 && (
											<div className='position-absolute bottom-0 end-0 m-2'>
												<span
													className='badge bg-dark bg-opacity-75'
													style={{
														fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
													}}
												>
													{product.images.length} photos
												</span>
											</div>
										)}
									</div>
									<div className='card-body p-2 p-md-3'>
										<div className='d-flex justify-content-between align-items-start mb-2'>
											<h6
												className='card-title fw-bold mb-0 text-truncate product-title'
												style={{
													fontFamily: 'Helvetica, Arial, sans-serif',
													fontSize: 'clamp(0.9rem, 2vw, 1rem)',
												}}
											>
												{product.name}
											</h6>
											<button className='btn btn-link text-danger p-0'>
												<FaHeart style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }} />
											</button>
										</div>
										<div className='d-flex align-items-center mb-2'>
											<span
												className='badge bg-light text-dark category-badge'
												style={{
													fontFamily: 'Helvetica, Arial, sans-serif',
													fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
												}}
											>
												{getCategoryIcon(product.category)}
												<span
													className='ms-1 d-none d-sm-inline'
													style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
												>
													{product.category}
												</span>
											</span>
										</div>

										<div className='d-flex align-items-center mb-2'>
											<div
												className='text-warning me-2 rating-stars'
												style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)' }}
											>
												{'★'.repeat(Math.floor(product.rating))}
												<span className='text-muted'>
													{'★'.repeat(5 - Math.floor(product.rating))}
												</span>
											</div>
											<small
												className='text-muted review-count'
												style={{
													fontFamily: 'Helvetica, Arial, sans-serif',
													fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
												}}
											>
												({product.reviews})
											</small>
										</div>

										<div className='d-flex align-items-center justify-content-between flex-wrap gap-2'>
											<div className='d-flex gap-1 gap-md-2 action-buttons'>
												<button
													className='btn btn-outline-primary btn-sm view-btn'
													onClick={() => handleViewDetails(product)}
													style={{
														fontFamily: 'Helvetica, Arial, sans-serif',
														padding:
															windowWidth < 480 ? '0.2rem 0.5rem' : '0.25rem 0.75rem',
														fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)',
													}}
												>
													<FaEye className={windowWidth < 480 ? '' : 'me-1'} />
													{windowWidth >= 480 && 'View'}
												</button>
												<button
													className='btn btn-sm order-btn'
													onClick={() => handleOrderNow(product)}
													style={{
														fontFamily: 'Helvetica, Arial, sans-serif',
														backgroundColor: '#1FA7A1',
														color: 'white',
														border: 'none',
														padding:
															windowWidth < 480 ? '0.2rem 0.5rem' : '0.25rem 0.75rem',
														fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)',
													}}
													onMouseEnter={(e) => (e.target.style.backgroundColor = '#178F8A')}
													onMouseLeave={(e) => (e.target.style.backgroundColor = '#1FA7A1')}
												>
													{windowWidth < 480 ? 'Buy' : 'Order'}
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* ================= PRODUCT DETAIL MODAL ================= */}
				{showModal && selectedProduct && (
					<div
						className='modal fade show d-block modal-overlay'
						style={{ backgroundColor: 'rgba(0,0,0,0.5)', fontFamily: 'Helvetica, Arial, sans-serif' }}
						onClick={handleOverlayClick}
					>
						<div
							className='modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable'
							style={{ margin: windowWidth < 576 ? '0.5rem' : '1.75rem auto' }}
							onClick={(e) => e.stopPropagation()}
						>
							<div
								className='modal-content border-0 rounded-4 overflow-hidden'
								style={{
									fontFamily: 'Helvetica, Arial, sans-serif',
									maxHeight: windowWidth < 768 ? '90vh' : 'none',
								}}
							>
								<div
									className='modal-header'
									style={{
										backgroundColor: '#6BC048',
										color: 'white',
										padding: windowWidth < 768 ? '0.75rem' : '1rem',
									}}
								>
									<h2
										className='modal-title fw-bold modal-title-text'
										style={{
											fontFamily: 'Helvetica, Arial, sans-serif',
											fontSize: 'clamp(1.2rem, 4vw, 2rem)',
										}}
									>
										{selectedProduct.name}
									</h2>
									<button
										type='button'
										className='btn-close btn-close-white'
										onClick={closeModal}
										style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}
									></button>
								</div>
								<div className='modal-body p-0'>
									<div className='row g-0'>
										{/* Left Column - Product Image Gallery */}
										<div className='col-12 col-md-6'>
											<div
												className='position-relative'
												style={{
													minHeight: windowWidth < 768 ? '250px' : '500px',
													height: windowWidth < 768 ? '250px' : '100%',
												}}
											>
												<img
													src={selectedProduct.images[currentImageIndex]}
													alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`}
													className='w-100 h-100'
													style={{ objectFit: 'cover' }}
													onError={(e) => {
														e.target.onerror = null;
														e.target.src =
															'https://via.placeholder.com/800x600?text=Image+Not+Found';
													}}
												/>

												{/* Image Gallery Navigation */}
												{selectedProduct.images.length > 1 && (
													<>
														<button
															onClick={prevImage}
															className='btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y ms-2'
															style={{
																width: '40px',
																height: '40px',
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
																opacity: 0.8,
																zIndex: 10,
															}}
														>
															<FaChevronLeft />
														</button>
														<button
															onClick={nextImage}
															className='btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y me-2'
															style={{
																width: '40px',
																height: '40px',
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
																opacity: 0.8,
																zIndex: 10,
															}}
														>
															<FaChevronRight />
														</button>

														{/* Image Counter */}
														<div
															className='position-absolute bottom-0 start-50 translate-middle-x mb-2'
															style={{ zIndex: 10 }}
														>
															<span className='badge bg-dark bg-opacity-75 px-3 py-2'>
																{currentImageIndex + 1} /{' '}
																{selectedProduct.images.length}
															</span>
														</div>
													</>
												)}

												{selectedProduct.discount && (
													<div className='position-absolute top-0 end-0 m-2 m-md-3'>
														<span
															className='badge px-3 px-md-4 py-2 py-md-3 fs-6 fs-md-5'
															style={{
																backgroundColor: '#6BC048',
																color: 'white',
																fontFamily: 'Helvetica, Arial, sans-serif',
																fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
															}}
														>
															<FaPercentage className='me-1 me-md-2' />-
															{selectedProduct.discount}% OFF
														</span>
													</div>
												)}
												<div className='position-absolute bottom-0 start-0 w-100 p-2 p-md-3 bg-gradient'>
													{selectedProduct.tags?.map((tag, index) => (
														<span
															key={index}
															className='badge bg-warning text-dark me-2 mb-1 px-2 px-md-3 py-1 py-md-2'
															style={{
																fontFamily: 'Helvetica, Arial, sans-serif',
																fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
															}}
														>
															{tag}
														</span>
													))}
												</div>
											</div>

											{/* Thumbnail Gallery */}
											{selectedProduct.images.length > 1 && (
												<div
													className='d-flex gap-2 p-2 bg-light overflow-auto'
													style={{ maxWidth: '100%' }}
												>
													{selectedProduct.images.map((img, index) => (
														<img
															key={index}
															src={img}
															alt={`Thumbnail ${index + 1}`}
															onClick={() => setCurrentImageIndex(index)}
															style={{
																width: '60px',
																height: '60px',
																objectFit: 'cover',
																cursor: 'pointer',
																border:
																	currentImageIndex === index
																		? '3px solid #6BC048'
																		: '2px solid transparent',
																borderRadius: '4px',
															}}
															onError={(e) => {
																e.target.onerror = null;
																e.target.src =
																	'https://via.placeholder.com/60x60?text=Error';
															}}
														/>
													))}
												</div>
											)}
										</div>

										{/* Right Column - Product Details */}
										<div
											className='col-12 col-md-6 p-3 p-md-4 modal-details'
											style={{
												fontFamily: 'Helvetica, Arial, sans-serif',
												maxHeight: windowWidth < 768 ? '60vh' : 'none',
												overflowY: 'auto',
											}}
										>
											<div className='d-flex justify-content-between align-items-start mb-2 mb-md-3'>
												<div>
													<span
														className='badge px-2 px-md-3 py-1 py-md-2 mb-2'
														style={{
															backgroundColor: '#6BC048',
															color: 'white',
															fontFamily: 'Helvetica, Arial, sans-serif',
															fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
														}}
													>
														{getCategoryIcon(selectedProduct.category)}
														<span
															className='ms-1 ms-md-2'
															style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
														>
															{selectedProduct.category}
														</span>
													</span>
													<div className='d-flex align-items-center mb-2'>
														<div
															className='text-warning me-2 me-md-3'
															style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
														>
															{'★'.repeat(Math.floor(selectedProduct.rating))}
															<span className='text-muted'>
																{'★'.repeat(5 - Math.floor(selectedProduct.rating))}
															</span>
														</div>
														<span
															className='text-muted'
															style={{
																fontFamily: 'Helvetica, Arial, sans-serif',
																fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
															}}
														>
															({selectedProduct.reviews} reviews)
														</span>
													</div>
												</div>
												<button className='btn btn-outline-danger btn-sm btn-md-lg rounded-circle'>
													<FaHeart />
												</button>
											</div>

											{/* Features / Certifications */}
											{selectedProduct.features && selectedProduct.features.length > 0 && (
												<div className='mb-3 mb-md-4'>
													<h5
														className='fw-bold mb-2 mb-md-3'
														style={{
															fontFamily: 'Helvetica, Arial, sans-serif',
															fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
														}}
													>
														Certifications
													</h5>
													<div className='row features-grid'>
														{selectedProduct.features?.map((feature, index) => (
															<div key={index} className='col-6 mb-2'>
																<div className='d-flex align-items-center'>
																	<FaCheckCircle
																		style={{
																			color: '#6BC048',
																			marginRight: '8px',
																			fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
																		}}
																	/>
																	<span
																		style={{
																			fontFamily: 'Helvetica, Arial, sans-serif',
																			fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
																		}}
																	>
																		{feature}
																	</span>
																</div>
															</div>
														))}
													</div>
												</div>
											)}

											{/* Colors - Only show if available */}
											{selectedProduct.colors && selectedProduct.colors.length > 0 && (
												<div className='mb-3 mb-md-4'>
													<h5
														className='fw-bold mb-2 mb-md-3'
														style={{
															fontFamily: 'Helvetica, Arial, sans-serif',
															fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
														}}
													>
														Available Colors
													</h5>
													<div className='d-flex gap-2 flex-wrap colors-container'>
														{selectedProduct.colors.map((color, index) => (
															<button
																key={index}
																className='btn btn-outline-secondary color-btn'
																style={{
																	width: windowWidth < 768 ? '30px' : '40px',
																	height: windowWidth < 768 ? '30px' : '40px',
																	borderRadius: '50%',
																	backgroundColor: color.toLowerCase(),
																	border: '2px solid #dee2e6',
																	padding: 0,
																}}
																title={color}
															/>
														))}
													</div>
												</div>
											)}

											{/* Action Buttons - Only Order Now */}
											<div className='d-grid gap-2 gap-md-3 d-md-flex modal-actions'>
												<button
													className='btn flex-fill order-now-btn'
													onClick={() => handleOrderNow(selectedProduct)}
													style={{
														fontFamily: 'Helvetica, Arial, sans-serif',
														backgroundColor: '#1FA7A1',
														color: 'white',
														border: 'none',
														padding: windowWidth < 768 ? '0.5rem' : '0.75rem',
														fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
													}}
													onMouseEnter={(e) => (e.target.style.backgroundColor = '#178F8A')}
													onMouseLeave={(e) => (e.target.style.backgroundColor = '#1FA7A1')}
												>
													<FaCreditCard className='me-1 me-md-2' />
													Order Now
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* ================= STYLES ================= */}
				<style jsx>{`
					.products-page {
						min-height: 100vh;
						font-family: Helvetica, Arial, sans-serif;
						overflow-x: hidden;
					}

					.modal-overlay {
						position: fixed;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						z-index: 1050;
						overflow-y: auto;
						padding: 10px;
					}

					.modal.show {
						display: block !important;
					}

					.modal-content {
						animation: modalSlideIn 0.3s ease-out;
					}

					@keyframes modalSlideIn {
						from {
							transform: translateY(-50px);
							opacity: 0;
						}
						to {
							transform: translateY(0);
							opacity: 1;
						}
					}

					.bg-gradient {
						background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
					}

					/* Override for icons and specific elements that shouldn't use Helvetica */
					.btn-close,
					.fa,
					.fas,
					.far,
					.fab,
					svg {
						font-family: inherit !important;
					}

					/* Apply Helvetica to all elements */
					* {
						font-family: Helvetica, Arial, sans-serif;
					}

					/* Teal button styles */
					.btn-teal {
						background-color: #1fa7a1 !important;
						color: white !important;
						border: none !important;
					}

					.btn-teal:hover {
						background-color: #178f8a !important;
						color: white !important;
					}

					/* Fresh Green button styles */
					.btn-green {
						background-color: #6bc048 !important;
						color: white !important;
						border: none !important;
					}

					.btn-green:hover {
						background-color: #5aa63c !important;
						color: white !important;
					}

					/* Product card hover effect */
					.product-card {
						transition:
							transform 0.3s,
							box-shadow 0.3s;
					}

					.product-card:hover {
						transform: translateY(-5px);
						box-shadow: 0 10px 25px rgba(107, 192, 72, 0.2) !important;
					}

					/* ================= RESPONSIVE MEDIA QUERIES ================= */

					/* Extra large devices (1400px and up) */
					@media (min-width: 1400px) {
						.col-xxl-2 {
							flex: 0 0 20%;
							max-width: 20%;
						}

						.container-fluid {
							max-width: 1400px;
							margin: 0 auto;
						}
					}

					/* Large devices (1200px to 1399px) */
					@media (min-width: 1200px) and (max-width: 1399px) {
						.col-xl-3 {
							flex: 0 0 25%;
							max-width: 25%;
						}

						.modal-xl {
							max-width: 1100px;
						}
					}

					/* Medium-large devices (992px to 1199px) */
					@media (min-width: 992px) and (max-width: 1199px) {
						.col-lg-3 {
							flex: 0 0 25%;
							max-width: 25%;
						}

						.modal-xl {
							max-width: 900px;
						}

						.modal-details {
							max-height: 80vh;
							overflow-y: auto;
						}
					}

					/* Tablet devices (768px to 991px) */
					@media (min-width: 768px) and (max-width: 991px) {
						.col-md-4 {
							flex: 0 0 33.333%;
							max-width: 33.333%;
						}

						.header-section {
							height: 250px;
						}

						.modal-xl {
							max-width: 700px;
						}

						.modal-details {
							max-height: 70vh;
							overflow-y: auto;
						}

						.product-card .card-body {
							padding: 0.75rem;
						}
					}

					/* Mobile landscape (576px to 767px) */
					@media (min-width: 576px) and (max-width: 767px) {
						.col-sm-6 {
							flex: 0 0 50%;
							max-width: 50%;
						}

						.header-section {
							height: 200px;
						}

						.header-title {
							font-size: 2rem;
						}

						.header-subtitle {
							font-size: 1.1rem;
						}

						.section-title {
							font-size: 1.5rem;
						}

						.filter-section {
							width: 100%;
						}

						.filter-select {
							min-width: calc(50% - 0.5rem) !important;
						}

						.modal-dialog {
							margin: 0.5rem;
						}

						.modal-body {
							max-height: 85vh;
						}

						.features-grid .col-6 {
							flex: 0 0 100%;
							max-width: 100%;
						}

						.colors-container {
							justify-content: center;
						}
					}

					/* Mobile portrait (400px to 575px) */
					@media (min-width: 400px) and (max-width: 575px) {
						.col-12 {
							flex: 0 0 100%;
							max-width: 100%;
						}

						.header-section {
							height: 180px;
						}

						.header-title {
							font-size: 1.8rem;
						}

						.header-subtitle {
							font-size: 1rem;
						}

						.section-title {
							font-size: 1.3rem;
						}

						.filter-select {
							min-width: 100% !important;
						}

						.product-card {
							margin-bottom: 15px;
						}

						.product-card .card-body {
							padding: 0.75rem;
						}

						.product-title {
							font-size: 0.95rem;
						}

						.modal-dialog {
							margin: 0.25rem;
						}

						.modal-header {
							padding: 0.5rem;
						}

						.modal-title-text {
							font-size: 1.1rem;
						}

						.modal-body {
							max-height: 85vh;
						}

						.modal-details {
							padding: 0.75rem;
						}

						.features-grid .col-6 {
							flex: 0 0 100%;
							max-width: 100%;
						}

						.modal-actions {
							flex-direction: column;
						}

						.order-now-btn {
							width: 100%;
							margin: 0.25rem 0;
						}
					}

					/* Small mobile (below 400px) */
					@media (max-width: 399px) {
						.col-12 {
							flex: 0 0 100%;
							max-width: 100%;
						}

						.header-section {
							height: 150px;
						}

						.header-title {
							font-size: 1.5rem;
						}

						.header-subtitle {
							font-size: 0.9rem;
						}

						.header-link {
							font-size: 0.7rem;
						}

						.section-title {
							font-size: 1.2rem;
						}

						.filter-section {
							width: 100%;
						}

						.filter-select {
							min-width: 100% !important;
							font-size: 0.8rem;
						}

						.product-card .card-body {
							padding: 0.5rem;
						}

						.product-title {
							font-size: 0.85rem;
						}

						.category-badge {
							font-size: 0.6rem;
						}

						.rating-stars {
							font-size: 0.6rem;
						}

						.review-count {
							font-size: 0.55rem;
						}

						.action-buttons {
							flex-wrap: wrap;
							justify-content: flex-end;
						}

						.view-btn,
						.order-btn {
							font-size: 0.65rem;
							padding: 0.15rem 0.4rem;
						}

						.modal-dialog {
							margin: 0.1rem;
						}

						.modal-header {
							padding: 0.4rem;
						}

						.modal-title-text {
							font-size: 1rem;
						}

						.btn-close {
							font-size: 0.7rem;
						}

						.modal-body {
							max-height: 90vh;
						}

						.modal-details {
							padding: 0.5rem;
						}

						.features-grid .col-6 {
							flex: 0 0 100%;
							max-width: 100%;
						}

						.color-btn {
							width: 25px !important;
							height: 25px !important;
						}

						.modal-actions {
							flex-direction: column;
						}

						.order-now-btn {
							width: 100%;
							font-size: 0.8rem;
							padding: 0.4rem;
							margin: 0.2rem 0;
						}
					}

					/* Landscape orientation for mobile */
					@media (max-height: 500px) and (orientation: landscape) {
						.header-section {
							height: 120px;
						}

						.modal-dialog {
							margin: 0.25rem;
							max-width: 95%;
						}

						.modal-body {
							max-height: 80vh;
						}

						.modal-details {
							max-height: 70vh;
							overflow-y: auto;
						}
					}

					/* High-resolution displays */
					@media (min-width: 2000px) {
						.container-fluid {
							max-width: 1800px;
						}

						.col-xxl-2 {
							flex: 0 0 16.666%;
							max-width: 16.666%;
						}
					}

					/* Ensure modal doesn't overflow on very small screens */
					@media (max-width: 320px) {
						.modal-dialog {
							margin: 0;
						}

						.modal-content {
							border-radius: 0;
						}

						.product-card .card-body {
							padding: 0.4rem;
						}

						.view-btn,
						.order-btn {
							font-size: 0.55rem;
							padding: 0.1rem 0.3rem;
						}
					}
				`}</style>
			</div>
			<Footer />
		</>
	);
};

export default Products;
