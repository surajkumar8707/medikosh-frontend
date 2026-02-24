import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
	FaCheckCircle,
	FaChevronLeft,
	FaChevronRight,
	FaTimes,
	FaCalendarAlt,
	FaTag,
	FaShieldAlt,
	FaAward,
	FaSearch,
	FaClock,
	FaIndustry,
	FaBox,
} from 'react-icons/fa';
import Footer from '../components/Footer';

const ProductDetail = () => {
	const { id } = useParams();
	const [searchParams] = useSearchParams();
	const searchedBatchNumber = searchParams.get('batch'); // Get batch from URL query parameter

	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [selectedBatch, setSelectedBatch] = useState(null);
	const [filteredBatches, setFilteredBatches] = useState([]);

	useEffect(() => {
		const fetchProductDetail = async () => {
			try {
				setLoading(true);
				const response = await fetch(`https://medikosh-admin.daarukavaneresort.com/api/products/${id}`);
				if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
				const result = await response.json();
				console.log(result);

				if (result.status && result.data) {
					// Map the data to include properly formatted images
					const productData = {
						...result.data,
						images: result.data.images?.map((img) => img.image_path) || [],
						certifications: result.data.certifications?.split(',').map((c) => c.trim()) || [],
					};
					setProduct(productData);

					// Filter batches based on searched batch number
					if (searchedBatchNumber && productData.batches) {
						const matchingBatches = productData.batches.filter((batch) =>
							batch.batch_number.toLowerCase().includes(searchedBatchNumber.toLowerCase()),
						);
						setFilteredBatches(matchingBatches);

						// Auto-select the first matching batch if found
						if (matchingBatches.length > 0) {
							setSelectedBatch(matchingBatches[0]);
						}
					} else {
						setFilteredBatches(productData.batches || []);
					}

					console.log('Product loaded:', productData);
				} else {
					throw new Error('Invalid API response');
				}
			} catch (err) {
				setError(err.message);
				console.error('Error fetching product:', err);
			} finally {
				setLoading(false);
			}
		};

		if (id) {
			fetchProductDetail();
		}
	}, [id, searchedBatchNumber]);

	const cleanDescription = (description) => {
		if (!description) return 'No description available';
		return description.replace(/<[^>]*>/g, '');
	};

	const formatDate = (dateString) => {
		if (!dateString) return 'N/A';
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	const nextImage = () => {
		if (product?.images) {
			setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
		}
	};

	const prevImage = () => {
		if (product?.images) {
			setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
		}
	};

	// Check if date is expired
	const isExpired = (dateString) => {
		if (!dateString) return false;
		const expiryDate = new Date(dateString);
		const today = new Date();
		return expiryDate < today;
	};

	if (loading) {
		return (
			<div className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
				<div className='spinner-border text-primary' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
		);
	}

	if (error || !product) {
		return (
			<div className='container py-5 text-center'>
				<div className='alert alert-danger' role='alert'>
					Error loading product: {error || 'Product not found'}
				</div>
				<button className='btn btn-outline-primary mt-3' onClick={() => window.history.back()}>
					Go Back
				</button>
			</div>
		);
	}

	return (
		<>
			<div className='product-detail-page' style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
				<div className='container-fluid py-3' style={{ background: '#f8f9fa' }}>
					<div className='container'>
						<button
							className='btn btn-link text-decoration-none p-0'
							onClick={() => window.history.back()}
							style={{ color: '#212529' }}
						>
							<FaChevronLeft className='me-2' />
							Back to Products
						</button>
					</div>
				</div>

				<div className='container py-5'>
					<div className='row g-5'>
						{/* Left Column - Image Gallery */}
						<div className='col-lg-6'>
							<div className='image-gallery'>
								{/* Main Image */}
								<div className='main-image-container position-relative mb-3'>
									<img
										src={
											product.images[currentImageIndex] ||
											'https://via.placeholder.com/800x600?text=No+Image'
										}
										alt={`${product.name} - Image ${currentImageIndex + 1}`}
										className='img-fluid w-100'
										style={{ height: '500px', objectFit: 'cover' }}
										onError={(e) => {
											e.target.onerror = null;
											e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
										}}
									/>

									{/* Image Navigation */}
									{product.images?.length > 1 && (
										<>
											<button
												onClick={prevImage}
												className='btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-3'
												style={{ width: '40px', height: '40px', borderRadius: '0', padding: 0 }}
											>
												<FaChevronLeft />
											</button>
											<button
												onClick={nextImage}
												className='btn btn-dark position-absolute top-50 end-0 translate-middle-y me-3'
												style={{ width: '40px', height: '40px', borderRadius: '0', padding: 0 }}
											>
												<FaChevronRight />
											</button>

											{/* Image Counter */}
											<div className='position-absolute bottom-0 end-0 m-3'>
												<span className='badge bg-dark px-3 py-2'>
													{currentImageIndex + 1} / {product.images.length}
												</span>
											</div>
										</>
									)}
								</div>

								{/* Thumbnail Gallery */}
								{product.images?.length > 1 && (
									<div className='thumbnail-gallery d-flex gap-2 overflow-auto pb-2'>
										{product.images.map((image, index) => (
											<img
												key={index}
												src={image}
												alt={`Thumbnail ${index + 1}`}
												className={`thumbnail-img ${index === currentImageIndex ? 'active' : ''}`}
												onClick={() => setCurrentImageIndex(index)}
												style={{
													width: '80px',
													height: '80px',
													objectFit: 'cover',
													cursor: 'pointer',
													border:
														index === currentImageIndex
															? '3px solid #212529'
															: '2px solid transparent',
												}}
												onError={(e) => {
													e.target.onerror = null;
													e.target.src = 'https://via.placeholder.com/80x80?text=Error';
												}}
											/>
										))}
									</div>
								)}
							</div>
						</div>

						{/* Right Column - Product Information */}
						<div className='col-lg-6'>
							<div className='mb-4'>
								<h1
									className='display-5 fw-bold mb-3'
									style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
								>
									{product.name}
								</h1>

								<div className='d-flex gap-2 mb-3 flex-wrap'>
									{product.is_verified == 1 && (
										<span className='badge bg-success px-3 py-2' style={{ fontSize: '0.9rem' }}>
											<FaCheckCircle className='me-2' />
											Verified Product
										</span>
									)}
									{product.status == 1 && (
										<span className='badge bg-info px-3 py-2' style={{ fontSize: '0.9rem' }}>
											Active
										</span>
									)}
								</div>

								{/* Manufacturer - NEW */}
								{product.manufacturer && (
									<div className='mb-3'>
										<h6 className='fw-bold mb-2'>Manufacturer</h6>
										<div className='d-flex align-items-center'>
											<FaIndustry className='me-2 text-secondary' />
											<span>{product.manufacturer}</span>
										</div>
									</div>
								)}

								{/* Certifications */}
								{product.certifications && product.certifications.length > 0 && (
									<div className='mb-3'>
										<h6 className='fw-bold mb-2'>Certifications</h6>
										<div className='d-flex flex-wrap gap-2'>
											{product.certifications.map((cert, idx) => (
												<span key={idx} className='badge bg-light text-dark px-3 py-2'>
													<FaAward className='me-2 text-success' />
													{cert.trim()}
												</span>
											))}
										</div>
									</div>
								)}
							</div>

							<div className='row g-3 mb-4'>
								{/* Manufacturing Date */}
								<div className='col-md-6'>
									<div
										className='date-card p-3'
										style={{ background: '#f8f9fa', borderLeft: '4px solid #212529' }}
									>
										<div className='d-flex align-items-center mb-2'>
											<FaCalendarAlt className='me-2' style={{ color: '#212529' }} />
											<h6 className='fw-bold mb-0'>Manufacturing Date</h6>
										</div>
										<p className='mb-0 fs-5 fw-medium'>{formatDate(product.mfg_date)}</p>
										{!product.mfg_date && <small className='text-muted'>Not specified</small>}
									</div>
								</div>

								{/* Expiry Date */}
								<div className='col-md-6'>
									<div
										className='date-card p-3'
										style={{
											background: '#f8f9fa',
											borderLeft: `4px solid ${
												isExpired(product.exp_date) ? '#dc3545' : '#28a745'
											}`,
										}}
									>
										<div className='d-flex align-items-center mb-2'>
											<FaClock
												className='me-2'
												style={{
													color: isExpired(product.exp_date) ? '#dc3545' : '#28a745',
												}}
											/>
											<h6 className='fw-bold mb-0'>Expiry Date</h6>
										</div>
										<p className='mb-0 fs-5 fw-medium'>{formatDate(product.exp_date)}</p>
										{product.exp_date && (
											<small
												className={isExpired(product.exp_date) ? 'text-danger' : 'text-success'}
											>
												{isExpired(product.exp_date) ? 'Expired' : 'Valid'}
											</small>
										)}
										{!product.exp_date && <small className='text-muted'>Not specified</small>}
									</div>
								</div>

								{/* Price */}
								<div className='col-md-6'>
									<div
										className='date-card p-3'
										style={{ background: '#f8f9fa', borderLeft: '4px solid #0d6efd' }}
									>
										<div className='d-flex align-items-center mb-2'>
											<h6
												className='fw-bold mb-0'
												style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
											>
												MRP
											</h6>
										</div>
										<p
											className='mb-0 fs-5 fw-medium'
											style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
										>
											₹ {product?.price}
										</p>
									</div>
								</div>

								{/* Status */}
								<div className='col-md-6'>
									<div
										className='date-card p-3'
										style={{
											background: '#f8f9fa',
											borderLeft: `4px solid ${product?.status ? '#28a745' : '#dc3545'}`,
										}}
									>
										<div className='d-flex align-items-center mb-2'>
											<h6
												className='fw-bold mb-0'
												style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
											>
												Status
											</h6>
										</div>
										<p
											className='mb-0 fs-5 fw-medium'
											style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
										>
											{product?.status ? 'Active' : 'Inactive'}
										</p>
									</div>
								</div>
							</div>

							{/* Description
							<div className='mb-4'>
								<h5 className='fw-bold mb-3'>Description</h5>
								<p className='text-muted' style={{ lineHeight: 1.8 }}>
									{cleanDescription(product.description)}
								</p>
							</div> */}

							{/* Product Meta Information */}
							{/* <div className='row g-3 mb-4'>
								<div className='col-6'>
									<div className='p-3 bg-light'>
										<small className='text-muted d-block mb-1'>Product ID</small>
										<strong>#{product.id}</strong>
									</div>
								</div>
								<div className='col-6'>
									<div className='p-3 bg-light'>
										<small className='text-muted d-block mb-1'>Last Updated</small>
										<strong>{formatDate(product.updated_at)}</strong>
									</div>
								</div>
							</div> */}

							{/* Batches Section - Modified to show only filtered batches */}
							<div className='batches-section mb-4'>
								<h5 className='fw-bold mb-3'>
									<FaTag className='me-2 text-success' />
									{searchedBatchNumber ? (
										<>
											Search Results for Batch:{' '}
											<span className='text-primary'>"{searchedBatchNumber}"</span>
										</>
									) : (
										<>Available Batches ({filteredBatches.length})</>
									)}
								</h5>

								{filteredBatches.length > 0 ? (
									<div className='batches-grid' style={{ maxHeight: '300px', overflowY: 'auto' }}>
										{filteredBatches.map((batch) => (
											<div
												key={batch.id}
												className={`batch-card p-3 mb-2 ${selectedBatch?.id === batch.id ? 'selected' : ''}`}
												onClick={() => setSelectedBatch(batch)}
												style={{
													background: selectedBatch?.id === batch.id ? '#212529' : '#f8f9fa',
													color: selectedBatch?.id === batch.id ? 'white' : '#212529',
													cursor: 'pointer',
													border: '1px solid #dee2e6',
													transition: 'all 0.2s ease',
												}}
											>
												<div className='d-flex justify-content-between align-items-center'>
													<div>
														<strong>Batch: {batch.batch_number}</strong>
														<div className='small mt-1'>
															<FaCalendarAlt className='me-1' />
															Created: {formatDate(batch.created_at)}
														</div>
													</div>
													{selectedBatch?.id === batch.id && (
														<FaCheckCircle className='text-success' />
													)}
												</div>
											</div>
										))}
									</div>
								) : (
									<div className='alert alert-warning d-flex align-items-center gap-2' role='alert'>
										<FaSearch />
										<span>
											No batches found matching "<strong>{searchedBatchNumber}</strong>"
										</span>
									</div>
								)}
							</div>

							{/* Selected Batch Details */}
							{selectedBatch && (
								<div
									className='selected-batch-details p-4 mb-4'
									style={{ background: '#f8f9fa', borderLeft: '4px solid #212529' }}
								>
									<h6 className='fw-bold mb-3'>Selected Batch Details</h6>
									<div className='row g-3'>
										<div className='col-6'>
											<small className='text-muted d-block'>Batch Number</small>
											<strong className='font-monospace'>{selectedBatch.batch_number}</strong>
										</div>
										<div className='col-6'>
											<small className='text-muted d-block'>Created On</small>
											<strong>{formatDate(selectedBatch.created_at)}</strong>
										</div>
										<div className='col-6'>
											<small className='text-muted d-block'>Last Updated</small>
											<strong>{formatDate(selectedBatch.updated_at)}</strong>
										</div>
										<div className='col-6'>
											<small className='text-muted d-block'>Batch ID</small>
											<strong>#{selectedBatch.id}</strong>
										</div>
									</div>
								</div>
							)}

							{/* Verification Status */}
							<div className='verification-status p-4 text-center' style={{ background: '#f8f9fa' }}>
								<FaShieldAlt size={40} className='text-success mb-3' />
								<h6 className='fw-bold mb-2'>Genuine Product</h6>
								<p className='small text-muted mb-0'>
									This product is verified and authenticated by Medikosh
								</p>
							</div>
							<Link className='btn btn-success text-center verify-btn mt-4' to={`/Products`}>
								View Details
							</Link>
						</div>
					</div>
				</div>

				<style>
					{`
            .product-detail-page {
              min-height: 100vh;
              background: white;
            }

            .thumbnail-img {
              transition: all 0.2s ease;
            }

            .thumbnail-img:hover {
              opacity: 0.8;
            }

            .batch-card {
              transition: all 0.2s ease;
            }

            .batch-card:hover {
              transform: translateX(5px);
              border-color: #212529 !important;
            }

            .batch-card.selected {
              border-color: #212529 !important;
            }

            .date-card {
              transition: all 0.3s ease;
              height: 100%;
            }

            .date-card:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }

            * {
              border-radius: 0 !important;
            }

            .btn,
            .badge,
            .batch-card,
            .selected-batch-details,
            .verification-status,
            .date-card {
              border-radius: 0 !important;
            }

            .batches-grid::-webkit-scrollbar {
              width: 6px;
            }

            .batches-grid::-webkit-scrollbar-track {
              background: #f1f1f1;
            }

            .batches-grid::-webkit-scrollbar-thumb {
              background: #888;
            }

            .batches-grid::-webkit-scrollbar-thumb:hover {
              background: #555;
            }

            @media (max-width: 768px) {
              .main-image-container img {
                height: 350px !important;
              }
              
              .date-card .fs-5 {
                font-size: 1rem !important;
              }
            }

            @media (max-width: 576px) {
              .main-image-container img {
                height: 250px !important;
              }
              
              .date-card {
                padding: 0.75rem !important;
              }
              
              .date-card h6 {
                font-size: 0.9rem;
              }
              
              .date-card .fs-5 {
                font-size: 0.9rem !important;
              }
            }
          `}
				</style>
			</div>
			<Footer />
		</>
	);
};

export default ProductDetail;
