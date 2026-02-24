import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const ResponsiveNavbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [showContactModal, setShowContactModal] = useState(false);
	const [currentTime, setCurrentTime] = useState('');
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
		productInterest: '',
	});
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Live time updater
	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			const options = {
				weekday: 'short',
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			};
			setCurrentTime(now.toLocaleDateString('en-US', options));
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const generateWhatsAppMessage = () => {
		const { name, phone, email, message, productInterest } = formData;
		const phoneNumber = '1234567890'; // Replace with your actual WhatsApp number
		const encodedMessage = encodeURIComponent(
			`*New Contact Form Submission*\n\n` +
				`*Name:* ${name}\n` +
				`*Phone:* ${phone}\n` +
				`*Email:* ${email}\n` +
				`*Product Interest:* ${productInterest || 'Not specified'}\n` +
				`*Message:* ${message}\n\n` +
				`*Submitted at:* ${currentTime}\n` +
				`Submitted from website contact form`,
		);
		return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate form
		if (!formData.name || !formData.phone) {
			alert('Please fill in at least name and phone number');
			return;
		}

		// Generate WhatsApp URL
		const whatsappUrl = generateWhatsAppMessage();

		// Open WhatsApp in new tab
		window.open(whatsappUrl, '_blank');

		// Show success message
		setFormSubmitted(true);

		// Reset form after 2 seconds
		setTimeout(() => {
			setFormData({
				name: '',
				phone: '',
				email: '',
				message: '',
				productInterest: '',
			});
			setFormSubmitted(false);
			setShowContactModal(false);
		}, 2000);
	};

	const ContactModal = () => {
		return (
			<div
				className={`modal fade ${showContactModal ? 'show d-block' : ''}`}
				style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header' style={{ backgroundColor: '#EAF6F6', color: '#2E3A3A' }}>
							<h5 className='modal-title' style={{ color: '#2E3A3A' }}>
								<i className='bi bi-whatsapp me-2' style={{ color: '#25D366' }}></i>
								Contact Us via WhatsApp
							</h5>
							<button
								type='button'
								className='btn-close'
								onClick={() => setShowContactModal(false)}
							></button>
						</div>

						<div className='modal-body p-4'>
							{formSubmitted ? (
								<div className='text-center py-4'>
									<div className='mb-3'>
										<i className='bi bi-check-circle-fill text-success fs-1'></i>
									</div>
									<h5 className='text-success'>Form Submitted!</h5>
									<p style={{ color: '#2E3A3A' }}>You're being redirected to WhatsApp...</p>
									<div className='spinner-border text-success mt-3' role='status'>
										<span className='visually-hidden'>Loading...</span>
									</div>
								</div>
							) : (
								<form onSubmit={handleSubmit}>
									<div className='mb-3'>
										<label className='form-label' style={{ color: '#2E3A3A' }}>
											Name *
										</label>
										<input
											type='text'
											className='form-control'
											name='name'
											value={formData.name}
											onChange={handleInputChange}
											placeholder='Enter your name'
											required
											style={{ color: '#2E3A3A' }}
										/>
									</div>

									<div className='mb-3'>
										<label className='form-label' style={{ color: '#2E3A3A' }}>
											Phone Number *
										</label>
										<div className='input-group'>
											<span className='input-group-text'>
												<i className='bi bi-whatsapp text-success'></i>
											</span>
											<input
												type='tel'
												className='form-control'
												name='phone'
												value={formData.phone}
												onChange={handleInputChange}
												placeholder='1234567890'
												required
												style={{ color: '#2E3A3A' }}
											/>
										</div>
										<small className='text-muted' style={{ color: '#2E3A3A' }}>
											This will be used for WhatsApp
										</small>
									</div>

									<div className='mb-3'>
										<label className='form-label' style={{ color: '#2E3A3A' }}>
											Email
										</label>
										<input
											type='email'
											className='form-control'
											name='email'
											value={formData.email}
											onChange={handleInputChange}
											placeholder='your@email.com'
											style={{ color: '#2E3A3A' }}
										/>
									</div>

									<div className='mb-3'>
										<label className='form-label' style={{ color: '#2E3A3A' }}>
											Product Interest
										</label>
										<select
											className='form-select'
											name='productInterest'
											value={formData.productInterest}
											onChange={handleInputChange}
											style={{ color: '#2E3A3A' }}
										>
											<option value='' style={{ color: '#2E3A3A' }}>
												Select a product...
											</option>
											<option value='Product Verification' style={{ color: '#2E3A3A' }}>
												Product Verification
											</option>
											<option value='Product A' style={{ color: '#2E3A3A' }}>
												Product A
											</option>
											<option value='Product B' style={{ color: '#2E3A3A' }}>
												Product B
											</option>
											<option value='Other' style={{ color: '#2E3A3A' }}>
												Other
											</option>
										</select>
									</div>

									<div className='mb-4'>
										<label className='form-label' style={{ color: '#2E3A3A' }}>
											Message
										</label>
										<textarea
											className='form-control'
											name='message'
											value={formData.message}
											onChange={handleInputChange}
											rows='3'
											placeholder='Tell us about your requirements...'
											style={{ color: '#2E3A3A' }}
										></textarea>
									</div>

									<div className='d-grid gap-2'>
										<button type='submit' className='btn btn-success btn-lg'>
											<i className='bi bi-whatsapp me-2'></i>
											Send via WhatsApp
										</button>
										<button
											type='button'
											className='btn btn-outline-secondary'
											onClick={() => setShowContactModal(false)}
											style={{ color: '#2E3A3A', borderColor: '#2E3A3A' }}
										>
											Cancel
										</button>
									</div>
								</form>
							)}
						</div>

						<div className='modal-footer bg-light'>
							<small className='text-muted' style={{ color: '#2E3A3A' }}>
								<i className='bi bi-info-circle me-1'></i>
								We'll open WhatsApp with your pre-filled message
							</small>
						</div>
					</div>
				</div>
			</div>
		);
	};

	// Contact Dropdown Component
	const ContactDropdown = () => {
		return (
			<div
				className={`contact-dropdown dropdown ${showDropdown ? 'show' : ''}`}
				onMouseEnter={() => setShowDropdown(true)}
				onMouseLeave={() => setShowDropdown(false)}
			>
				<div
					className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
					style={{
						border: 'none',
						boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
						borderRadius: '15px',
						padding: '0',
						minWidth: '280px',
						marginTop: '10px',
					}}
				>
					<div className='p-3 rounded-top' style={{ backgroundColor: '#EAF6F6', color: '#2E3A3A' }}>
						<h6 className='mb-0' style={{ color: '#2E3A3A' }}>
							<i className='bi bi-headset me-2'></i>
							Contact Options
						</h6>
					</div>

					<div className='p-3 bg-white'>
						<div className='mb-3'>
							<div className='d-flex align-items-center mb-2'>
								<i className='bi bi-envelope fs-5 me-2' style={{ color: '#EAF6F6' }}></i>
								<strong style={{ color: '#2E3A3A' }}>Email Us:</strong>
							</div>
							<a
								href='mailto:info@example.com'
								className='text-decoration-none d-block p-2 rounded hover-bg-light'
								style={{ color: '#2E3A3A', transition: 'all 0.3s' }}
							>
								<small>info@example.com</small>
							</a>
							<a
								href='mailto:support@example.com'
								className='text-decoration-none d-block p-2 rounded hover-bg-light'
								style={{ color: '#2E3A3A', transition: 'all 0.3s' }}
							>
								<small>support@example.com</small>
							</a>
						</div>

						<div className='mb-3'>
							<div className='d-flex align-items-center mb-2'>
								<i className='bi bi-telephone fs-5 me-2' style={{ color: '#EAF6F6' }}></i>
								<strong style={{ color: '#2E3A3A' }}>Call Us:</strong>
							</div>
							<a
								href='tel:+1234567890'
								className='text-decoration-none d-block p-2 rounded hover-bg-light'
								style={{ color: '#2E3A3A', transition: 'all 0.3s' }}
							>
								<small>+1 (234) 567-8900</small>
							</a>
							<a
								href='tel:+1234567891'
								className='text-decoration-none d-block p-2 rounded hover-bg-light'
								style={{ color: '#2E3A3A', transition: 'all 0.3s' }}
							>
								<small>+1 (234) 567-8901 (Support)</small>
							</a>
						</div>

						<div className='mb-3'>
							<div className='d-flex align-items-center mb-2'>
								<i className='bi bi-clock fs-5 me-2' style={{ color: '#EAF6F6' }}></i>
								<strong style={{ color: '#2E3A3A' }}>Business Hours:</strong>
							</div>
							<div className='small' style={{ color: '#2E3A3A' }}>
								<div>Mon-Fri: 9:00 AM - 6:00 PM</div>
								<div>Sat: 10:00 AM - 4:00 PM</div>
								<div>Sun: Closed</div>
							</div>
						</div>

						<button
							className='btn w-100 mt-2 text-white'
							style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
							onClick={() => setShowContactModal(true)}
						>
							<i className='bi bi-whatsapp me-2'></i>
							WhatsApp Message
						</button>
					</div>

					<div className='p-2 bg-light rounded-bottom border-top'>
						<small className='text-muted d-flex align-items-center' style={{ color: '#2E3A3A' }}>
							<i className='bi bi-lightning-charge me-1'></i>
							<span>24/7 Emergency Support Available</span>
						</small>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='responsive-navbar-container'>
			{/* Main Navbar */}
			<nav
				className={`navbar navbar-expand-lg navbar-light shadow-lg fixed-top animate__animated ${
					scrolled ? 'animate__slideInDown py-1' : 'py-3'
				}`}
				style={{
					transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
					backgroundColor: '#EAF6F6',
				}}
			>
				<div className='container px-3 px-md-4'>
					{/* Brand/Logo */}
					<a
						className='navbar-brand fw-bold fs-3 logo-animate d-flex align-items-center'
						href='/'
						style={{ color: '#2E3A3A' }}
					>
						<img src='/header.png' alt='Logo' className='me-2' style={{ height: '60px', width: 'auto' }} />
					</a>

					{/* Animated Mobile Toggle Button */}
					<button
						className='navbar-toggler border-0 p-2 animate-hover-bounce'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarContent'
						aria-controls='navbarContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
						onClick={() => setMobileOpen(!mobileOpen)}
						style={{
							background: 'rgba(0, 0, 0, 0.1)',
							backdropFilter: 'blur(10px)',
						}}
					>
						<span className='navbar-toggler-icon d-flex flex-column justify-content-between align-items-center'>
							<span
								className={`d-block rounded ${mobileOpen ? 'rotate-45' : ''}`}
								style={{
									width: '24px',
									height: '2px',
									backgroundColor: '#2E3A3A',
									transition: 'all 0.3s ease',
								}}
							></span>
							<span
								className={`d-block rounded ${mobileOpen ? 'opacity-0' : ''}`}
								style={{
									width: '24px',
									height: '2px',
									backgroundColor: '#2E3A3A',
									transition: 'all 0.3s ease',
									margin: '4px 0',
								}}
							></span>
							<span
								className={`d-block rounded ${mobileOpen ? 'rotate--45' : ''}`}
								style={{
									width: '24px',
									height: '2px',
									backgroundColor: '#2E3A3A',
									transition: 'all 0.3s ease',
								}}
							></span>
						</span>
						<span className='menu-text ms-2 d-none d-sm-inline fw-medium' style={{ color: '#2E3A3A' }}>
							{mobileOpen ? 'Close' : 'Menu'}
						</span>
					</button>

					{/* Navbar Links */}
					<div className='collapse navbar-collapse animate__animated animate__fadeIn' id='navbarContent'>
						<ul className='navbar-nav mx-auto mb-2 mb-lg-0 px-3'>
							<li className='nav-item mx-1 mx-md-2'>
								<a
									className='nav-link active px-3 py-2 rounded'
									aria-current='page'
									href='/'
									style={{ color: '#2E3A3A' }}
								>
									<i
										className='bi bi-house-door me-2 animate-icon-bounce'
										style={{ color: '#2E3A3A' }}
									></i>
									<span className='nav-link-text' style={{ color: '#2E3A3A' }}>
										Home
									</span>
									<span className='nav-link-highlight'></span>
								</a>
							</li>
							<li className='nav-item mx-1 mx-md-2'>
								<a className='nav-link px-3 py-2 rounded' href='/About' style={{ color: '#2E3A3A' }}>
									<i
										className='bi bi-info-circle me-2 animate-icon-bounce'
										style={{ color: '#2E3A3A' }}
									></i>
									<span className='nav-link-text' style={{ color: '#2E3A3A' }}>
										About
									</span>
									<span className='nav-link-highlight'></span>
								</a>
							</li>
							<li className='nav-item mx-1 mx-md-2'>
								<a className='nav-link px-3 py-2 rounded' href='/Products' style={{ color: '#2E3A3A' }}>
									<i className='bi bi-gear me-2 animate-icon-bounce' style={{ color: '#2E3A3A' }}></i>
									<span className='nav-link-text' style={{ color: '#2E3A3A' }}>
										Product
									</span>
									<span className='nav-link-highlight'></span>
								</a>
							</li>
							<li className='nav-item mx-1 mx-md-2'>
								<a
									className='nav-link px-3 py-2 rounded'
									href='/product-verification'
									style={{ color: '#2E3A3A' }}
								>
									<i
										className='bi bi-shield-check me-2 animate-icon-bounce'
										style={{ color: '#2E3A3A' }}
									></i>
									<span className='nav-link-text' style={{ color: '#2E3A3A' }}>
										ProductVerification
									</span>
									<span className='nav-link-highlight'></span>
								</a>
							</li>
							<li className='nav-item mx-1 mx-md-2'>
								<a className='nav-link px-3 py-2 rounded' href='/Contact' style={{ color: '#2E3A3A' }}>
									<i
										className='bi bi-envelope me-2 animate-icon-bounce'
										style={{ color: '#2E3A3A' }}
									></i>
									<span className='nav-link-text' style={{ color: '#2E3A3A' }}>
										Contact
									</span>
									<span className='nav-link-highlight'></span>
								</a>
							</li>
						</ul>

						{/* Right Side Buttons */}
						<div className='d-flex align-items-center ms-2 ms-lg-0'>
							{/* Contact Dropdown */}
							<div className='me-3 d-none d-lg-block'>
								<ContactDropdown />
							</div>

							{/* Quick Contact for Mobile */}
							<div className='me-3 d-lg-none'>
								<button
									className='btn btn-outline-dark btn-sm animate-hover-bounce'
									onClick={() => setShowContactModal(true)}
									style={{ color: '#2E3A3A', borderColor: '#2E3A3A' }}
								>
									<i className='bi bi-chat-left-text me-1' style={{ color: '#2E3A3A' }}></i>
									Contact
								</button>
							</div>

							{/* Enhanced Get Started Button */}
							<div>
								<button
									className='btn btn-danger px-4 py-2 animate-glow-button position-relative overflow-hidden'
									onClick={() => setShowContactModal(true)}
								>
									<span className='button-text fw-semibold'>Get Started</span>
									<i className='bi bi-whatsapp ms-2 animate-slide-right'></i>
									<span className='button-shine'></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* Contact Modal */}
			{showContactModal && <ContactModal />}

			{/* Spacer for fixed navbar */}
			<div
				style={{
					height: scrolled ? '70px' : '100px',
					transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
				}}
			></div>

			{/* Add Bootstrap Icons */}
			<link
				rel='stylesheet'
				href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css'
			/>
			{/* Add Animate.css */}
			<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' />
		</div>
	);
};

export default ResponsiveNavbar;
