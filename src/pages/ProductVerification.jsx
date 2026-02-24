import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	FaCheckCircle,
	FaEye,
	FaTimes,
	FaChevronLeft,
	FaChevronRight,
	FaShieldAlt,
	FaCertificate,
	FaSearch,
	FaImage,
	FaCalendarAlt,
	FaClock,
} from 'react-icons/fa';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Array of hero background images (unchanged)
const heroBackgrounds = [
	'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1600&auto=format&fit=crop&q=80',
	'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1600&auto=format&fit=crop&q=80',
	'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&auto=format&fit=crop&q=80',
];

const ProductVerification = () => {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentHeroBg, setCurrentHeroBg] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [searched, setSearched] = useState(false);
	// State for image gallery in modal
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	// State for selected batch
	const [selectedBatch, setSelectedBatch] = useState(null);

	// Cycle through hero backgrounds
	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentHeroBg((prev) => (prev + 1) % heroBackgrounds.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	// Fetch products from API
	const fetchProducts = async (query) => {
		if (!query.trim()) return;
		setLoading(true);
		setError(null);
		setSearched(true);
		try {
			const response = await fetch(
				`https://medikosh-admin.daarukavaneresort.com/api/products?search=${encodeURIComponent(query)}`,
			);
			if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
			const result = await response.json();
			if (result.status && Array.isArray(result.data)) {
				const mappedProducts = result.data.map(mapApiProduct);
				setProducts(mappedProducts);
			} else {
				setProducts([]);
				throw new Error('Invalid API response');
			}
		} catch (err) {
			setError(err.message);
			setProducts([]);
		} finally {
			setLoading(false);
		}
	};

	// Format date to readable format
	const formatDate = (dateString) => {
		if (!dateString) return 'N/A';
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	// Map API product to component's expected format
	const mapApiProduct = (apiProduct) => {
		// Extract all images
		const images =
			apiProduct.images && apiProduct.images.length > 0
				? apiProduct.images.map((img) => img.image_path)
				: ['https://via.placeholder.com/800x600?text=No+Image'];

		// Extract all batches
		const batches =
			apiProduct.batches && apiProduct.batches.length > 0
				? apiProduct.batches.map((batch) => batch.batch_number)
				: [];

		// Parse certifications
		const certificationsList = apiProduct.certifications
			? apiProduct.certifications
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean)
			: [];

		return {
			id: apiProduct.id,
			name: apiProduct.name,
			price: apiProduct.price,
			mfg_date: apiProduct.mfg_date,
			exp_date: apiProduct.exp_date,
			manufacturer: apiProduct.manufacturer || 'Medikosh',
			batches: batches,
			primaryBatch: batches.length > 0 ? batches[0] : 'N/A',
			images: images,
			primaryImage: images[0],
			// REMOVED: description
			ingredients: 'Not specified',
			benefits:
				certificationsList.length > 0
					? certificationsList.map((cert) => `${cert} Certified`).join(', ')
					: 'Not specified',
			certifications: certificationsList,
			isVerified: apiProduct.is_verified == 1,
			status: apiProduct.status == 1,
			metaTitle: apiProduct.meta_title,
			metaDescription: apiProduct.meta_description,
		};
	};

	const handleSearch = (e) => {
		e.preventDefault();
		fetchProducts(searchTerm);
	};

	const openModal = (product, index) => {
		setSelectedProduct(product);
		setCurrentIndex(index);
		setCurrentImageIndex(0);

		// Auto-select the batch that matches the search term
		if (searchTerm.trim()) {
			const matchingBatch = product.batches.find((batch) =>
				batch.toLowerCase().includes(searchTerm.toLowerCase()),
			);
			setSelectedBatch(matchingBatch || null);
		} else {
			setSelectedBatch(null);
		}

		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedProduct(null);
		setSelectedBatch(null);
	};

	const navigateModal = (direction) => {
		let newIndex = currentIndex + direction;
		if (newIndex < 0) newIndex = products.length - 1;
		if (newIndex >= products.length) newIndex = 0;
		setCurrentIndex(newIndex);
		setSelectedProduct(products[newIndex]);
		setCurrentImageIndex(0);

		// Auto-select batch for the new product
		if (searchTerm.trim()) {
			const matchingBatch = products[newIndex].batches.find((batch) =>
				batch.toLowerCase().includes(searchTerm.toLowerCase()),
			);
			setSelectedBatch(matchingBatch || null);
		} else {
			setSelectedBatch(null);
		}
	};

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

	// Filter batches based on search term - SHOW ONLY MATCHING BATCHES
	const getDisplayBatches = (batches) => {
		if (!searchTerm.trim()) return batches; // Show all if no search
		return batches.filter((batch) => batch.toLowerCase().includes(searchTerm.toLowerCase()));
	};

	// Check if product has any matching batch
	const hasMatchingBatch = (product) => {
		if (!searchTerm.trim()) return true;
		return product.batches.some((batch) => batch.toLowerCase().includes(searchTerm.toLowerCase()));
	};

	return (
		<>
			<div className='verification-page' style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
				{/* Hero Section with Background Images */}
				<header
					className='text-center py-5 hero-section'
					style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
				>
					<div
						className='hero-bg-overlay'
						style={{
							backgroundImage: `url(${heroBackgrounds[currentHeroBg]})`,
							opacity: 0.9,
						}}
					/>

					{/* Floating background elements */}
					<div className='hero-floating-elements'>
						<div className='floating-icon icon-1'>
							<FaShieldAlt />
						</div>
						<div className='floating-icon icon-2'>
							<FaCertificate />
						</div>
						<div className='floating-icon icon-3'>
							<FaCheckCircle />
						</div>
						<div className='floating-icon icon-4'>
							<FaSearch />
						</div>
					</div>

					<div className='container position-relative z-2'>
						<div className='hero-content'>
							<h1
								className='fw-bold display-4 mb-4'
								style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
							>
								<span className='title-gradient' style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
									Product Verification
								</span>
								<br />
								<FaCheckCircle className='verified-icon ms-3' />
							</h1>

							<div className='scan-line-wrapper'>
								<div className='scan-line'></div>
								<div className='scanner-beam'></div>
							</div>

							<p
								className='lead mt-4 hero-description'
								style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
							>
								Verify genuine products with batch numbers and certifications.
								<br />
								<span className='hero-tagline' style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
									Authenticity • Safety • Quality
								</span>
							</p>

							{/* ===== FIXED RESPONSIVE SEARCH BAR ===== */}
							<form onSubmit={handleSearch} className='mt-4 search-form'>
								<div className='mx-auto px-3 px-sm-0' style={{ maxWidth: '600px' }}>
									<div className='d-flex flex-column flex-sm-row gap-2 gap-sm-3'>
										<input
											type='text'
											className='form-control flex-grow-1'
											placeholder='Search by product name or batch number...'
											value={searchTerm}
											onChange={(e) => setSearchTerm(e.target.value)}
											style={{
												fontFamily: 'Helvetica, Arial, sans-serif',
												height: '52px',
												fontSize: '16px',
												border: '2px solid rgba(255,255,255,0.3)',
												backgroundColor: 'rgba(255,255,255,0.95)',
												backdropFilter: 'blur(5px)',
												minWidth: '0', // Prevents flex overflow
											}}
										/>
										<button
											className='btn btn-primary d-flex align-items-center justify-content-center gap-2'
											type='submit'
											disabled={loading}
											style={{
												height: '52px',
												fontSize: '16px',
												fontWeight: '600',
												minWidth: '130px',
												backgroundColor: '#212529',
												border: 'none',
												transition: 'all 0.3s ease',
											}}
											onMouseEnter={(e) => (e.target.style.backgroundColor = '#000')}
											onMouseLeave={(e) => (e.target.style.backgroundColor = '#212529')}
										>
											{loading ? (
												<>
													<span
														className='spinner-border spinner-border-sm'
														role='status'
														aria-hidden='true'
													></span>
													<span>Searching...</span>
												</>
											) : (
												<>
													<FaSearch />
													<span>Search</span>
												</>
											)}
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</header>

				{/* Products Section */}
				<section className='container pb-5 pt-4' style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
					{error && (
						<div className='alert alert-danger' role='alert'>
							Error: {error}
						</div>
					)}

					{searched && !loading && products.length === 0 && (
						<div className='text-center py-5'>
							<p className='text-muted'>No products found matching your search.</p>
						</div>
					)}

					{!searched && !loading && (
						<div className='text-center py-5'>
							<p className='text-muted'>Enter a product name or batch number above to verify.</p>
						</div>
					)}

					{loading && (
						<div className='text-center py-5'>
							<div className='spinner-border text-primary' role='status'>
								<span className='visually-hidden'>Loading...</span>
							</div>
						</div>
					)}

					{searched && !loading && products.length > 0 && (
						<div className='row g-4'>
							{products
								.filter((product) => hasMatchingBatch(product))
								.map((item, index) => {
									// Get only matching batches for display
									const displayBatches = getDisplayBatches(item.batches);

									return (
										<div key={item.id} className='col-12 col-sm-6 col-lg-3'>
											<div
												className='product-card'
												style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
											>
												<div className='product-img-container'>
													<img
														src={item.primaryImage}
														alt={item.name}
														className='product-img'
														loading='lazy'
														onError={(e) => {
															e.target.onerror = null;
															e.target.src =
																'https://via.placeholder.com/400x300?text=No+Image';
														}}
													/>
													{/* <div className='product-overlay'>
														<span
															className='view-details-btn'
															style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
														>
															<FaEye className='me-2' />
															View Details
														</span>
													</div> */}
													{/* Show image count if multiple images */}
													{item.images.length > 1 && (
														<div className='product-image-count'>
															<FaImage className='me-1' />
															{item.images.length}
														</div>
													)}
													{/* Show the matching batch count or first matching batch */}
													<div className='product-batch-badge'>
														{searchTerm.trim() && displayBatches.length > 1 ? (
															<>{displayBatches.length} Matching Batches</>
														) : (
															<>Batch: {displayBatches[0] || item.primaryBatch}</>
														)}
													</div>
												</div>

												<div className='p-4'>
													<h5
														className='fw-bold product-title'
														style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
													>
														{item.name}
													</h5>

													{/* Show matching batch info */}
													{/* {searchTerm.trim() && (
														<div className='mb-2 small'>
															{displayBatches.length > 0 ? (
																<span className='text-success'>
																	<FaCheckCircle className='me-1' />
																	{displayBatches.length} matching batch(es)
																</span>
															) : (
																<span className='text-danger'>
																	<FaTimes className='me-1' />
																	No matching batches
																</span>
															)}
														</div>
													)} */}

													<div className='d-flex justify-content-between align-items-center'>
														<span
															className='badge verified-badge'
															style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
														>
															<FaCheckCircle className='me-1' />
															{item.isVerified ? 'Verified' : 'Not Verified'}
														</span>
														<Link
															className='btn btn-outline-primary btn-sm verify-btn'
															to={`/product/${item.id}`}
														>
															Details
														</Link>
														{/* <button
															className='btn btn-outline-primary btn-sm verify-btn'
															onClick={(e) => {
																e.stopPropagation();
																openModal(item, index);
															}}
															style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
														>
															<FaEye className='me-1' />
															Details
														</button> */}
													</div>
												</div>
											</div>
										</div>
									);
								})}
						</div>
					)}
				</section>

				{/* Product Modal */}
				{isModalOpen && selectedProduct && (
					<div className='product-modal-overlay' onClick={closeModal}>
						<div
							className='product-modal'
							onClick={(e) => e.stopPropagation()}
							style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
						>
							<button className='modal-close' onClick={closeModal}>
								<FaTimes />
							</button>

							<button className='modal-nav prev' onClick={() => navigateModal(-1)}>
								<FaChevronLeft />
							</button>

							<button className='modal-nav next' onClick={() => navigateModal(1)}>
								<FaChevronRight />
							</button>

							<div className='modal-content'>
								<div className='row'>
									<div className='col-lg-6'>
										{/* Image Gallery */}
										<div className='modal-image-gallery'>
											<img
												src={selectedProduct.images[currentImageIndex]}
												alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`}
												className='modal-img'
												onError={(e) => {
													e.target.onerror = null;
													e.target.src =
														'https://via.placeholder.com/800x600?text=Image+Not+Found';
												}}
											/>

											{/* Image Navigation */}
											{selectedProduct.images.length > 1 && (
												<>
													<button className='modal-image-nav prev' onClick={prevImage}>
														<FaChevronLeft />
													</button>
													<button className='modal-image-nav next' onClick={nextImage}>
														<FaChevronRight />
													</button>

													{/* Image Counter */}
													<div className='modal-image-counter'>
														{currentImageIndex + 1} / {selectedProduct.images.length}
													</div>
												</>
											)}
										</div>

										{/* Thumbnail Gallery */}
										{selectedProduct.images.length > 1 && (
											<div className='modal-thumbnails'>
												{selectedProduct.images.map((img, idx) => (
													<img
														key={idx}
														src={img}
														alt={`Thumbnail ${idx + 1}`}
														className={`thumbnail-img ${idx === currentImageIndex ? 'active' : ''}`}
														onClick={() => setCurrentImageIndex(idx)}
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

									<div className='col-lg-6'>
										<h3
											className='modal-title'
											style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
										>
											{selectedProduct.name}
										</h3>

										{/* Batches Section - SHOW ONLY MATCHING BATCHES */}
										<div className='batches-section mb-4'>
											<h5 className='fw-bold mb-3'>
												{searchTerm.trim() ? (
													<>Matching Batches for "{searchTerm}"</>
												) : (
													<>Available Batches</>
												)}
											</h5>

											{/* Get only matching batches */}
											{(() => {
												const displayBatches = getDisplayBatches(selectedProduct.batches);

												return displayBatches.length > 0 ? (
													<div className='batches-grid'>
														{displayBatches.map((batch, idx) => {
															const isSelected = selectedBatch === batch;

															return (
																<button
																	key={idx}
																	className={`batch-button ${isSelected ? 'selected' : ''}`}
																	onClick={() => setSelectedBatch(batch)}
																	style={{
																		fontFamily: 'Helvetica, Arial, sans-serif',
																		backgroundColor: '#6bc048',
																		color: 'white',
																		border: '1px solid #dee2e6',
																		padding: '8px 15px',
																		margin: '0 5px 5px 0',
																		cursor: 'pointer',
																	}}
																>
																	{batch}
																	<FaCheckCircle className='ms-2' />
																</button>
															);
														})}
													</div>
												) : (
													<div className='alert alert-warning'>
														No batches match your search term.
													</div>
												);
											})()}
										</div>

										{/* Show selected batch details if any */}
										{selectedBatch && (
											<div
												className='selected-batch-info mb-4 p-3'
												style={{ background: '#f8f9fa', borderLeft: '4px solid #212529' }}
											>
												<h6 className='fw-bold mb-2'>Selected Batch: {selectedBatch}</h6>
												<p className='mb-0 small text-muted'>
													This batch is verified and authentic.
												</p>
											</div>
										)}

										{/* MFG Date and EXP Date Section */}
										<div className='row mb-4'>
											<div className='col-6'>
												<div
													className='date-card p-3'
													style={{ background: '#f8f9fa', borderLeft: '4px solid #212529' }}
												>
													<div className='d-flex align-items-center mb-2'>
														<FaCalendarAlt
															style={{ color: '#212529', marginRight: '8px' }}
														/>
														<h6 className='fw-bold mb-0'>Manufacturing Date</h6>
													</div>
													<p className='mb-0' style={{ fontSize: '1rem', fontWeight: '500' }}>
														{formatDate(selectedProduct.mfg_date)}
													</p>
												</div>
											</div>
											<div className='col-6'>
												<div
													className='date-card p-3'
													style={{ background: '#f8f9fa', borderLeft: '4px solid #dc3545' }}
												>
													<div className='d-flex align-items-center mb-2'>
														<FaClock style={{ color: '#dc3545', marginRight: '8px' }} />
														<h6 className='fw-bold mb-0'>Expiry Date</h6>
													</div>
													<p className='mb-0' style={{ fontSize: '1rem', fontWeight: '500' }}>
														{formatDate(selectedProduct.exp_date)}
													</p>
												</div>
											</div>
										</div>

										<div className='modal-info-grid'>
											<div className='info-item'>
												<strong style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
													Price
												</strong>
												<span style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
													₹ {selectedProduct?.price}
												</span>
											</div>
											<div className='info-item'>
												<strong style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
													Status
												</strong>
												<span style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
													{selectedProduct.status ? 'Active' : 'Inactive'}
												</span>
											</div>
										</div>

										<div className='mt-4'>
											{/* REMOVED: Description section */}
											<h5 style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
												Certifications
											</h5>
											<div>
												{selectedProduct.certifications.map((cert, idx) => (
													<span
														key={idx}
														className='cert-badge me-2 mb-2'
														style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
													>
														{cert}
													</span>
												))}
											</div>
										</div>

										<div className='mt-4'>
											<span
												className='badge verified-badge-lg'
												style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
											>
												<FaShieldAlt className='me-2' />
												{selectedProduct.isVerified
													? 'Genuine & Verified Product'
													: 'Not Verified'}
											</span>
											<Link></Link>
											<br />
											<br />
											<Link className='btn btn-info' to={`/product/${selectedProduct.id}`}>
												View Details
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div className='modal-footer'>
								<div className='modal-pagination'>
									{products.map((_, idx) => (
										<span
											key={idx}
											className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
											onClick={() => {
												setCurrentIndex(idx);
												setSelectedProduct(products[idx]);
												setCurrentImageIndex(0);
												// Auto-select batch for the new product
												if (searchTerm.trim()) {
													const matchingBatch = products[idx].batches.find((batch) =>
														batch.toLowerCase().includes(searchTerm.toLowerCase()),
													);
													setSelectedBatch(matchingBatch || null);
												} else {
													setSelectedBatch(null);
												}
											}}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				)}

				<style>{`
					.verification-page {
						font-family: Helvetica, Arial, sans-serif !important;
						background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
						min-height: 100vh;
					}

					/* HERO SECTION */
					.hero-section {
						position: relative;
						height: 80vh;
						min-height: 300px;
						display: flex;
						align-items: center;
						justify-content: center;
						overflow: hidden;
						color: white;
						margin-top: -70px;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.hero-bg-overlay {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						z-index: 1;
					}

					.hero-bg-overlay::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: linear-gradient(135deg, rgba(13, 110, 253, 0.9) 0%, rgba(0, 198, 255, 0.85) 100%);
						z-index: 2;
					}

					.hero-floating-elements {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						z-index: 2;
						pointer-events: none;
					}

					.floating-icon {
						position: absolute;
						color: rgba(255, 255, 255, 0.2);
						font-size: 40px;
					}

					.floating-icon.icon-1 {
						top: 20%;
						left: 10%;
					}

					.floating-icon.icon-2 {
						top: 60%;
						right: 15%;
					}

					.floating-icon.icon-3 {
						bottom: 30%;
						left: 20%;
					}

					.floating-icon.icon-4 {
						top: 40%;
						right: 25%;
					}

					.hero-content {
						position: relative;
						z-index: 3;
						text-align: center;
					}

					.title-gradient {
						background: linear-gradient(90deg, #ffffff 0%, #ffdd40 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						background-clip: text;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.verified-icon {
						color: #00ff99;
						margin-left: 15px;
						vertical-align: middle;
					}

					.scan-line-wrapper {
						position: relative;
						width: 100%;
						max-width: 500px;
						margin: 30px auto;
						height: 2px;
						overflow: hidden;
					}

					.scan-line {
						width: 100%;
						height: 100%;
						background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
					}

					.scanner-beam {
						position: absolute;
						top: -25px;
						left: 50%;
						width: 50px;
						height: 50px;
						background: radial-gradient(circle, rgba(0, 255, 153, 0.5) 0%, transparent 70%);
						transform: translateX(-50%);
					}

					.hero-description {
						font-size: 1.3rem;
						line-height: 1.6;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.hero-tagline {
						display: block;
						font-size: 1.1rem;
						color: #ffdd40;
						margin-top: 10px;
						font-weight: 600;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					/* ===== FIXED RESPONSIVE SEARCH FORM ===== */
					.search-form {
						margin-top: 2rem;
						width: 100%;
					}

					.search-form .form-control {
						box-shadow: 0 4px 15px rgba(0,0,0,0.1);
						transition: all 0.3s ease;
					}

					.search-form .form-control:focus {
						outline: none;
						box-shadow: 0 4px 20px rgba(255,255,255,0.2);
						border-color: #ffdd40 !important;
					}

					.search-form .btn {
						box-shadow: 0 4px 15px rgba(0,0,0,0.2);
						font-weight: 600;
						letter-spacing: 0.5px;
					}

					.search-form .btn:hover {
						transform: translateY(-2px);
						box-shadow: 0 6px 20px rgba(0,0,0,0.3);
					}

					/* PRODUCT CARD - NO SHADOWS */
					.product-card {
						background: white;
						border: 1px solid #e9ecef;
						height: 100%;
						width: 100%;
						display: flex;
						flex-direction: column;
						transition: all 0.2s ease;
						box-shadow: none !important;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.product-card:hover {
						border-color: #adb5bd;
						box-shadow: none !important;
					}

					.product-img-container {
						position: relative;
						width: 100%;
						height: 220px;
						overflow: hidden;
					}

					.product-img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						transition: transform 0.3s ease;
					}

					.product-card:hover .product-img {
						transform: scale(1.05);
					}

					.product-batch-badge {
						position: absolute;
						top: 15px;
						right: 15px;
						background: #212529;
						color: white;
						padding: 5px 12px;
						font-size: 0.8rem;
						font-weight: 600;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.product-image-count {
						position: absolute;
						bottom: 15px;
						right: 15px;
						background: rgba(33, 37, 41, 0.8);
						color: white;
						padding: 5px 10px;
						font-size: 0.8rem;
						display: flex;
						align-items: center;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.product-overlay {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: rgba(33, 37, 41, 0.9);
						display: flex;
						align-items: center;
						justify-content: center;
						opacity: 0;
						transition: opacity 0.3s ease;
					}

					.product-card:hover .product-overlay {
						opacity: 1;
					}

					.view-details-btn {
						background: white;
						color: #212529;
						padding: 12px 25px;
						font-weight: 600;
						display: flex;
						align-items: center;
						border: none;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.section-header {
						margin-bottom: 50px;
					}

					.section-title {
						font-size: 2.5rem;
						background: linear-gradient(135deg, #0d6efd 0%, #00c6ff 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						background-clip: text;
						margin-bottom: 15px;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.section-subtitle {
						color: #6c757d;
						font-size: 1.1rem;
						max-width: 600px;
						margin: 0 auto;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.product-title {
						color: #212529;
						margin-bottom: 15px;
						font-size: 1.1rem;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					/* VERIFIED BADGE */
					.verified-badge {
						background: #198754;
						padding: 8px 15px;
						font-size: 0.85rem;
						border: none;
						color: white;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.verified-badge-lg {
						background: #198754;
						padding: 12px 25px;
						font-size: 1rem;
						color: white;
						border: none;
						display: inline-flex;
						align-items: center;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.verify-btn {
						padding: 6px 15px;
						font-weight: 600;
						border: 1px solid #212529;
						color: #212529;
						background: transparent;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.verify-btn:hover {
						background: #212529;
						color: white;
						border-color: #212529;
					}

					/* MODAL STYLES */
					.product-modal-overlay {
						position: fixed;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: rgba(0, 0, 0, 0.8);
						backdrop-filter: blur(10px);
						display: flex;
						align-items: center;
						justify-content: center;
						z-index: 1000;
					}

					.product-modal {
						background: white;
						max-width: 1000px;
						width: 95%;
						max-height: 90vh;
						overflow-y: auto;
						position: relative;
						border: 1px solid #dee2e6;
						box-shadow: none !important;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.modal-close {
						position: absolute;
						top: 20px;
						right: 20px;
						background: #212529;
						color: white;
						border: none;
						width: 40px;
						height: 40px;
						display: flex;
						align-items: center;
						justify-content: center;
						cursor: pointer;
						z-index: 1001;
					}

					.modal-nav {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						background: #212529;
						color: white;
						border: none;
						width: 40px;
						height: 40px;
						display: flex;
						align-items: center;
						justify-content: center;
						cursor: pointer;
						z-index: 1001;
					}

					.modal-nav.prev {
						left: 10px;
					}

					.modal-nav.next {
						right: 10px;
					}

					.modal-nav:hover {
						background: #343a40;
					}

					.modal-content {
						padding: 30px;
					}

					/* Image Gallery Styles */
					.modal-image-gallery {
						position: relative;
						width: 100%;
						height: 400px;
						overflow: hidden;
					}

					.modal-img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}

					.modal-image-nav {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						background: rgba(33, 37, 41, 0.8);
						color: white;
						border: none;
						width: 40px;
						height: 40px;
						display: flex;
						align-items: center;
						justify-content: center;
						cursor: pointer;
						z-index: 10;
					}

					.modal-image-nav.prev {
						left: 10px;
					}

					.modal-image-nav.next {
						right: 10px;
					}

					.modal-image-nav:hover {
						background: #212529;
					}

					.modal-image-counter {
						position: absolute;
						bottom: 10px;
						right: 10px;
						background: rgba(33, 37, 41, 0.8);
						color: white;
						padding: 5px 10px;
						font-size: 0.8rem;
						z-index: 10;
					}

					.modal-thumbnails {
						display: flex;
						gap: 5px;
						padding: 10px;
						overflow-x: auto;
						background: #f8f9fa;
					}

					.thumbnail-img {
						width: 60px;
						height: 60px;
						object-fit: cover;
						cursor: pointer;
						border: 2px solid transparent;
						transition: border-color 0.2s ease;
					}

					.thumbnail-img.active {
						border-color: #212529;
					}

					.thumbnail-img:hover {
						border-color: #6c757d;
					}

					/* Batches Section */
					.batches-section {
						margin-bottom: 1.5rem;
					}

					.batches-grid {
						display: flex;
						flex-wrap: wrap;
						gap: 5px;
					}

					.batch-button {
						font-family: Helvetica, Arial, sans-serif !important;
						background: #198754;
						color: white;
						border: 1px solid #dee2e6;
						padding: 8px 15px;
						margin: 0 5px 5px 0;
						cursor: pointer;
						transition: all 0.2s ease;
					}

					.batch-button.selected {

						color: white;
						border-color: #212529;
					}

					.batch-button:hover {
						opacity: 0.9;
					}

					.selected-batch-info {
						background: #f8f9fa;
						border-left: 4px solid #212529;
						padding: 1rem;
						margin-bottom: 1.5rem;
					}

					.modal-title {
						color: #212529;
						margin-bottom: 20px;
						font-weight: 700;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.modal-info-grid {
						display: grid;
						grid-template-columns: repeat(2, 1fr);
						gap: 15px;
						margin-bottom: 20px;
					}

					.info-item {
						background: #f8f9fa;
						padding: 15px;
						border-left: 4px solid #212529;
					}

					.info-item strong {
						display: block;
						color: #495057;
						font-size: 0.9rem;
						margin-bottom: 5px;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.info-item span {
						color: #212529;
						font-weight: 600;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.batch-code {
						font-family: monospace, Helvetica, Arial, sans-serif;
						background: #e9ecef;
						padding: 3px 8px;
					}

					.cert-badge {
						display: inline-block;
						background: #e9ecef;
						color: #212529;
						padding: 8px 15px;
						font-size: 0.9rem;
						font-family: Helvetica, Arial, sans-serif !important;
					}

					.modal-footer {
						padding: 20px;
						border-top: 1px solid #dee2e6;
					}

					.modal-pagination {
						display: flex;
						justify-content: center;
						gap: 8px;
					}

					.pagination-dot {
						width: 10px;
						height: 10px;
						background: #dee2e6;
						cursor: pointer;
					}

					.pagination-dot.active {
						background: #212529;
					}

					/* Date Cards */
					.date-card {
						transition: all 0.3s ease;
					}

					.date-card:hover {
						transform: translateY(-2px);
						box-shadow: 0 4px 8px rgba(0,0,0,0.1);
					}

					/* ===== RESPONSIVE FIXES FOR SEARCH BAR ===== */
					@media (max-width: 575.98px) {
						.search-form .d-flex {
							flex-direction: column !important;
						}
						
						.search-form .form-control,
						.search-form .btn {
							width: 100% !important;
							min-width: 100% !important;
							margin: 0 !important;
						}
						
						.search-form .form-control {
							margin-bottom: 10px !important;
						}
						
						.hero-section {
							padding-left: 10px;
							padding-right: 10px;
						}
						
						.hero-description {
							font-size: 1.1rem;
							padding: 0 10px;
						}
						
						.display-4 {
							font-size: 2rem !important;
						}
						
						.date-card {
							padding: 0.75rem !important;
						}
						
						.date-card h6 {
							font-size: 0.9rem;
						}
						
						.date-card p {
							font-size: 0.85rem !important;
						}
					}

					/* For very small devices */
					@media (max-width: 360px) {
						.search-form .form-control {
							font-size: 14px;
						}
						
						.search-form .btn {
							font-size: 14px;
						}
						
						.date-card {
							padding: 0.5rem !important;
						}
						
						.date-card h6 {
							font-size: 0.8rem;
						}
						
						.date-card p {
							font-size: 0.75rem !important;
						}
					}

					/* Ensure minimum width on all screens */
					.search-form .form-control {
						min-width: 200px;
					}

					/* Button width for different screen sizes */
					@media (min-width: 576px) {
						.w-sm-auto {
							width: auto !important;
						}
					}

					@media (max-width: 575px) {
						.w-sm-auto {
							width: 100% !important;
						}
					}

					/* Remove all border-radius */
					* {
						border-radius: 0 !important;
					}

					/* Override any specific border-radius that might be set */
					.hero-section,
					.product-card,
					.product-img-container,
					.product-img,
					.product-batch-badge,
					.product-image-count,
					.view-details-btn,
					.verified-badge,
					.verified-badge-lg,
					.verify-btn,
					.product-modal,
					.modal-close,
					.modal-nav,
					.modal-img,
					.info-item,
					.batch-code,
					.cert-badge,
					.pagination-dot,
					.btn,
					.badge,
					.modal-image-nav,
					.modal-image-counter,
					.thumbnail-img,
					.batch-button,
					.date-card {
						border-radius: 0 !important;
						box-shadow: none !important;
					}

					/* Remove any blue hover effects */
					.btn-outline-primary {
						border-color: #212529;
						color: #212529;
					}

					.btn-outline-primary:hover {
						background-color: #212529;
						border-color: #212529;
						color: white;
					}

					.product-image-count,
					.modal-close,
					.modal-nav,
					.modal-image-nav {
						background: #212529;
					}

					.product-batch-badge {
						background: #6bc048 !important;
					}

					/* Apply Helvetica to all text elements */
					h1,
					h2,
					h3,
					h4,
					h5,
					h6,
					p,
					span,
					a,
					button,
					div,
					strong,
					label,
					input,
					textarea,
					select,
					option,
					li,
					td,
					th {
						font-family: Helvetica, Arial, sans-serif !important;
					}
				`}</style>
			</div>
			<Footer />
		</>
	);
};

export default ProductVerification;
