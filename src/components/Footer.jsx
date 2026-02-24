// Footer.jsx
import React from 'react';
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
	FaHome,
	FaUserFriends,
	FaBriefcase,
	FaEnvelope,
	FaLaptopCode,
	FaCode,
	FaBullhorn,
	FaSearch,
	FaMobileAlt,
	FaMapMarkerAlt,
	FaPhone,
	FaEnvelopeOpen,
	FaClock,
	FaShieldAlt,
	FaFileContract,
	FaStethoscope,
	FaPills,
	FaHeartbeat,
	FaMicroscope,
	FaUserMd,
	FaHeart,
	FaBrain,
	FaBone,
	FaEye,
	FaSignInAlt,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='bg-dark text-white pt-5 pb-4'>
			<div className='container'>
				{/* Main Footer Sections */}
				<div className='row mb-5 g-4'>
					{/* About Us Section */}
					<div className='col-lg-4 col-md-6'>
						<h4 className='text-uppercase mb-4' style={{ color: '#4dc0b5' }}>
							ABOUT US
						</h4>
						<p className='text-white mb-4' style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
							Medikosh Nutria is a premium nutraceutical company in India and a subsidiary of Medikosh
							Healthovation Private Limited. We were founded with a clear vision—to make reliable,
							science-based nutrition accessible to more people.
						</p>
						<div className='d-flex flex-wrap'>
							{[
								{ icon: <FaFacebookF />, label: 'Facebook', color: '#1877F2' },
								{ icon: <FaTwitter />, label: 'Twitter', color: '#1DA1F2' },
								{ icon: <FaInstagram />, label: 'Instagram', color: '#E4405F' },
								{ icon: <FaLinkedinIn />, label: 'LinkedIn', color: '#0A66C2' },
							].map((social, index) => (
								<a
									key={index}
									href='#'
									className='btn btn-outline-light btn-sm rounded-circle me-2 mb-2 social-icon'
									aria-label={social.label}
									style={{
										width: '38px',
										height: '38px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										transition: 'all 0.3s ease',
										borderColor: social.color,
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = social.color;
										e.currentTarget.style.transform = 'translateY(-5px)';
										e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = 'transparent';
										e.currentTarget.style.transform = 'translateY(0)';
										e.currentTarget.style.boxShadow = 'none';
									}}
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>

					{/* Quick Links Section */}
					<div className='col-lg-4 col-md-6'>
						<h4 className='text-uppercase mb-4' style={{ color: '#4dc0b5' }}>
							QUICK LINKS
						</h4>
						<div className='row'>
							<div className='col-6'>
								<ul className='list-unstyled'>
									{[
										{ icon: <FaHome />, text: 'Home', link: '/' },
										{ icon: <FaUserFriends />, text: 'About Us', link: '/about' },
										{ icon: <FaBriefcase />, text: 'Product', link: '/products' },
										{
											icon: <FaShieldAlt />,
											text: 'ProductVerification',
											link: '/product-verification',
										},
									].map((item, index) => (
										<li key={index} className='mb-2'>
											<a
												href={item.link}
												className='text-decoration-none text-white d-flex align-items-center quick-link'
												style={{
													transition: 'all 0.3s ease',
													padding: '5px 10px',
													borderRadius: '4px',
													fontSize: '0.95rem',
												}}
												onMouseEnter={(e) => {
													e.currentTarget.style.backgroundColor = 'rgba(77, 192, 181, 0.1)';
													e.currentTarget.style.paddingLeft = '15px';
													e.currentTarget.style.transform = 'translateX(5px)';
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.backgroundColor = 'transparent';
													e.currentTarget.style.paddingLeft = '10px';
													e.currentTarget.style.transform = 'translateX(0)';
												}}
											>
												<span
													className='me-2'
													style={{ color: '#4dc0b5', transition: 'all 0.3s ease' }}
												>
													{item.icon}
												</span>
												{item.text}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className='col-6'>
								<ul className='list-unstyled'>
									{[
										{ icon: <FaEnvelope />, text: 'Contact', link: '/contact' },
										{ icon: <FaFileContract />, text: 'PrivacyPolicy', link: '/privacy-policy' },
										{
											icon: <FaFileContract />,
											text: 'TermsConditions',
											link: '/terms-conditions',
										},
									].map((item, index) => (
										<li key={index} className='mb-2'>
											<a
												href={item.link}
												className='text-decoration-none text-white d-flex align-items-center quick-link'
												style={{
													transition: 'all 0.3s ease',
													padding: '5px 10px',
													borderRadius: '4px',
													fontSize: '0.95rem',
												}}
												onMouseEnter={(e) => {
													e.currentTarget.style.backgroundColor = 'rgba(77, 192, 181, 0.1)';
													e.currentTarget.style.paddingLeft = '15px';
													e.currentTarget.style.transform = 'translateX(5px)';
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.backgroundColor = 'transparent';
													e.currentTarget.style.paddingLeft = '10px';
													e.currentTarget.style.transform = 'translateX(0)';
												}}
											>
												<span
													className='me-2'
													style={{ color: '#4dc0b5', transition: 'all 0.3s ease' }}
												>
													{item.icon}
												</span>
												{item.text}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					{/* Contact Section */}
					<div className='col-lg-4 col-md-12'>
						<h4 className='text-uppercase mb-4' style={{ color: '#4dc0b5' }}>
							CONTACT US
						</h4>
						<ul className='list-unstyled'>
							{[
								{
									icon: <FaMapMarkerAlt />,
									text: 'Ranikhet Tower, Dewalchaur, Haldwani, Dis: Nainital Uttarakhand-263139',
								},
								{ icon: <FaPhone />, text: '+91 9720030123' },
								{ icon: <FaEnvelopeOpen />, text: 'Care@medikoshnutria.com' },
								{ icon: <FaClock />, text: 'Mon-Fri: 9AM - 6PM, Sat: 10AM - 2PM' },
							].map((contact, index) => (
								<li key={index} className='mb-3 d-flex align-items-start contact-item'>
									<span
										className='me-3 mt-1 contact-icon flex-shrink-0'
										style={{
											color: '#4dc0b5',
											fontSize: '1.1rem',
											transition: 'all 0.3s ease',
										}}
									>
										{contact.icon}
									</span>
									<span className='text-white' style={{ lineHeight: '1.4', fontSize: '0.95rem' }}>
										{contact.text}
									</span>
								</li>
							))}

							{/* Newsletter Subscription */}
							<li className='mt-4'>
								<h5 className='text-white mb-3' style={{ fontSize: '1rem', color: '#4dc0b5' }}>
									Subscribe to our Newsletter
								</h5>
								<div className='d-flex flex-column flex-sm-row'>
									<input
										type='email'
										className='form-control mb-2 mb-sm-0'
										placeholder='Your email address'
										style={{
											backgroundColor: 'rgba(255,255,255,0.1)',
											border: '1px solid #4dc0b5',
											color: 'white',
											borderRadius: '4px 0 0 4px',
											padding: '10px 15px',
											fontSize: '0.95rem',
										}}
									/>
									<button
										className='btn'
										style={{
											backgroundColor: '#4dc0b5',
											color: 'white',
											border: '1px solid #4dc0b5',
											borderRadius: '0 4px 4px 0',
											padding: '10px 20px',
											fontSize: '0.95rem',
											fontWeight: '500',
											transition: 'all 0.3s ease',
											whiteSpace: 'nowrap',
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.backgroundColor = '#3aa8a0';
											e.currentTarget.style.transform = 'scale(1.05)';
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.backgroundColor = '#4dc0b5';
											e.currentTarget.style.transform = 'scale(1)';
										}}
									>
										Subscribe
									</button>
								</div>
								<p className='text-white-50 mt-2 small'>Get updates about new products and offers</p>
							</li>
						</ul>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className='row pt-4 border-top border-secondary'>
					<div className='col-12'>
						<div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
							<p className='mb-3 mb-md-0 text-white' style={{ fontSize: '0.9rem' }}>
								© {new Date().getFullYear()} Medikosh Nutria. All Rights Reserved.
							</p>

							<div className='d-flex flex-wrap justify-content-center gap-2 gap-md-3 mb-3 mb-md-0'>
								<a
									href='/privacy-policy'
									className='text-decoration-none text-white footer-bottom-link px-2'
									style={{ fontSize: '0.9rem', transition: 'all 0.3s ease' }}
									onMouseEnter={(e) => {
										e.currentTarget.style.color = '#4dc0b5';
										e.currentTarget.style.textDecoration = 'underline';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.color = 'white';
										e.currentTarget.style.textDecoration = 'none';
									}}
								>
									Privacy Policy
								</a>
								<span className='text-white d-none d-sm-inline'>|</span>
								<a
									href='/terms-conditions'
									className='text-decoration-none text-white footer-bottom-link px-2'
									style={{ fontSize: '0.9rem', transition: 'all 0.3s ease' }}
									onMouseEnter={(e) => {
										e.currentTarget.style.color = '#4dc0b5';
										e.currentTarget.style.textDecoration = 'underline';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.color = 'white';
										e.currentTarget.style.textDecoration = 'none';
									}}
								>
									Terms & Conditions
								</a>
								<span className='text-white d-none d-sm-inline'>|</span>
								<a
									href='/sitemap'
									className='text-decoration-none text-white footer-bottom-link px-2'
									style={{ fontSize: '0.9rem', transition: 'all 0.3s ease' }}
									onMouseEnter={(e) => {
										e.currentTarget.style.color = '#4dc0b5';
										e.currentTarget.style.textDecoration = 'underline';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.color = 'white';
										e.currentTarget.style.textDecoration = 'none';
									}}
								>
									Sitemap
								</a>
							</div>

							<p className='text-white mb-0' style={{ fontSize: '0.9rem' }}>
								Made with{' '}
								<span
									className='text-danger heart-icon'
									style={{
										display: 'inline-block',
										transition: 'all 0.3s ease',
									}}
								>
									❤️
								</span>{' '}
								by{' '}
								<span
									className='fw-bold creator-name'
									style={{
										color: '#4dc0b5',
										transition: 'all 0.3s ease',
										cursor: 'default',
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.textShadow = '0 0 10px rgba(77, 192, 181, 0.5)';
										e.currentTarget.style.transform = 'scale(1.1)';
										e.currentTarget.style.display = 'inline-block';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.textShadow = 'none';
										e.currentTarget.style.transform = 'scale(1)';
									}}
								>
									Gaurav
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Add CSS for smoother transitions and responsiveness */}
			<style jsx>{`
				.contact-item:hover .contact-icon {
					transform: scale(1.2) rotate(5deg);
					color: #ffffff;
				}

				.heart-icon:hover {
					transform: scale(1.5);
					filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.5));
					display: inline-block;
				}

				.quick-link:hover {
					border-left: 3px solid #4dc0b5;
				}

				.footer-bottom-link {
					position: relative;
				}

				/* Responsive adjustments */
				@media (max-width: 768px) {
					.container {
						padding-left: 20px;
						padding-right: 20px;
					}

					h4 {
						font-size: 1.25rem;
					}

					.input-group {
						flex-direction: column;
					}

					.btn {
						width: 100%;
						border-radius: 4px !important;
					}

					input.form-control {
						border-radius: 4px !important;
						margin-bottom: 10px;
					}
				}

				@media (max-width: 576px) {
					.d-flex.flex-wrap.gap-2 {
						gap: 0.5rem !important;
					}

					.footer-bottom-link {
						padding: 0.25rem 0.5rem;
					}
				}
			`}</style>
		</footer>
	);
};

export default Footer;
